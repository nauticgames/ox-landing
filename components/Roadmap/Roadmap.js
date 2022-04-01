import React from "react";
import { WithTopFade } from "../../hoc/WithFade";
import SectionTitle from "../UI/SectionTitle/SectionTitle";

const Roadmap = () => {
  return (
    <section className="roadmap__section" id="roadmap">
      <div className="wrapped">
        <SectionTitle title="Roadmap 2022" />
        <div className="roadmap__cards">
          <div className="card">
            <div className="title">Q1</div>
            <div className="card__bg">
              <span className="blue"></span>
              <span className="red"></span>
            </div>
            <p>
              Stadiums public sale <span>&#10003;</span>
            </p>
            <p>
              Marketplace <span>&#10003;</span>
            </p>
            <p>
              Whitepaper <span>&#10003;</span>
            </p>
            <p>Marketing campaigns</p>
          </div>
          <div className="card">
            <div className="title">Q2</div>
            <p>Game demo</p>
            <p>Team recruitment</p>
            <p>OXS public sale</p>
            <p>First Mystery Chests for sale</p>
            <p>Launch Closed beta PC version with Normal Games</p>
            <div className="card__bg">
              <span className="blue"></span>
              <span className="red"></span>
            </div>
          </div>
          <div className="card">
            <div className="title">Q3</div>
            <p>Open PC version with competitive</p>
            <p>Launch Lunary in mainnet</p>
            <p>Claim rewards</p>
            <p>Pass Sales 5v5 Solo/Duo, 1v1 Silver</p>
            <p>More chests for sale</p>
            <div className="card__bg">
              <span className="blue"></span>
              <span className="red"></span>
            </div>
          </div>
          <div className="card">
            <div className="title">Q4</div>
            <p>Teams mode</p>
            <p>5v5 Teams pass</p>
            <p>Community Tournaments</p>
            <p>Android & iOS release</p>
            <p>First official competitive leagues</p>
            <div className="card__bg">
              <span className="blue"></span>
              <span className="red"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
