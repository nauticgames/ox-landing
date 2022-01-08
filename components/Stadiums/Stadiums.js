import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Stadiums = () => {
  return (
    <section className="stadiums__section">
      <div className="hexagons-bg">
        <img src="/assets/hexagons-bg.png" />
      </div>
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
          <img src="/assets/stadiums.png" />
        </div>
      </div>
    </section>
  );
};

export default Stadiums;
