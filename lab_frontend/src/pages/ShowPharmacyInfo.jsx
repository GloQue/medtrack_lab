import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom'; 
import '../components/ShowLabInfo.css'
import { fetchDrugData } from '../store/thunk';


function ShowPharmacyInfo() {
    const dispatch = useDispatch();
    const pharmInfo = useSelector(state => state.pharmacy.pharmacyInfo);
    const [filterPharm, setFilterPharm] = useState([])
    const { id } = useParams();
    const pharmacyArr = filterPharm.filter(item => item._id === id);

    useEffect(() => {
      dispatch(fetchDrugData())
    }, [dispatch])

    useEffect(() => {
      setFilterPharm(pharmInfo)
    }, [pharmInfo])

    return (
        <div className='showlabcontainer'>
            <button className='gobackhome' style={{backgroundColor: "rgb(108,149,121)"}}><Link to='/pharmacy'>Back to pharmacy page</Link></button>
            {
              pharmacyArr.map((pharmacy) => (
                <div className='lab_container' style={{border: "1px solid rgb(108,149,121)"}}>
                    <div>
                        <span>ID:</span>
                        <span>{pharmacy._id}</span>
                    </div>
                    <div>
                        <span>DRUG NAME:</span>
                        <span>{pharmacy.drugName}</span>
                    </div>
                    <div>
                        <span>DESCRIPTION:</span>
                        <span>{pharmacy.description}</span>
                    </div>
                    <div>
                        <span>UNIT OF PRICING:</span>
                        <span>{pharmacy.unitPrice}</span>
                    </div>
                    <div>
                        <span>DRUG CODE:</span>
                        <span>{pharmacy.DRUGCode}</span>
                    </div>
                    <div>
                        <span>PRICE:</span>
                        <span>{pharmacy.drugPrice}</span>
                    </div>
                    <div>
                        <span>CREATED AT:</span>
                        <span>{new Date(pharmacy.createdAt).toLocaleString()}</span>
                    </div>
                    <div>
                        <span>UPDATED AT:</span>
                        <span>{new Date(pharmacy.updatedAt).toLocaleString()}</span>
                    </div>
            </div>
              ))
            }
        </div>
    );
}

export default ShowPharmacyInfo;