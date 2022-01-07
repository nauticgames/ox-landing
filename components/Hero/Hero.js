import React from "react";
import DownloadButtons from "./DownloadButtons/DownloadButtons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__logo">
        <img src="/assets/logo.png" />
      </div>
      <div className="bottom__gradient"></div>
      <h2 className="download__title">Play soon in</h2>
      <DownloadButtons />
    </div>
  );
};

export default Hero;
