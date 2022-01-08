import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <ul className="header__menu">
      <li>
        <Link href="https://docs.nauticgames.com/ox-soccer/">
          <a target="_blank" rel="noreferrer">
            Whitepaper
          </a>
        </Link>
      </li>
      <li>
        <a href="#about">About the game</a>
      </li>
      <li>
        <a href="#roadmap">Roadmap</a>
      </li>
      <li>
        <a href="#tokenomics">Tokens</a>
      </li>
    </ul>
  );
};

export default Menu;
