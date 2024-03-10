import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAllMovies } from "../redux/actions/movieActions";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../pages/movie.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  const nav = ["Home", "TV Series", "Movies", "Latest"];
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 750);
    };

    // Listen for resize events
    window.addEventListener("resize", updateScreenSize);

    // Initial check
    updateScreenSize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className=" w-[80vw] m-[auto] flex justify-between items-center">
      <div onClick={() => navigate("/")} className="text-[40px] text-bold ">
        MOVIEFlIX{" "}
      </div>

      {!isMobile && (
        <div className=" flex justify-between items-center min-w-[300px]">
          {nav.map((navs, index) => (
            <div
              key={index}
              onClick={() => navigate("/")}
              className="text-white"
            >
              {navs}
            </div>
          ))}
        </div>
      )}

      {isMobile && (
        <Button variant="outlined" color="error">
          <MenuIcon />
        </Button>
      )}
    </div>
  );
};

export default Navbar;
