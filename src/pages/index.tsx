import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/aboutSection/AboutSection";
import Hero from "../components/Hero";
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
      <AboutSection />
    </div>
  );
};

export default Home;
