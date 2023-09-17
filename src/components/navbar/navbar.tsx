import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  console.log("Test")
  return (
    <nav className="navbar">
      <div className="flex justify-between items-center">
        <div className="circle">
          <span
            className="text text-3xl"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Blog
          </span>
          <span
            className="text-1xl "
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Art & Technology
          </span>
        </div>
        <div className="links flex gap-3 items-center">
          {" "}
          {/* Added 'items-center' class */}
          <Link to="/?cat&art">
            <h6>ART</h6>
          </Link>
          <Link to="/?cat&science">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat&technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat&cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?cat&design">
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?cat&food">
            <h6>FOOD</h6>
          </Link>
          <span>Ajay</span>
          <span>Logout</span>
          <Link
            to="/createblog"
            className="p-2 write-blog"
            style={{
              backgroundColor: "#b9e7e7",
              borderRadius: "0px 50px 50px 50px",
              border: "1px solid white",
            }}
          >
            Write
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
