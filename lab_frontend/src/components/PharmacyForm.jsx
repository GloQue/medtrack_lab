import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDrugData, fetchDrugData } from '../store/thunk';
import './PharmacyForm.css'
import { useSnackbar } from 'notistack';
import PharmacyStats from './PharmacyStats';


function PharmacyForm() {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const pharmacyData = useSelector((state) => state.pharmacy.pharmacyInfo);

    const [drugName, setDrugName] = useState('');
    const [description, setDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [drugCode, setDrugCode] = useState('');
    const [drugPrice, setDrugPrice] = useState('');

    useEffect(() => {
      dispatch(fetchDrugData())
    }, [dispatch])


    const handleDrugSubmission = (event) => {
        event.preventDefault();
        const drug = {
            drugName,
            description,
            unitPrice,
            drugCode,
            drugPrice
        }

        if(!drugName){
          enqueueSnackbar('Name field is required', {variant: 'error'})
        }else if(!description){
          enqueueSnackbar('Description field is required', {variant: 'error'})
        }else if(!unitPrice){
          enqueueSnackbar('Unit of Pricing field is required', {variant: 'error'})
        }else if(!drugCode){
          enqueueSnackbar('Drug code field is required', {variant: 'error'})
        }else if(!drugPrice){
          enqueueSnackbar('Drug price field is required', {variant: 'error'})
        }else{
          dispatch(addDrugData(drug));

          setDrugName('')
          setDescription('')
          setUnitPrice('')
          setDrugCode('')
          setDrugPrice('')

          enqueueSnackbar('Drug added successfully', {variant: 'success'})
        }

    }

  return (
    <div className='form_container_pharmacy'>
      <form onSubmit={handleDrugSubmission}>
        <div className='label_input_container_pharmacy'>
          <label htmlFor="">Drug Name</label>
          <input type="text" placeholder='Enter drug name here' value={drugName} onChange={(event) => setDrugName(event.target.value)}/>
        </div>
        <div className='label_input_container_pharmacy'>
          <label htmlFor="">Description</label>
          <textarea name="" id="" cols="6" rows="3" value={description} onChange={(event) => setDescription(event.target.value)} placeholder='Enter drug description'></textarea>
        </div>
        <div className='label_input_container_pharmacy'>
          <label htmlFor="">Unit Of Pricing</label>
          <input type="text" placeholder='Unit Of Pricing' value={unitPrice} onChange={(event) => setUnitPrice(event.target.value)}/>
        </div>
        <div className='label_input_container_pharmacy'>
          <label htmlFor="">Drug Code</label>
          <input type="text" placeholder='Drug Code' value={drugCode} onChange={(event) => setDrugCode(event.target.value)}/>
        </div>
        <div className='label_input_container_pharmacy submit_section_pharmacy'>
          <label htmlFor="">Drug Price</label>
          <input type="number" placeholder='Price of drug in GHS' value={drugPrice} onChange={(event) => setDrugPrice(event.target.value)} />
          <div className='form_btn_container_pharmacy'>
            <button type='submit' className='submit_button_pharmacy'>+ ADD</button>
          </div>
        </div>
      </form>
      <div className='stats_container_pharmacy'>
        <PharmacyStats pharmacyData={pharmacyData} />
      </div>
    </div>
  )
}

export default PharmacyForm





      