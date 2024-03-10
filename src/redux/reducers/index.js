import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import genreReducer from "./genreReducer";
import movieIdReducer from "./movieIdReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  movie: movieIdReducer,
  genres: genreReducer, 
});

export default rootReducer;


// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import movieReducer from './movieReducer';
// import genreReducer from './genreReducer';

// const rootReducer = combineReducers({
//   movie: movieReducer,
//   genre: genreReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
