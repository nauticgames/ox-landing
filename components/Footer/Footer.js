import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <a href="/" className="footer__logo">
          <img src="/assets/logo.png" />
        </a>
        <p className="footer__copy">2022 &copy; - OX Soccer</p>
        <div className="footer__links">
          <div className="links__column">
            <h2>Game</h2>
            <Link href="https://docs.nauticgames.com/ox-soccer">
              <a rel="noreferrer" target="_blank">
                Whitepaper
              </a>
            </Link>
            <Link href="#roadmap">
              <a rel="noreferrer">Roadmap</a>
            </Link>
            <Link href="#tokenomics">
              <a rel="noreferrer">Tokens</a>
            </Link>
            <Link href="https://marketplace.oxsoccer.com">
              <a target="_blank" rel="noreferrer">
                Marketplace
              </a>
            </Link>
          </div>
          <div className="links__column">
            <h2>Community</h2>
            <Link href="https://discord.gg/rK7ZKDkz">
              <a target="_blank" rel="noreferrer">
                Discord
              </a>
            </Link>
            <Link href="https://t.me/+vo6gPtAO3pk1MWUx">
              <a target="_blank" rel="noreferrer">
                Telegram
              </a>
            </Link>
          </div>
          <div className="links__column">
            <h2>Legal</h2>
            <Link href="#">
              <a target="_blank" rel="noreferrer">
                Terms of use
              </a>
            </Link>
            <Link href="#">
              <a target="_blank" rel="noreferrer">
                Privacy policy
              </a>
            </Link>
            <Link href="#">
              <a target="_blank" rel="noreferrer">
                Disclaimer
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
