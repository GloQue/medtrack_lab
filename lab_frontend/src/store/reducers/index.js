import { combineReducers } from "redux";
import { labReducer } from "./labReducers";

export const rootReducers = combineReducers({
    lab: labReducer
})