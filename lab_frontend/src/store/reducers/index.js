import { combineReducers } from "redux";
import { labReducer } from "./labReducers";
import { pharmacyReducer } from "./pharmacyReducers";

export const rootReducers = combineReducers({
    lab: labReducer,
    pharmacy: pharmacyReducer
})