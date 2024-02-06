import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ShowOptions.css'

function ShowOptions({filteredData}) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/showlabinfo/${id}`)
  }
  return (
    <div className='show_options_container'>
        {
            filteredData.map((item, index) => (
                <button key={index} onClick={() => handleClick(item._id)}>{item.labName}</button>
            ))
        }
    </div>
  )
}

export default ShowOptions