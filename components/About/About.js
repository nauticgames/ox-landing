import React from "react";

const About = () => {
  return (
    <section className="about__section" id="about">
      <div className="about__title">
        <h1>About the game</h1>
      </div>
      <div className="about__game">
        <h2>
          Compete against other players in a physics-based soccer game, dominate
          the rankings and earn cripto, skins and more exchangeable NFTs in the
          marketplace
        </h2>
        <div className="game__ui">
          <img src="/assets/game-ui.png" />
        </div>
      </div>

      <div className="about__passes">
        <div className="passes__img">
          <img src="/assets/game-passes.png" />
        </div>
        <h2>
          Get a pass, enter in competitive mode{" "}
          <span>1v1, 5v5 Solo/Duo or 5v5 with your team</span> and earn tokens
          for your victories, every pass has a certain number of matchs
          available, when you finished these matchs, the pass is destroys
        </h2>
      </div>

      <div className="about__ranking">
        <h2>Scale in ranking & earn more tokens for your victories</h2>
        <div className="ranking__img">
          <img src="/assets/game-ranking.png" />
        </div>
      </div>
    </section>
  );
};

export default About;
