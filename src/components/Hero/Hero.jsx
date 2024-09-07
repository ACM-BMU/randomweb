import React from "react";
import "./Hero.css";
import assets from "../../assets/assets";

function Hero() {
  return (
    <>
      <div className="main">
        <h1>DADDY'S HOME</h1>
        <img srcSet={assets.picOne} alt="ACM" />
      </div>
    </>
  );
}

export default Hero;
