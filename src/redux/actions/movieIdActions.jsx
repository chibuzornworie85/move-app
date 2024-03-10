
export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const fetchMovieRequest = () => ({
  type: FETCH_MOVIE_REQUEST,
});

export const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movie,
});

export const fetchMovieFailure = (error) => ({
  type: FETCH_MOVIE_FAILURE,
  payload: error,
});

export const fetchMovieById = (id) => {
  return (dispatch) => {
    dispatch(fetchMovieRequest());

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRiZThiOTQyZGY5OWU5YTQ3MjMyYTM2OTdmNGRkYiIsInN1YiI6IjY1ZWMxNjllNmYzMWFmMDE2MWU3MDY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8fM8ztSY0rE7f09CCZ7X6lnetdIEYyriYeoPK7INZs4',
        // append_to_response: "videos"
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b94be8b942df99e9a47232a3697f4ddb&append_to_response=videos,images`, options)
      .then((response) => response.json())
      .then((data) => dispatch(fetchMovieSuccess(data)))
      .catch((error) => dispatch(fetchMovieFailure(error)));
  };
};