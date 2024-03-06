import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLabData } from '../../store/thunk';
import LabTable from '../LabTable';
import ReactPaginate from 'react-paginate';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Pagination.css"

function LabPagination({filteredData, handleOpenModal}) {
  const labData = useSelector((state) => state.lab.labInfo);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0); // Start from the first page
  const itemsPerPage = 5;


  useEffect(() => {
    dispatch(fetchLabData());
  }, [dispatch]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const currentPageData = filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div>
      <LabTable currentPageData={currentPageData} handleOpenModal={handleOpenModal}/>
      <ReactPaginate
       breakLabel="..."
       nextLabel="next >"
       onPageChange={handlePageClick}
       pageRangeDisplayed={10}
       pageCount={pageCount}
       previousLabel="< previous"
       renderOnZeroPageCount={null}
       marginPagesDisplayed={2}
       containerClassName="pagination justify-content-center"
       pageClassName="page-item"
       pageLinkClassName="page-link"
       previousClassName="page-item"
       previousLinkClassName="page-link"
       nextClassName="page-item"
       nextLinkClassName="page-link"
       activeClassName="active"
      />
    </div>
  );
}

export default LabPagination;
