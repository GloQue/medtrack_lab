import {legacy_createStore as createStore} from 'redux'
import { rootReducers } from './reducers'
export const store = createStore(rootReducers)
