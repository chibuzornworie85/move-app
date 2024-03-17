import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Orders from "../components/dashboard/orders/Order";
import Admin from "../components/dashboard/Admin";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/oders" element={<Orders />} />
      </Routes>
    </>
  );
};
