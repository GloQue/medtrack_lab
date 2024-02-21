import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom'; 
import '../components/ShowLabInfo.css'
import { fetchLabData } from '../store/thunk';

function ShowLabInfo() {
    const dispatch = useDispatch();
    const labInfo = useSelector(state => state.lab.labInfo);
    const [filterLab, setFilterLab] = useState([])
    const { id } = useParams();
    const labArr = filterLab.filter(item => item._id === id);

    useEffect(() => {
      dispatch(fetchLabData())
    }, [dispatch])

    useEffect(() => {
      setFilterLab(labInfo)
    }, [labInfo])

    return (
        <div className='showlabcontainer'>
            <button className='gobackhome' style={{backgroundColor: "rgb(8,113,179)"}}><Link to='/labs'>Back to labs page</Link></button>
            {
                labArr.map((lab) => (
                    <div className='lab_container'>
                        <div>
                            <span>ID:</span>
                            <span>{lab._id}</span>
                        </div>
                        <div>
                            <span>LAB NAME:</span>
                            <span>{lab.labName}</span>
                        </div>
                        <div>
                            <span>LAB TYPE:</span>
                            <span>{lab.labType}</span>
                        </div>
                        <div>
                            <span>MAIN CATEGORY:</span>
                            <span>{lab.mainCategory}</span>
                        </div>
                        <div>
                            <span>SUB CATEGORY:</span>
                            <span>{lab.subCategory}</span>
                        </div>
                        <div>
                            <span>LAB CODE:</span>
                            <span>{lab.labCode}</span>
                        </div>
                        <div>
                            <span>LAB PRICE:</span>
                            <span>{lab.labPrice}</span>
                        </div>
                        <div>
                            <span>CREATED AT:</span>
                            <span>{new Date(lab.createdAt).toLocaleString()}</span>
                        </div>
                        <div>
                            <span>UPDATED AT:</span>
                            <span>{new Date(lab.updatedAt).toLocaleString()}</span>
                        </div>
                </div>
                ))
            }
        </div>
    );
}

export default ShowLabInfo;

