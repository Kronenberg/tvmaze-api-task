import axios from 'axios';

import { API_TVMAZE_SEARCH_SHOWS } from '../constants';

export const singleItemSearch = (query) => axios.get(API_TVMAZE_SEARCH_SHOWS + query); 

export default {
  singleItemSearch
}