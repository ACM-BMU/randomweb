import React from "react";
import "./Hero.css";
import assets from "../../assets/assets";

function Hero() {
  return (
    <>
      <div className="main">
        <h1>DADDY'S HOME</h1>
        <img srcSet={assets.picOne} alt="ACM" />
        <img srcSet={assets.over} alt="ACM" />
        <img srcSet={assets.shivang} alt="ACM" />
        <div className="blackbg">
          <img srcSet={assets.acm} alt="ACM" />
          <img srcSet={assets.sarc} alt="ACM" />
          <img srcSet={assets.Whtsp} alt="ACM" />
          <img srcSet={assets.Internet} alt="ACM" />
          <img srcSet={assets.Instagram} alt="ACM" />
          <img srcSet={assets.Linkedin} alt="ACM" />
        </div>
      </div>
    </>
  );
}

export default Hero;