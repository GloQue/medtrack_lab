import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';  // Import useParams from react-router-dom

function ShowLabInfo() {
    const labInfo = useSelector(state => state.lab.labInfo);

    const { id } = useParams();

    const filteredInfo = labInfo.find(item => item._id === id);

    return (
        <div>
            <div>
                <p>{filteredInfo.id}</p>
                <p>{filteredInfo.labName}</p>
                <p>{filteredInfo.labType}</p>
                <p>{filteredInfo.mainCategory}</p>
                <p>{filteredInfo.subCategory}</p>
                <p>{filteredInfo.labCode}</p>
                <p>{filteredInfo.labPrice}</p>
                <p>{new Date(filteredInfo.createdAt).toString()}</p>
                <p>{new Date(filteredInfo.updatedAt).toString()}</p>
            </div>
        </div>
    );
}

export default ShowLabInfo;

