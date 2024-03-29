import type { NextPage } from "next";
import Head from "next/head";
import AboutSections from "../components/aboutSection/AboutSections";
import Contact from "../components/Contact";
import FooterContainer from "../components/footer/FooterContainer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ServicesContainer from "../components/services/ServicesContainer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <ServicesContainer />
      <section className=" px-5 sm:px-32">
        <AboutSections />
        <Projects />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
