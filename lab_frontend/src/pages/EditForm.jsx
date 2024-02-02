import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchLabData, updateLabData } from '../store/thunk';

function EditForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const labData = useSelector(state => state.lab.labInfo);

    const {id} = useParams();

    const [labName, setLabName] = useState('');
    const [labType, setLabType] = useState('');
    const [mainCategory, setMainCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [labCode, setLabCode] = useState('');
    const [labPrice, setLabPrice] = useState('');

    useEffect(() => {
        const filteredData = labData.filter((item) => item._id === id)

        filteredData.map((item) => {
            setLabName(item.labName),
            setLabType(item.labType)
            setMainCategory(item.mainCategory),
            setSubCategory(item.subCategory),
            setLabCode(item.labCode),
            setLabPrice(item.labPrice)
        })
    }, [labData])


    const handleEdit = (id) => {
        const updatedLabData = {
            labName,
            labType,
            mainCategory,
            subCategory,
            labCode,
            labPrice
        };
    
        dispatch(updateLabData(id, updatedLabData));
        navigate('/');
    };
    
   

    const optionss = ['Lab Type', 'Radiology', 'Laboratory']

  return (
    <div className='form_container'>
        <form>
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
                    <button className='submit_button' onClick={() => handleEdit(id)}>EDIT</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditForm