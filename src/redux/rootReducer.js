import { combineReducers } from 'redux';

// @REDUCERS
import searchShowReducer from './searchShowReducer';

// @ROOT REDUCER
const rootReducer =  combineReducers({
    searchShowReducer
});

export default rootReducer;