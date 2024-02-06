import { useEffect, useState } from 'react'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux'
import Nav from '../components/Nav'
import UserForm from '../components/UserForm'
import { fetchLabData } from '../store/thunk'
import ShowOptions from '../components/ShowOptions'                           


function Home() {
  const data = useSelector(state => state.lab.labInfo);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [inputData, setInputData] = useState([])
  console.log({data})


  useEffect(() => {
    dispatch(fetchLabData())
  }, [dispatch]);

  useEffect(() => {
    setInputData(data);
  }, [data]);
 
  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    setInputVal(inputValue);
  
    if (inputValue.trim() === '') {
      setFilteredData([]);
    } else {
      const filtered = inputData.filter(item => item && item.labName && item.labName.toLowerCase().includes(inputValue.toLowerCase()));
      setFilteredData(filtered);
    }
  };

  
  

  return (
    <div>
      <Nav handleOnChange={handleOnChange}/>
      <ShowOptions filteredData={filteredData} />
      <div style={{padding: "2rem 3rem"}}>
        <h1>Inventory Management System</h1>
        <UserForm />
        <Table data={data}/>
      </div> 
    </div>
  )
}

export default Home
