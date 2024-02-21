import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PharmacyNav from '../components/PharmacyNav'
import PharmacyForm from '../components/PharmacyForm'
import PharmacyTable from '../components/PharmacyTable'
import ShowPharmacyOptions from '../components/ShowPharmacyOptions'
import { useSnackbar } from "notistack";
import { fetchDrugData } from '../store/thunk'


function Pharmacy() {
  const data = useSelector((state) => state.pharmacy.pharmacyInfo);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [inputData, setInputData] = useState([]);

  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    dispatch(fetchDrugData);
  }, [dispatch]);

  useEffect(() => {
    setInputData(data);
  }, [data]);

  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    setInputVal(inputValue);

    if (inputValue.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = inputData.filter(
        (item) =>
          item &&
          item.drugName &&
          item.drugName.toLowerCase().includes(inputValue.toLowerCase())
      );
      if (filtered.length > 0) {
        setFilteredData(filtered);
      } else {
        enqueueSnackbar("No items match your search");
      }
    }
  };


  return (
    <div>
        <PharmacyNav handleOnChange={handleOnChange}/>
        <ShowPharmacyOptions filteredData={filteredData}/>
        <div style={{padding: "2rem 3rem"}}>
          <h1 className='pharmacy_heading'>Pharmacy Inventory Management System</h1>
          <PharmacyForm />
          <PharmacyTable data={data}/>
        </div>
    </div>
  )
}

export default Pharmacy