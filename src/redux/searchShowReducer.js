import { 
    GET_QUERY_ASYNC,
    GET_QUERY_TO_INITIAL,
    GET_SHOWS_SUCCESS,
    GET_SHOWS_REJECTED
  } from '../actionTypes/actionTypes';

const initialSearchState = {
    pending: false,
    success: false,
    rejected: false,
    currentQuery: '',
    shows: [],
    history: []
}

function searchShowReducer(state = initialSearchState, action) {
    switch(action.type) {
        case GET_QUERY_ASYNC: {
            return {
                ...state,
                pending: true,
                currentQuery: action.payload
            }
        }
        case GET_SHOWS_SUCCESS: {
            return {
                ...state,
                success: true,
                pending: false,
                shows: action.payload,
                history: state.history.concat(state.shows).reverse()
            }
        }
        case GET_SHOWS_REJECTED: {
            return {
                ...state,
                success: false,
                rejected: true,
                shows: action.payload
            }
        }
        case GET_QUERY_TO_INITIAL: {
            return {
                ...state,
                success: false,
                rejected: false,
                linked_partitioning: 1,
                offset: 0
            }
        }
        default: {
            return state;
        }
    }

}

export default searchShowReducer;