import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import { rootReducers } from './reducers';
import {thunk} from 'redux-thunk';

export const store = createStore(rootReducers, applyMiddleware(thunk));
