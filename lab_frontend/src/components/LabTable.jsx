import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { MdOutlinePreview } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteLabData, fetchLabData } from '../store/thunk';
import '../components/Table.css'
import { useSnackbar } from 'notistack';


function LabTable({filteredData, handleOpenModal}) {
const dispatch = useDispatch();
const {enqueueSnackbar} = useSnackbar();

  return (
    <div className='table_container'>
        <table>
            <thead>
              <tr>
                <th>Lab Item</th>
                <th>Lab Type</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Code</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
               {
                filteredData.map((tableInfo, index) => (
                  <tr key={tableInfo._id}>
                    <td>{tableInfo.labName}</td>
                    <td>{tableInfo.labType}</td>
                    <td>{tableInfo.mainCategory}</td>
                    <td>{tableInfo.subCategory}</td>
                    <td>{tableInfo.labCode}</td>
                    <td>{tableInfo.labPrice}</td>
                    <td>
                      <div className='table_icons_container' style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
                        <Link className='view_btn' to={`/showlabinfo/${tableInfo._id}`}><MdOutlinePreview /></Link>
                        <Link className='edit_btn' to={`/editlabform/${tableInfo._id}`}><CiEdit /></Link>
                        <MdDelete className='delete_btn' onClick={() => handleOpenModal(tableInfo._id)}/>
                      </div>
                    </td>
                </tr>
                ))
               }
            </tbody>
          </table>
    </div>
  )
}

export default LabTable