import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ShowOptions.css'

function ShowPharmacyOptions({filteredData}) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/showpharmacyinfo/${id}`)
  }
  return (
    <div className='show_options_container'>
        {
            filteredData.map((item, index) => (
                <button key={index} onClick={() => handleClick(item._id)}>{item.drugName}</button>
            ))
        }
    </div>
  )
}

export default ShowPharmacyOptions