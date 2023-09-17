import React from "react";
import "./footers.scss";

function Footer() {
  return (
    <footer className="footer   rounded flex justify-between items-center">
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
      <div className="font-thin">
        Post Your <b>Blogs</b>
      </div>
    </footer>
  );
}
export default Footer;
