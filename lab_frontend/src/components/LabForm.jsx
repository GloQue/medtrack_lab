import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLabData, fetchLabData } from '../store/thunk';
import '../components/UserForm.css';
import { useSnackbar } from 'notistack';
import LabStats from './LabStats';

function LabForm() {
  const labData = useSelector((state) => state.lab.labInfo);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [labName, setLabName] = useState('');
  const [labType, setLabType] = useState('');
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [labCode, setLabCode] = useState('');
  const [labPrice, setLabPrice] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  useEffect(() => {
    dispatch(fetchLabData());
  }, [dispatch]);

  const typeOfLab = ['Lab Type', 'Radiology', 'Laboratory'];

  const handleSubmit = (event) => {
    event.preventDefault();

    const labDetails = {
      labName,
      labType,
      mainCategory,
      subCategory,
      labCode,
      labPrice,
    };

    if (!labName) {
      enqueueSnackbar('Name field is required', { variant: 'error' });
    } else if (!labType) {
      enqueueSnackbar('Lab type field is required', { variant: 'error' });
    } else if (!mainCategory && !showNewCategoryInput) {
      enqueueSnackbar('Main category field is required', { variant: 'error' });
    } else if (!subCategory) {
      enqueueSnackbar('Sub category field is required', { variant: 'error' });
    } else if (!labCode) {
      enqueueSnackbar('Labcode field is required', { variant: 'error' });
    } else if (!labPrice) {
      enqueueSnackbar('Lab Price field is required', { variant: 'error' });
    } else {
      dispatch(addLabData(labDetails));
      enqueueSnackbar('Lab Details Added Successfully', { variant: 'success' });

      setLabName('');
      setLabType('');
      setMainCategory('');
      setSubCategory('');
      setLabCode('');
      setLabPrice('');
      setShowNewCategoryInput(false); // Reset the state for the new category input
    }
  };

  return (
    <div className='form_container'>
      <form onSubmit={handleSubmit}>
        <div className='label_input_container select_section'>
          <label htmlFor=''>Lab Name</label>
          <input
            type='text'
            placeholder='Type lab name here'
            value={labName}
            onChange={(event) => setLabName(event.target.value)}
          />
          <select name='' id='' value={labType} onChange={(event) => setLabType(event.target.value)}>
            {typeOfLab.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className='label_input_container select_section category'>
          <label htmlFor=''>Main Category</label>
          <select
            name=''
            id=''
            value={mainCategory}
            onChange={(event) => {
              setMainCategory(event.target.value);
              setShowNewCategoryInput(event.target.value === 'ADD A CATEGORY');
            }}
          >
            <option value='X-ray'>X-ray</option>
            <option value='Fluoroscopy'>Fluoroscopy</option>
            <option value='Mammography'>Mammography</option>
            <option value='CT'>CT</option>
            <option value='Ultrasound'>Ultrasound</option>
            <option value='Microbiology'>Microbiology</option>
            <option value='Virology'>Virology</option>
            <option value='Immunology'>Immunology</option>
            <option value='Haematology'>Haematology</option>
            <option value='ADD A CATEGORY' style={{ backgroundColor: 'pink' }}>
              ADD A CATEGORY
            </option>
          </select>
          {showNewCategoryInput && (
            <input
              type='text'
              placeholder='Main Category'
              value={mainCategory}
              onChange={(event) => setMainCategory(event.target.value)}
            />
          )}
        </div>
        <div className='label_input_container'>
          <label htmlFor=''>Sub Category</label>
          <input
            type='text'
            placeholder='Head and Skull'
            value={subCategory}
            onChange={(event) => setSubCategory(event.target.value)}
          />
        </div>
        <div className='label_input_container'>
          <label htmlFor=''>Lab Code</label>
          <input
            type='text'
            placeholder='Aoc123FH'
            value={labCode}
            onChange={(event) => setLabCode(event.target.value)}
          />
        </div>
        <div className='label_input_container submit_section'>
          <label htmlFor=''>Price</label>
          <input
            type='number'
            placeholder='2.02'
            value={labPrice}
            onChange={(event) => setLabPrice(event.target.value)}
          />
          <div className='form_btn_container'>
            <button type='submit' className='submit_button'>
              + ADD
            </button>
          </div>
        </div>
      </form>
      <div className='stats_container'>
        <LabStats labData={labData} />
      </div>
    </div>
  );
}

export default LabForm;
