import React from "react";
import DownloadButtons from "./DownloadButtons/DownloadButtons";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <Image
        src="/assets/hero-grid.png"
        layout="fill"
        alt="Hero grid image"
        quality={100}
        className="hero__grid"
      />
      <div className="wrapped">
        <div className="hero__logo">
          <Image
            src="/assets/logo.png"
            width={600}
            height={340}
            alt="Game logo"
            quality={100}
            priority
          />
        </div>
        <div className="hero__players">
          <Image
            src="/assets/hero-players.png"
            height={300}
            width={250}
            alt="Players image"
            quality={100}
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
