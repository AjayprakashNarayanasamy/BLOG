import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer"
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
export default RootLayout
