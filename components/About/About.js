import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="about__section" id="about">
      <div className="wrapped">
        <div className="about__title">
          <h1>About the game</h1>
        </div>
        <div className="about__game">
          <h2>
            Compete against other players in a physics based soccer game,
            dominate the rankings and earn tokens on each win, skins and more
            tradeable NFTs on market.
          </h2>
          <div className="game__ui">
            <Image
              src="/assets/game-ui.png"
              alt="Game ui"
              layout="responsive"
              width={1024}
              height={768}
              objectFit="contain"
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="about__passes">
          <div className="passes__img">
            <Image
              src="/assets/game-passes-v3.png"
              layout="responsive"
              width={1920}
              height={1920}
              objectFit="contain"
              alt="Passes image"
              quality={100}
              priority
            />
          </div>
          <h2>
            Get a pass, enter competitive mode{" "}
            <span>1v1, 5v5 Solo/Duo or 5v5 with your team</span> and earn tokens
            for your wins, each pass has a certain amount of matches available,
            when you finish these matches the pass runs out.
          </h2>
        </div>

        <div className="about__ranking">
          <h2>
            Climb in the ranking and earn more tokens with your victories.
          </h2>
          <div className="ranking__img">
            <Image
              src="/assets/game-ranking.png"
              layout="fill"
              objectFit="contain"
              alt="Ranking image"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
