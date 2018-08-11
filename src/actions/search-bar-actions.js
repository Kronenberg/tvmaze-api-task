import { delay } from 'redux-saga'
import { put, call, takeLatest, all, fork } from 'redux-saga/effects'

import { singleItemSearch } from './api';
import { 
  GET_QUERY_ASYNC,
  GET_QUERY_TO_INITIAL,
  GET_SHOWS_SUCCESS,
  GET_SHOWS_REJECTED

} from '../actionTypes/actionTypes';

function* getQueryAsync(action) {
 
  yield put({ type: GET_QUERY_TO_INITIAL });
 
  yield delay(500);
 
  try { 
     
     const response = yield call(() => singleItemSearch(action.payload));

     yield put({ 
         type: GET_SHOWS_SUCCESS, 
         payload: response.data,
       });
 
   } catch(error) {
     yield put({ 
         type: GET_SHOWS_REJECTED, 
         payload: error
       });
   }
  }
  
 function* getQuery() {
   yield takeLatest(GET_QUERY_ASYNC, getQueryAsync);
 }


export default function* rootSaga() {
  yield all([
    fork(getQuery)
  ])
}