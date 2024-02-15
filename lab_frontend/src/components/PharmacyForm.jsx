import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDrugData } from '../store/thunk';

function PharmacyForm() {
    const dispatch = useDispatch();

    const [drugName, setDrugName] = useState('');
    const [description, setDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [drugCode, setDrugCode] = useState('');
    const [drugPrice, setDrugPrice] = useState('');


    const handleDrugSubmission = (event) => {
        event.preventDefault();
        const drug = {
            drugName,
            description,
            unitPrice,
            drugCode,
            drugPrice
        }

        dispatch(addDrugData(drug));

        setDrugName('')
        setDescription('')
        setUnitPrice('')
        setDrugCode('')
        setDrugPrice('')
    }

  return (
    <div className='form_container'>
      <form onSubmit={handleDrugSubmission}>
        <div className='label_input_container'>
          <label htmlFor="">Drug Name</label>
          <input type="text" placeholder='Enter drug name here' value={drugName} onChange={(event) => setDrugName(event.target.value)}/>
        </div>
        <div className='label_input_container'>
          <label htmlFor="">Description</label>
          <input type="text" placeholder='Drug Description' value={description} onChange={(event) => setDescription(event.target.value)}/>
        </div>
        <div className='label_input_container'>
          <label htmlFor="">Unit Of Pricing</label>
          <input type="text" placeholder='Unit Of Pricing' value={unitPrice} onChange={(event) => setUnitPrice(event.target.value)}/>
        </div>
        <div className='label_input_container'>
          <label htmlFor="">Drug Code</label>
          <input type="text" placeholder='Drug Code' value={drugCode} onChange={(event) => setDrugCode(event.target.value)}/>
        </div>
        <div className='label_input_container submit_section'>
          <label htmlFor="">Drug Price</label>
          <input type="number" placeholder='Enter price of drug'value={drugPrice} onChange={(event) => setDrugPrice(event.target.value)} />
          <div className='form_btn_container'>
            <button type='submit' className='submit_button'>ADD</button>
          </div>
        </div>
      </form>
      <div className='stats_container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veniam, magni iusto aliquam reiciendis suscipit deleniti sequi. Praesentium dignissimos architecto esse fuga quia! Quae aut cum incidunt commodi temporibus voluptas fugiat tempora minima alias, error quos enim at dolor quo porro voluptatum quisquam voluptates, saepe dolore. Esse ab et voluptate.</div>
    </div>
  )
}

export default PharmacyForm