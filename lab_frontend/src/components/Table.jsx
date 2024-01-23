import React from 'react'

function Table({filteredData}) {
  return (
    <div className='table_container'>
        <table>
            <thead>
              <tr>
                <th>Lab Item</th>
                <th>Lab Type</th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Code</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
               {
                filteredData.map((tableInfo, index) => (
                  <tr key={tableInfo.id}>
                    <td>{tableInfo.labName}</td>
                    <td>{tableInfo.labType}</td>
                    <td>{tableInfo.mainCategory}</td>
                    <td>{tableInfo.subCategory}</td>
                    <td>{tableInfo.labItemCode}</td>
                    <td>{tableInfo.price}</td>
                    <td><button>DELETE</button></td>
                </tr>
                ))
               }
            </tbody>
          </table>
    </div>
  )
}

export default Table