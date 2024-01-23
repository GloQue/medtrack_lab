import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ADD_DATA} from '../store/actions'


function UserForm() {
  const dispatch = useDispatch()

  const [labName, setLabName] = useState('')
  const [labType, setLabType] = useState('')
  const [mainCategory, setMainCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [labItemCode, setLabItemCode] = useState('')
  const [price, setPrice] = useState('')
  
 

  const optionss = ['Lab Type', 'Radiology', 'Laboratory']

  console.log('labtype', labType)

  const handleSubmit = (event) => {
    event.preventDefault()

    const labDetails = {
      labName,
      labType,
      mainCategory,
      subCategory,
      labItemCode,
      price
    }

    dispatch({type: ADD_DATA, payload: labDetails})

    setLabName('')
    setLabType('')
    setMainCategory('')
    setSubCategory('')
    setLabItemCode('')
    setPrice('')
  }


  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit}>
        <div className='label_input_container select_section'>
          <label htmlFor="">Lab Item Name</label>
          <input type="text" placeholder='Type lab name here' value={labName} onChange={(event) => setLabName(event.target.value)}/>
          <select name="" id="" value={labType} onChange={(event) => setLabType(event.target.value)}>
            {
              optionss.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))
            }
          </select>
        </div>
        <div className='label_input_container'>
          <label htmlFor="">Main Category</label>
          <input type="text" placeholder='X-ray' value={mainCategory} onChange={(event) => setMainCategory(event.target.value)}/>
        </div>
        <div className='label_input_container'>
          <label htmlFor="">Sub Category</label>
          <input type="text" placeholder='Head and Skull' value={subCategory} onChange={(event) => setSubCategory(event.target.value)}/>
        </div>
        <div className='label_input_container'>
          <label htmlFor="">Lab Item Code</label>
          <input type="text" placeholder='Aoc123FH' value={labItemCode} onChange={(event) => setLabItemCode(event.target.value)}/>
        </div>
        <div className='label_input_container submit_section'>
          <label htmlFor="">Price</label>
          <input type="text" placeholder='2.02' value={price} onChange={(event) => setPrice(event.target.value)}/>
          <div className='form_btn_container'>
            <button type='submit' className='submit_button'> + ADD</button>
          </div>
        </div>
      </form>
      <div className='stats_container'></div>
    </div>
  )
}

export default UserForm