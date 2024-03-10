
export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";
export const FETCH_MOVIES_BY_GENRE_REQUEST = "FETCH_MOVIES_BY_GENRE_REQUEST";
export const FETCH_MOVIES_BY_GENRE_SUCCESS = "FETCH_MOVIES_BY_GENRE_SUCCESS";
export const FETCH_MOVIES_BY_GENRE_FAILURE = "FETCH_MOVIES_BY_GENRE_FAILURE";

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMoviesByGenreRequest = () => ({
  type: FETCH_MOVIES_BY_GENRE_REQUEST,
});

export const fetchMoviesByGenreSuccess = (movies) => ({
  type: FETCH_MOVIES_BY_GENRE_SUCCESS,
  payload: movies,
});

export const fetchMoviesByGenreFailure = (error) => ({
  type: FETCH_MOVIES_BY_GENRE_FAILURE,
  payload: error,
});

export const fetchAllMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());

    // Check if list of genres is present in local storage
    const genresInLocalStorage = localStorage.getItem("genres");
    const genres = JSON.parse(genresInLocalStorage);

    if (genres?.length > 0) {

      dispatch(fetchMoviesByGenreRequest());
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRiZThiOTQyZGY5OWU5YTQ3MjMyYTM2OTdmNGRkYiIsInN1YiI6IjY1ZWMxNjllNmYzMWFmMDE2MWU3MDY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8fM8ztSY0rE7f09CCZ7X6lnetdIEYyriYeoPK7INZs4",
        },
      };

      // Construct URL with genres
      const genreIds = genres.map((genre) => genre).join(",");
      const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreIds}`;

     

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => dispatch(fetchMoviesSuccess(data)))
        .catch((error) => dispatch(fetchMoviesFailure(error)));
    } else {
      console.log("Fetching all movies");
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTRiZThiOTQyZGY5OWU5YTQ3MjMyYTM2OTdmNGRkYiIsInN1YiI6IjY1ZWMxNjllNmYzMWFmMDE2MWU3MDY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8fM8ztSY0rE7f09CCZ7X6lnetdIEYyriYeoPK7INZs4",
        },
      };

      fetch(`https://api.themoviedb.org/3/movie/popular`, options)
        .then((response) => response.json())
        .then((data) => dispatch(fetchMoviesSuccess(data)))
        .catch((error) => dispatch(fetchMoviesFailure(error)));
    }
  };
};
