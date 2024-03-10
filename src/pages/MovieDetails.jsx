import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../redux/actions/movieIdActions";
import { Button } from "@mui/material";
import YouTube from "react-youtube";
import "./movie.css"
import Loader from "../component/Loader";
import Error from "../component/Error";

const MovieDetails = () => {
    const [play, setPlay] = useState(false)
  const dispatch = useDispatch();

  const {id} = useParams()

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

  

  const { movie, loading, error } = useSelector((state) => state.movie);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <Error/>;
  }

  if (!movie) {
    return <p>No movie found</p>;
  }

  const renderTrailer = ()=>{
    const trailer = movie.videos.results.find(vid => vid.name === "Official Trailer")
    const key = trailer ? trailer.key : movie.videos.results[0].key
    return(
        <>
        <YouTube
            videoId={key}
            className={"youtube-container"}
            opts={{
                width:"100%",
                height:"100%",
                playerVars: {
                    autoplay: 1,
                  },
            }}
          
        />
        <Button  sx={{
            zIndex:"10",
            position:"absolute",
            top:"60px",
            left:"60px"
        }} onClick={()=> setPlay(false)} variant="outlined" color="error">
                          Close
                        </Button>
        </>
    )
  }

  return (
    <div className="relative   h-[80vh] m-auto  w-[80vw]"> 
        { play ?
            renderTrailer() :   <div
            className="max-w-[80vw] m-auto mb-5 h-[90vh] relative">
                
                      <img
                        className=" inset-0 w-full h-full object-cover"
                        src={`https://image.tmdb.org/t/p/w780/${movie?.backdrop_path}`}
                        alt=""
                      />
        
                      <div style={{
                         background: `linear-gradient(90deg, rgba(0,0,0,0.8533788515406162) 1%, rgba(0,0,0,0.8421743697478992) 7%, rgba(0,0,0,0.8183648459383753) 13%, rgba(0,0,0,0.8183648459383753) 19%, rgba(0,0,0,0.7931547619047619) 23%, rgba(0,0,0,0.4023984593837535) 35%, rgba(0,212,255,0) 100%) `
                        //  background: linear-gradient(90deg, rgba(2,0,36,0.8533788515406162) 1%, rgba(3,1,49,0.8421743697478992) 7%, rgba(4,2,59,0.788953081232493) 13%, rgba(9,9,121,0.4023984593837535) 35%, rgba(0,212,255,0) 100%);
                      }} className="z-10  h-[100%] w-[100%] absolute text-white bottom-0 left-0">
                       <div className=" absolute text-[1em] bottom-5 left-5 max-w-[500px]">
                       <h1 className="text-[4em] mb-9">
                          {movie.title}
                        </h1>
                        <p className="mb-6 ">{movie.overview}</p>
                        <p className="mb-6">
                          Release Date :{" "}
                          <span className="text-yellow-300 ">
                            {movie.release_date}
                          </span>
                        </p>
                        <p className="mb-6">Rating: <span className="text-yellow-300 ">{movie.vote_average.toFixed(1)}/10</span> </p>
                       <div className="flex gap-4">
                       <Button  sx={{
                        fontSize:"1em",
                        padding:"10px 50px"
                       }} onClick={()=> setPlay(true)} variant="outlined" color="error">
                          Play
                        </Button>
                       
        
                       </div>
                       </div>
                      </div>
                    </div>
        }
       



    </div>
  );
};

export default MovieDetails;
