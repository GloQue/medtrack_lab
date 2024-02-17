/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLabData } from "../store/thunk";
import { useSnackbar } from "notistack";
import LabTable from "../components/LabTable";
import LabNav from "../components/LabNav";
import ShowLabOptions from "../components/ShowLabOptions";
import LabForm from "../components/LabForm";

function Labs() {
  const data = useSelector((state) => state.lab.labInfo);
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [inputData, setInputData] = useState([]);

  const { enqueueSnackbar } = useSnackbar();
  
  useEffect(() => {
    dispatch(fetchLabData());
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
          item.labName &&
          item.labName.toLowerCase().includes(inputValue.toLowerCase())
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
      <LabNav handleOnChange={handleOnChange} />
      <ShowLabOptions filteredData={filteredData} />
      <div style={{ padding: "2rem 3rem" }}>
        <h1>Inventory Management System</h1>
        <LabForm />
        <LabTable data={data} />
      </div>
    </div>
  );
}

export default Labs;
