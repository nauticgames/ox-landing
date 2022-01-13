import Image from "next/image";
import React from "react";
import SectionTitle from "../UI/SectionTitle/SectionTitle";

const Tokenomics = () => {
  return (
    <section className="tokenomics__section" id="tokenomics">
      <div className="wrapped">
        <SectionTitle title="Token economics" />

        <div className="token__card">
          <div className="token__img">
            <img src="/assets/lunary.png" alt="lunary icon" loading="lazy" />
          </div>
          <div className="token__info">
            <h2>LUNARY ($LUNY)</h2>
            <p>
              Lunary is the utility token of the OX ecosystem, it is an
              inflationary token, infinite, with burning methods, it will be
              used to enter the competitive mode of the game, it will be used
              for rewards for each game won, stadium rewards, to open mysterious
              chests, to advertise within of the game, to enter community
              tournaments, and we will give it more uses over time
            </p>
          </div>
        </div>
        <div className="token__card">
          <div className="token__img">
            <img src="/assets/oxs.png" alt="oxs icon" loading="lazy" />
          </div>
          <div className="token__info">
            <h2>OX SOCCER ($OXS)</h2>
            <p>
              OX soccer is the main token of the OX project and ecosystem, a
              token used especially for future governance, completely
              decentralizing decision-making about the game, people who own this
              token will have the possibility to vote on future changes in the
              project , the rewards in official tournaments will be with this
              token, and the best players will also be rewarded with this token
            </p>
            <div className="oxs__distribution">
              <h2>OX Soccer token distribution</h2>
              <h3>300M total supply</h3>
              <img
                src="/assets/oxs-graph.png"
                alt="oxs distribution chart"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
