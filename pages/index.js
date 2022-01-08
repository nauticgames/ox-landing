import About from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import SEO from "../components/SEO/SEO";
import Stadiums from "../components/Stadiums/Stadiums";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Hero />
      <About />
      <Stadiums />
    </>
  );
}
