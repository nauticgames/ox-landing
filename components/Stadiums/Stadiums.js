import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const Stadiums = () => {
  return (
    <section className="stadiums__section">
      <div className="hexagons-bg">
        <Image
          src="/assets/hexagons-bg.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="wrapped">
        <div className="left">
          <div className="title">
            <h2>¡Get your own Stadium!</h2>
          </div>
          <p>Earn tokens for each match played in your Stadium</p>
          <Link href="https://marketplace.oxsoccer.com">
            <a target="_blank" rel="noreferrer" className="buy-btn">
              Buy now
              <Icon icon="bi:arrow-right-short" />
            </a>
          </Link>
        </div>
        <div className="right">
          <div className="stadiums-img">
            <img
              src="/assets/stadiums.png"
              alt="Stadiums image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stadiums;
