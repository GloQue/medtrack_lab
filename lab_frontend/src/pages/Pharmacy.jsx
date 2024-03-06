import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PharmacyNav from '../components/PharmacyNav'
import PharmacyForm from '../components/PharmacyForm'
import PharmacyTable from '../components/PharmacyTable'
import ShowPharmacyOptions from '../components/ShowPharmacyOptions'
import { useSnackbar } from "notistack";
import { deleteDrugData, fetchDrugData } from '../store/thunk'
import DeleteModal from '../components/DeleteModal'

function Pharmacy() {
  const data = useSelector((state) => state.pharmacy.pharmacyInfo);
  const dispatch = useDispatch();
  // const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDrugId, setSelectedDrugId] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    dispatch(fetchDrugData);
  }, [dispatch]);

  useEffect(() => {
    setInputData(data);
  }, [data]);

  const handleOpenModal = (id) => {
    setSelectedDrugId(id)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleDelete = (id) => {
    dispatch(deleteDrugData(id))
    setOpenModal(false)
    enqueueSnackbar("item deleted successfully");
  }

  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    // setInputVal(inputValue);

    if (inputValue.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = inputData.filter((item) => item && item.drugName && item.drugName.toLowerCase().includes(inputValue.toLowerCase()) || item && item.drugName && item.drugCode.toLowerCase().includes(inputValue.toLowerCase()));
      if (filtered.length > 0) {
        setFilteredData(filtered);
      } else {
        enqueueSnackbar("No items match your search");
      }
    }
  };


  return (
    <div>
        <PharmacyNav handleOnChange={handleOnChange}/>
          {
            openModal && <DeleteModal handleCloseModal={handleCloseModal} handleDelete={handleDelete} selectedDrugId={selectedDrugId}/>
          }
        <ShowPharmacyOptions filteredData={filteredData}/>
        <div style={{padding: "2rem 3rem"}}>
          <h1 className='pharmacy_heading'>Pharmacy Inventory Management System</h1>
          <PharmacyForm />
          <PharmacyTable data={data} handleOpenModal={handleOpenModal}/>
        </div>
    </div>
  )
}

export default Pharmacy