import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Register from "../component/register/Register";
// import ScrollToTop from "../ScrollToTop";

const Router = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Router;
