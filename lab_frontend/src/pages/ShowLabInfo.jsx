import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'; 
import '../components/ShowLabInfo.css'

function ShowLabInfo() {
    const labInfo = useSelector(state => state.lab.labInfo);

    const { id } = useParams();

    const lab = labInfo.find(item => item._id === id);

    return (
        <div className='showlabcontainer'>
            <button className='gobackhome'><Link to='/'>Back to home</Link></button>
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
                    <span>{new Date(lab.createdAt).toString()}</span>
                </div>
                <div>
                    <span>UPDATED AT:</span>
                    <span>{new Date(lab.updatedAt).toString()}</span>
                </div>
        </div>
        </div>
    );
}

export default ShowLabInfo;

