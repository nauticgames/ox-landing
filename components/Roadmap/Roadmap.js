import React from "react";
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
            <p>Social media marketing</p>
          </div>
          <div className="card">
            <div className="title">Q2</div>
            <p>Game demo</p>
            <p>Some skins for sale</p>
            <p>OXS Public sale</p>
            <p>Closed beta for Normal games</p>
            <div className="card__bg">
              <span className="blue"></span>
              <span className="red"></span>
            </div>
          </div>
          <div className="card">
            <div className="title">Q3</div>
            <p>First version for PC with competitive</p>
            <p>Lunary release</p>
            <p>Claim rewards</p>
            <p>Teams</p>
            <p>Community Tournaments</p>
            <div className="card__bg">
              <span className="blue"></span>
              <span className="red"></span>
            </div>
          </div>
          <div className="card">
            <div className="title">Q4</div>
            <p>Android & iOS game release</p>
            <p>First official competitive leagues</p>
            <p>First OX World Championship</p>
            <p>In-game ads</p>
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
