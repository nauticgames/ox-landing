import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    if (window && window.innerWidth <= 480) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <header className="home__header">
      <div className="wrapped">
        <nav>
          <input type="checkbox" name="open" id="open" className="open" />
          <label className="btnMenu" htmlFor="open" onClick={handleOpenMenu}>
            <Icon icon={menuOpen ? "carbon:close" : "bytesize:menu"} />
          </label>
          <ul className={"header__menu " + (menuOpen && "show-menu")}>
            <li>
              <Link href="https://docs.nauticgames.com/">
                <a target="_blank" rel="noreferrer">
                  Whitepaper
                </a>
              </Link>
            </li>
            <li>
              <a href="#about" onClick={handleOpenMenu}>
                About the game
              </a>
            </li>
            <li>
              <a href="#roadmap" onClick={handleOpenMenu}>
                Roadmap
              </a>
            </li>
            <li>
              <a href="#tokenomics" onClick={handleOpenMenu}>
                Tokens
              </a>
            </li>
          </ul>
          <Link href={process.env.NEXT_PUBLIC_MARKETPLACE_URL}>
            <a className="marketbtn" target="_blank" rel="noreferrer">
              <Icon icon="fa-solid:shopping-basket" />
              Marketplace
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
