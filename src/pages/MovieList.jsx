import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies } from "../redux/actions/movieActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { fetchMovieGenres } from "../redux/actions/genreActions";
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Loader from "../component/Loader";
import Error from "../component/Error";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localGenre =  localStorage.getItem('genres');
  const [genreName, setGenreName] = React.useState(JSON.parse(localGenre) || []);

  const [open, setOpen] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState({});
  const handleClose = () => setOpen(false);
  const {
    movies,
    loading: movieLoading,
    error: movieError,
  } = useSelector((state) => state.movies);
  const {
    genres,
    loading: genreLoading,
    error: genreError,
  } = useSelector((state) => state.genres);


  const handleChange = (genreId) => {
    if (genreName.includes(genreId)) {
      
      const updatedGenres = genreName.filter((id) => id !== genreId);
      setGenreName(updatedGenres);
      
      localStorage.setItem('genres', JSON.stringify(updatedGenres));
    } else {
      
      const updatedGenres = [...genreName, genreId];
      setGenreName(updatedGenres);
      
      localStorage.setItem('genres', JSON.stringify(updatedGenres));
    }
  };
  

  
  


  useEffect(() => {
    if (movies?.results && movies?.results?.length > 0) {
      setSelectedMovie(movies.results[0]);
    }
  }, [movies]);
  useEffect(() => {
    const genreLocal = localStorage.getItem('genres');
    console.log(genreLocal);
    dispatch(fetchAllMovies())
  
  }, [genreName, dispatch]);



   
  
  

  useEffect(() => {
    dispatch(fetchMovieGenres());
  }, [dispatch]);

  if (movieLoading || genreLoading) {
    return <Loader/>;
  }

  if (movieError || genreError) {
    return <Error/>;
  }

  return (
    <Box
      className="m-[auto] w-[80vw]"
      sx={{
        margin: "20px auto",
      }}
    >
       <Accordion sx={{
        marginBottom:"30px",
        background:"none",
        border:"1px solid #54393b",
        borderRadius:"10px"
       }}>
        <AccordionSummary sx={{
            color:"white",
            fontSize:"20px"
          }}
          expandIcon={<ExpandMoreIcon sx={{
            color:"white"
          }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Select Categories
        </AccordionSummary>
        <AccordionDetails>
        <div className="mb-6 flex gap-5 flex-wrap  ">
      {genres?.genres?.map((genre) => (
          <Box
            sx={{
              bgcolor: "#232324",
              padding: "5px 20px ",
              display: "flex",
              alignItems: "center",
              borderRadius: "30px",
            }}
            key={genre.id}
          >
            <Checkbox
              onChange={()=>handleChange(genre.id)}
              value={genre.id} 
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
              checked={genreName.indexOf(genre.id) > -1}
            />
            <ListItemText sx={{ color: "pink" }} primary={genre.name} />
          </Box>
        ))}
        {/* <Button onClick={fetchAllMovies} sx={{
          padding:"0 60px",
          borderRadius:"40px"
        }} variant="contained" color="error" endIcon={<SearchIcon />}>
 Filter Categories
</Button> */}
      </div>
        </AccordionDetails>
      </Accordion>
      
      <div>
       

        {movies?.results?.length === 0 ? (
          <p>No movies available</p>
        ) : (
          <>
            <div
              onClick={() => navigate(`/details/${selectedMovie.id}`)}
              className="border-b border-red-600 mb-5 h-[600px] relative"
            >
              <img
                className=" inset-0 w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w780/${selectedMovie?.backdrop_path}`}
                alt=""
              />

              <div
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)) `,
                }}
                className="z-10  h-[100%] w-[100%] absolute text-white bottom-0 left-0"
              >
                <div className=" absolute bottom-5 left-5 max-w-[400px]">
                  <h1 className="text-[50px] mb-9">{selectedMovie.title}</h1>
                  <p className="mb-6 max-w-[400px]">{selectedMovie.overview}</p>
                  <p className="mb-6 max-w-[400px]">
                    Release Date :{" "}
                    <span className="text-yellow-300 ">
                      {selectedMovie.release_date}
                    </span>
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outlined" color="error">
                      Play
                    </Button>
                    <Button
                      style={{ color: "white", border: "1px solid white" }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex  flex-wrap gap-[20px] m-[auto] w-[80vw] ">
              {movies?.results?.map((movie, index) => (
                <div key={index}
                  onClick={() => {
                    setSelectedMovie(movies.results[index]);
                    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
                  }}
                  className="border-b border-red-600 relative h-[400px] flex-1 min-w-[250px]"
                  style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                  }}
                >
                  <div className="text-white text-[30px] bottom-5 left-5 absolute"></div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ul>
            {genres?.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </Box>
      </Modal>
    </Box>
  );
};

export default MovieList;
