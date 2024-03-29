import Image from "next/image";
import { WithLeftFade, WithRightFade } from "../../hoc/WithFade";
import OXSDistribution from "../Charts/OXSDistribution";
import SectionTitle from "../UI/SectionTitle/SectionTitle";

const Tokenomics = () => {
  return (
    <section className="tokenomics__section" id="tokenomics">
      <div className="wrapped">
        <SectionTitle title="Token economics" />
        <div className="token__card">
          <div className="token__img">
            <Image
              src="/assets/lunary.png"
              alt="lunary token icon"
              priority
              objectFit="contain"
              quality={100}
              layout="fill"
            />
          </div>
          <div className="token__info">
            <h2>LUNARY ($LUNY)</h2>
            <p>
              Lunary is the utility token of the OX ecosystem, it is an
              inflationary token, infinite, with burning methods, it would be
              used to enter the competitive mode of the game, for each game won,
              stadium rewards, to open chests with skins, to advertise in-game
              and to enter community tournaments. We will give it more uses in
              the future.
            </p>
          </div>
        </div>
        <div className="token__card">
          <div className="token__img">
            <Image
              src="/assets/oxs.png"
              alt="ox soccer token icon"
              priority
              objectFit="contain"
              quality={100}
              layout="fill"
            />
          </div>
          <div className="token__info">
            <h2>OX SOCCER ($OXS)</h2>
            <p>
              OXS is the main token of the OX project and ecosystem, a token
              used especially for future governance. With this token we plan to
              decentralize decision making about the game in the future. The
              people who own this token will have the possibility to vote
              changes in the project, the rewards in the official tournaments
              will be with this token, the best players of each season will also
              be rewarded with OXS, and the brands will be able to publish
              in-game with this token.
            </p>
            <div className="oxs__distribution">
              <h2>OX Soccer token distribution</h2>
              <h3>300M total supply</h3>
              <OXSDistribution />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
