import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router";
import Home from "../pages/home/home";
import CreateBlog from "../pages/createBlog/createBlog";

function RootLayout() {
  return (
    <div className="w-[85%] m-auto">
       <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     
  
    </div>
  );
}
export default RootLayout;
