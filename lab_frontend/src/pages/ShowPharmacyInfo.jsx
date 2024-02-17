import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ShowPharmacyInfo() {
    const pharmacyDetails = useSelector((state) => state.pharmacy.pharmacyInfo);
    console.log({pharmacyDetails})
    const {id} = useParams();

    const filterPharmDetails = pharmacyDetails.find((item) => item._id === id)
  return (
    <div>
        <p>{filterPharmDetails._id}</p>
        <p>{filterPharmDetails.drugName}</p>
        <p>{filterPharmDetails.description}</p>
        <p>{filterPharmDetails.unitPrice}</p>
        <p>{filterPharmDetails.drugCode}</p>
        <p>{filterPharmDetails.drugPrice}</p>
    </div>
  )
}

export default ShowPharmacyInfo