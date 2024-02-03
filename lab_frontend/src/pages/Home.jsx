import { useEffect, useState } from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../components/Nav'
import UserForm from '../components/UserForm'
import { fetchLabData } from '../store/thunk'


function Home() {
  const data = useSelector(state => state.lab.labInfo);
  const dispatch = useDispatch();
  console.log({data})


  useEffect(() => {
    dispatch(fetchLabData())
  }, []);
  
  
  // const filtered = (event) => {
  //   setFilteredData(data.filter((item) => item.labName.toLowerCase().includes(event.target.value)))
  // }


  return (
    <div>
      <Nav />
      <div style={{padding: "2rem 3rem"}}>
        <h1>Inventory Management System</h1>
        <UserForm />
        <Table data={data}/>
      </div> 
    </div>
  )
}

export default Home
