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
          <img srcSet={assets.GitHub} alt="ACM" />
        </div>
        <img srcSet={assets.IMG2} alt="ACM" />
        <img srcSet={assets.instructor} alt="ACM" />
        <img srcSet={assets.Hacktober1} alt="ACM" />
        <img srcSet={assets.Hacktober2} alt="ACM" />
        <img srcSet={assets.UIUXIFYspeaker} alt="ACM" />
      </div>
    </>
  );
}

export default Hero;
