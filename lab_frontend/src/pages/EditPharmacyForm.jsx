import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { updateDrugData } from '../store/thunk';
import '../components/EditForm.css'
import { useSnackbar } from 'notistack';
import '../components/EditPharmacyForm.css'

function EditPharmacyForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const pharmDetails = useSelector((state) => state.pharmacy.pharmacyInfo);
    console.log({pharmDetails})
    const {id} = useParams();
    const filterPharmDetails = pharmDetails.find((item) => item._id === id);
    
    
    const [drugName, setDrugName] = useState('');
    const [description, setDescription] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [drugCode, setDrugCode] = useState('');
    const [drugPrice, setDrugPrice] = useState('');


    useEffect(() => {
        setDrugName(filterPharmDetails.drugName)
        setDescription(filterPharmDetails.description)
        setUnitPrice(filterPharmDetails.unitPrice)
        setDrugCode(filterPharmDetails.drugCode)
        setDrugPrice(filterPharmDetails.drugPrice)
    }, [filterPharmDetails])

    const handleEdit = (id) => {
        const data = {
            drugName,
            description,
            unitPrice,
            drugCode,
            drugPrice
        }

        dispatch(updateDrugData(id, data))

        setDrugName("")
        setDescription("")
        setUnitPrice("")
        setDrugCode("")
        setDrugPrice("")

        enqueueSnackbar('Drug updated successfully', {variant: 'success'})

        navigate('/pharmacy')
    }

  return (
    <div className='edit_form_container_pharmacy'>
    <button className='back_to_home_btn_pharmacy'><Link to='/' style={{textDecoration: "none", color: "white"}}>Back to home</Link></button>
    <form>
        <div className='edit_label_input_container_pharmacy'>
            <label htmlFor="">Drug Name</label>
            <input type="text" placeholder='Type lab name here' value={drugName} onChange={(event) => setDrugName(event.target.value)}/>
        </div>
        <div className='edit_label_input_container_pharmacy'>
            <label htmlFor="">Description</label>
            <input type="text" placeholder='X-ray' value={description} onChange={(event) => setDescription(event.target.value)}/>
        </div>
        <div className='edit_label_input_container_pharmacy'>
            <label htmlFor="">Unit of Pricing</label>
            <input type="text" placeholder='Head and Skull' value={unitPrice} onChange={(event) => setUnitPrice(event.target.value)}/>
        </div>
        <div className='edit_label_input_container_pharmacy'>
            <label htmlFor="">Drug Code</label>
            <input type="text" placeholder='Aoc123FH' value={drugCode} onChange={(event) => setDrugCode(event.target.value)}/>
        </div>
        <div className='edit_label_input_container_pharmacy edit_submit_section_pharmacy'>
            <label htmlFor="">Price</label>
            <input type="number" placeholder='2.02' value={drugPrice} onChange={(event) => setDrugPrice(event.target.value)}/>
            <div className='edit_form_btn_container'>
                <button className='edit_submit_button_pharmacy' type='button' style={{cursor: "pointer"}} onClick={() => handleEdit(id)}>EDIT</button>
            </div>
        </div>
    </form>
</div>
  )
}

export default EditPharmacyForm