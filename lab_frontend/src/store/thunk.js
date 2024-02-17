import { ADD_LAB_DATA, ADD_PHARMACY_DATA, DELETE_LAB_DATA, DELETE_PHARMACY_DATA, FETCH_LAB_DATA, FETCH_ONE_LAB_DATA, FETCH_ONE_PHARMACY_DATA, FETCH_PHARMACY_DATA, UPDATE_LAB_DATA, UPDATE_PHARMACY_DATA } from "./actions";


// ====================================LABS==============================================
export const addLabData = (labDetails) => async(dispatch, getState) => {
   try {
    const response = await fetch('http://localhost:5001/api/labs', {
        method: 'POST',
        body: JSON.stringify(labDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    dispatch({type: ADD_LAB_DATA, payload: data})
   } catch (error) {
    console.log(error);
   }
}

export const fetchLabData = () => async(dispatch, getState) => {
   try {
    const response = await fetch('http://localhost:5001/api/labs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    dispatch({type: FETCH_LAB_DATA, payload: data});
   } catch (error) {
    console.log(error);
   }
}

export const fetchOneLabData = (id) => async(dispatch, getState) => {
   try {
    const response = await fetch(`http://localhost:5001/api/labs/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = response.json();
    dispatch({type: FETCH_ONE_LAB_DATA, payload: data});
   } catch (error) {
    console.log(error)
   }

}

export const updateLabData = (id, updatedLabData) => async(dispatch, getState) => {
  try {
    const response = await fetch(`http://localhost:5001/api/labs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedLabData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    dispatch({type: UPDATE_LAB_DATA, payload: data});
  } catch (error) {
    console.log(error);
  }
}


export const deleteLabData = (id) => async(dispatch, getState) => {
   try {
    const response = await fetch(`http://localhost:5001/api/labs/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    dispatch({type: DELETE_LAB_DATA, payload: data});
    // dispatch(fetchLabData());
    
    return data;
   } catch (error) {
    console.log(error);
   }
}


// ====================================DRUGS==============================================
export const addDrugData = (drug) => async(dispatch, getState) => {
    try {
        const response = await fetch('http://localhost:5001/api/drugs', {
            method: 'POST',
            body: JSON.stringify(drug),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        dispatch({type: ADD_PHARMACY_DATA, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const fetchDrugData = () => async(dispatch, getState) => {
    try {
        const response = await fetch('http://localhost:5001/api/drugs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        dispatch({type: FETCH_PHARMACY_DATA, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const fetchOneDrugData = (id) => async(dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:5001/api/drugs/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        dispatch({type: FETCH_ONE_PHARMACY_DATA, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateDrugData = (id, pharmData) => async(dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:5001/api/drugs/${id}`, {
            method: 'PUT',
            body: JSON.stringify(pharmData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        dispatch({type: UPDATE_PHARMACY_DATA, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteDrugData = (id) => async(dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:5001/api/drugs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        dispatch({type: DELETE_PHARMACY_DATA, payload: data})
        // dispatch(fetchDrugData())
    } catch (error) {
        console.log(error)
    }
}