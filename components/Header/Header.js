import React from "react";
import Menu from "../Menu/Menu";
import MarketplaceButton from "../UI/MarketplaceButton/MarketplaceButton";

const Header = () => {
  return (
    <header className="home__header">
      <Menu />
      <MarketplaceButton />
    </header>
  );
};

export default Header;
