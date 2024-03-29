import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Roadmap from "../components/Roadmap/Roadmap";
import SEO from "../components/SEO/SEO";
import SocialBanner from "../components/SocialBanner/SocialBanner";
import Stadiums from "../components/Stadiums/Stadiums";
import Tokenomics from "../components/Tokenomics/Tokenomics";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Hero />
      <About />
      <Stadiums />
      <Roadmap />
      <Tokenomics />
      <SocialBanner />
      <Footer />
    </>
  );
}
