import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const MarketplaceButton = () => {
  return (
    <Link href="https://marketplace.oxsoccer.com">
      <a className="marketbtn" target="_blank" rel="noreferrer">
        <Icon icon="fa-solid:shopping-basket" />
        Marketplace
      </a>
    </Link>
  );
};

export default MarketplaceButton;
