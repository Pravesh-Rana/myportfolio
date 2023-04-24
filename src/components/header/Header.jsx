import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Pravesh Rana</h1>
        <h5 className="text-light"> Data Scientist</h5>
        <HeaderSocials />
        <div className="cartoon">
          <div className="bubble b r hb">
            Hello World!
            <br />
            Welcome to my Portfolio..
          </div>
        </div>

        <Avatar />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
