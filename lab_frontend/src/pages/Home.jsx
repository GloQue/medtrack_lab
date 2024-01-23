import { useEffect, useState } from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
// import TableData from '../components/TableData'
import Nav from '../components/Nav'
import UserForm from '../components/UserForm'
import DUMMY_INFO from '../components/TableData'

function Home() {
  const [tableData, setTableData] = useState(DUMMY_INFO)
  // const tableData = useSelector(state => state.lab.labInfo)
  console.log({tableData})
  const [filteredData, setFilteredData] = useState(DUMMY_INFO)
  
  const filtered = (event) => {
    setFilteredData(DUMMY_INFO.filter((item) => item.labName.toLowerCase().includes(event.target.value)))
  }


  return (
    <div>
      <Nav filtered={filtered}/>
      <div style={{padding: "2rem 3rem"}}>
        <h1>Hospital Management System</h1>
        <UserForm />
        <Table filteredData={filteredData}/>
      </div>   
    </div>
  )
}

export default Home
