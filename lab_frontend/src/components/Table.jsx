import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { MdOutlinePreview } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteLabData, fetchLabData } from '../store/thunk';


function Table({data}) {
const dispatch = useDispatch();

const handleDelete = (id) => {
  if (window.confirm('Are you sure you want to delete this item?')) {
    dispatch(deleteLabData(id));
    dispatch(fetchLabData());
  }
};


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
                data.map((tableInfo, index) => (
                  <tr key={tableInfo._id}>
                    <td>{tableInfo.labName}</td>
                    <td>{tableInfo.labType}</td>
                    <td>{tableInfo.mainCategory}</td>
                    <td>{tableInfo.subCategory}</td>
                    <td>{tableInfo.labCode}</td>
                    <td>{tableInfo.labPrice}</td>
                    <td>
                      <div style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
                        <Link to={`/showlabinfo/${tableInfo._id}`}><MdOutlinePreview /></Link>
                        <Link to={`/editform/${tableInfo._id}`}><CiEdit /></Link>
                        <MdDelete onClick={() => handleDelete(tableInfo._id)}/>
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

export default Table