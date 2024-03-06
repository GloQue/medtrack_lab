import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLabData, fetchLabData } from "../store/thunk";
import { useSnackbar } from "notistack";
import LabTable from "../components/LabTable";
import LabNav from "../components/LabNav";
import LabForm from "../components/LabForm";
import DeleteModal from "../components/DeleteModal";
import Posts from "../components/Pagination/Posts";
import Pagination from "../components/Pagination/Pagination";
import LabPagination from "../components/Pagination/LabPagination";

function Labs() {
  const labData = useSelector((state) => state.lab.labInfo);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDrugId, setSelectedDrugId] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    dispatch(fetchLabData());
  }, [dispatch]);

  // useEffect(() => {
  //   setPosts(labData)
  // }, [])

  useEffect(() => {
    setFilteredData(labData)
  }, [labData])

  const handleOpenModal = (id) => {
    setSelectedDrugId(id)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleDelete = (id) => {
    dispatch(deleteLabData(id))
    setOpenModal(false)
    enqueueSnackbar("item deleted successfully");
  }

  const handleSearchField = (event) => {
    const inputValue = event.target.value;
    setInputVal(inputValue);
  
    if (inputValue.trim() === '') {
      setFilteredData(labData);
    } else {
      const filtered = labData.filter(item => item && item.labName && item.labName.toLowerCase().includes(inputValue.toLowerCase()));
      setFilteredData(filtered);
    }
  };


  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <LabNav handleSearchField={handleSearchField}/>
      {
        openModal && <DeleteModal handleCloseModal={handleCloseModal} handleDelete={handleDelete} selectedDrugId={selectedDrugId}/>
      }
      <div style={{ padding: "2rem 3rem" }}>
        <h1 className="lab_heading">Lab Inventory Management System</h1>
        <LabForm />
        <LabPagination filteredData={filteredData} handleOpenModal={handleOpenModal}/>
        {/* <LabTable handleOpenModal={handleOpenModal}/> */}
        {/* <Posts posts={currentPosts}/>
        <Pagination postsPerPage={postsPerPage} totalPosts={filteredData.length} paginate={paginate}/> */}
      </div>
    </div>
  );
}

export default Labs;
