import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100}></img>
        <div className="flexCenter h-menu">
          <a href="">Residences</a>
          <a href="">Our Value</a>
          <a href="">Conact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
