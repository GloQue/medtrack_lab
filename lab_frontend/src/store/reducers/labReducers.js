import labData from "../../data"
import { ADD_DATA } from "../actions"

const initialState = {
    labInfo: []
}


export const labReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DATA: {
            return {labInfo: [...state.labInfo, action.payload]}
        }

        default:
            return state
    }
}