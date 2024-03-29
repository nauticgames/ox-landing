import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SocialBanner = () => {
  return (
    <section className="social__section">
      <div className="wrapped">
        <Link href="https://marketplace.oxsoccer.com">
          <a target="_blank" rel="noreferrer" className="social__market-btn">
            Marketplace
            <Icon icon="bx:bxs-cart" />
          </a>
        </Link>
        <div className="social__links">
          <h2>Join the community</h2>
          <div className="social__buttons">
            <Link href="https://discord.gg/GKDTKvVheQ">
              <a target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:discord-fill" />
              </a>
            </Link>
            <Link href="https://t.me/+vo6gPtAO3pk1MWUx">
              <a target="_blank" rel="noreferrer">
                <Icon icon="fa-brands:telegram-plane" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
