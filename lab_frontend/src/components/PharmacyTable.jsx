import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlinePreview } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { fetchDrugData } from '../store/thunk';
import { Link } from 'react-router-dom';

function PharmacyTable() {
    const dispatch = useDispatch();
    const drugData = useSelector((state) => state.pharmacy.pharmacyInfo)
    console.log(drugData)

    useEffect(() => {
        dispatch(fetchDrugData())
    }, [dispatch])

  return (
    <div className='table_container'>
    <table>
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Description</th>
            <th>Unit of Pricing</th>
            <th>Drug Code</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           {
            drugData.map((tableInfo, index) => (
              <tr key={tableInfo._id}>
                <td>{tableInfo.drugName}</td>
                <td>{tableInfo.description}</td>
                <td>{tableInfo.unitPrice}</td>
                <td>{tableInfo.drugCode}</td>
                <td>{tableInfo.drugPrice}</td>
                <td>
                  <div className='table_icons_container' style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
                    <Link className='view_btn'><MdOutlinePreview /></Link>
                    <Link className='edit_btn'><CiEdit /></Link>
                    <MdDelete className='delete_btn' />
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

export default PharmacyTable