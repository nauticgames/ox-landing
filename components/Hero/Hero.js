import React from "react";
import DownloadButtons from "./DownloadButtons/DownloadButtons";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__grid">
        <Image
          src="/assets/hero-grid.png"
          layout="fill"
          alt="Hero grid image"
        />
      </div>
      <div className="wrapped">
        <div className="hero__logo">
          <Image
            src="/assets/logo.png"
            width={600}
            height={340}
            alt="Game logo"
            quality="100"
          />
        </div>
        <div className="hero__players">
          <Image
            src="/assets/hero-players.png"
            height={350}
            width={350}
            alt="Players image"
            quality="100"
            layout="intrinsic"
          />
        </div>
        <h2 className="download__title">Play soon in</h2>
        <DownloadButtons />
      </div>
      <div className="bottom__gradient"></div>
    </div>
  );
};

export default Hero;
