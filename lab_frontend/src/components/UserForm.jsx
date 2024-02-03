import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLabData } from '../store/thunk';
import { IoMdAdd } from "react-icons/io";
import '../components/UserForm.css'


function UserForm() {
  const dispatch = useDispatch();

  const [labName, setLabName] = useState('');
  const [labType, setLabType] = useState('');
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [labCode, setLabCode] = useState('');
  const [labPrice, setLabPrice] = useState('');
  
 

  const optionss = ['Lab Type', 'Radiology', 'Laboratory'];

  const handleSubmit = (event) => {
    event.preventDefault();

    const labDetails = {
      labName,
      labType,
      mainCategory,
      subCategory,
      labCode,
      labPrice
    }

    dispatch(addLabData(labDetails));

    setLabName('')
    setLabType('')
    setMainCategory('')
    setSubCategory('')
    setLabCode('')
    setLabPrice('')
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
          <input type="text" placeholder='Aoc123FH' value={labCode} onChange={(event) => setLabCode(event.target.value)}/>
        </div>
        <div className='label_input_container submit_section'>
          <label htmlFor="">Price</label>
          <input type="text" placeholder='2.02' value={labPrice} onChange={(event) => setLabPrice(event.target.value)}/>
          <div className='form_btn_container'>
            <button type='submit' className='submit_button' disabled={!labName || !labType || !mainCategory || !subCategory ||!labCode ||!labPrice} style={(!labName || !labType || !mainCategory || !subCategory ||!labCode ||!labPrice) ? {cursor: "not-allowed"} : {cursor: "pointer"}}><IoMdAdd />ADD</button>
          </div>
        </div>
      </form>
      <div className='stats_container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam, magni iusto aliquam reiciendis suscipit deleniti sequi. Praesentium dignissimos architecto esse fuga quia! Quae aut cum incidunt commodi temporibus voluptas fugiat tempora minima alias, error quos enim at dolor quo porro voluptatum quisquam voluptates, saepe dolore. Esse ab et voluptate.</div>
    </div>
  )
}

export default UserForm