// export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
// export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
// export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

// export const fetchGenresRequest = () => ({
//   type: FETCH_GENRES_REQUEST,
// });

// export const fetchGenresSuccess = (genres) => ({
//   type: FETCH_GENRES_SUCCESS,
//   payload: genres,
// });

// export const fetchGenresFailure = (error) => ({
//   type: FETCH_GENRES_FAILURE,
//   payload: error,
// });

// export const fetchGenres = () => {
//   return (dispatch) => {
//     dispatch(fetchGenresRequest());

//     const options = {
//       method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRiZThiOTQyZGY5OWU5YTQ3MjMyYTM2OTdmNGRkYiIsInN1YiI6IjY1ZWMxNjllNmYzMWFmMDE2MWU3MDY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8fM8ztSY0rE7f09CCZ7X6lnetdIEYyriYeoPK7INZs4'
    //   }
//     };

//     fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
//       .then((response) => response.json())
//       .then((data) => dispatch(fetchGenresSuccess(data)))
//       .catch((error) => dispatch(fetchGenresFailure(error)));
//   };
// };


export const FETCH_GENRES_REQUEST = 'FETCH_GENRES_REQUEST';
export const FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS';
export const FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE';

export const fetchGenresRequest = () => ({
  type: FETCH_GENRES_REQUEST,
});

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: genres,
});

export const fetchGenresFailure = (error) => ({
  type: FETCH_GENRES_FAILURE,
  payload: error,
});

export const fetchMovieGenres = () => {
  return (dispatch) => {
    dispatch(fetchGenresRequest());

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRiZThiOTQyZGY5OWU5YTQ3MjMyYTM2OTdmNGRkYiIsInN1YiI6IjY1ZWMxNjllNmYzMWFmMDE2MWU3MDY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8fM8ztSY0rE7f09CCZ7X6lnetdIEYyriYeoPK7INZs4'
      }
    };

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then((response) => response.json())
      .then((data) => dispatch(fetchGenresSuccess(data)))
      .catch((error) => dispatch(fetchGenresFailure(error)));
  };
};
