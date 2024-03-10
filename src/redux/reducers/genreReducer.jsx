// import {
//     FETCH_GENRES_REQUEST,
//     FETCH_GENRES_SUCCESS,
//     FETCH_GENRES_FAILURE,
//   } from '../actions/genreActions';
  
//   const initialState = {
//     genres: [],
//     loading: false,
//     error: null,
//   };
  
//   const genreReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case FETCH_GENRES_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null,
//         };
//       case FETCH_GENRES_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           genres: action.payload.genres,
//         };
//       case FETCH_GENRES_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default genreReducer;
  

import {
    FETCH_GENRES_REQUEST,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
  } from '../actions/genreActions';
  
  const initialState = {
    genres: [],
    loading: false,
    error: null,
  };
  
  const genreReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_GENRES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_GENRES_SUCCESS:
        return {
          ...state,
          loading: false,
          genres: action.payload,
        };
      case FETCH_GENRES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default genreReducer;
  