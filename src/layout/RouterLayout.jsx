import React from "react";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function RouteLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
