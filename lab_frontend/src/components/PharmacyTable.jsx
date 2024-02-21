import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlinePreview } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { deleteDrugData, fetchDrugData } from '../store/thunk';
import { Link } from 'react-router-dom';
import './PharmacyTable.css'
import { useSnackbar } from 'notistack';

function PharmacyTable({data}) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        dispatch(fetchDrugData())
    }, [dispatch])

    const handleDelete = (id) => {
      if(window.confirm('Are you sure you want to delete this data?')){
        dispatch(deleteDrugData(id))
        enqueueSnackbar('Drug removed successfully', {variant: 'success'})
      }
    }

  return (
    <div className='table_container_pharmacy'>
    <table>
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Description</th>
            <th>Unit of Pricing</th>
            <th>Drug Code</th>
            <th>Price(GH&#8373;)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           {
            data.length > 0 ? (
              <>
              {
                data.map((tableInfo, index) => (
                  <tr key={tableInfo._id}>
                    <td>{tableInfo.drugName}</td>
                    <td>{tableInfo.description}</td>
                    <td>{tableInfo.unitPrice}</td>
                    <td>{tableInfo.drugCode}</td>
                    <td>{tableInfo.drugPrice}</td>
                    <td>
                      <div className='table_icons_container_pharmacy' style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
                        <Link className='view_btn_pharmacy' to={`/showpharmacyinfo/${tableInfo._id}`}><MdOutlinePreview /></Link>
                        <Link className='edit_btn_pharmacy' to={`/editpharmacyform/${tableInfo._id}`}><CiEdit /></Link>
                        <MdDelete className='delete_btn_pharmacy' onClick={() => handleDelete(tableInfo._id)}/>
                      </div>
                    </td>
                  </tr>
            ))
           }
              </>
            ) : (<>Please add a drug</>)
           }
        </tbody>
      </table>
</div>
  )
}

export default PharmacyTable