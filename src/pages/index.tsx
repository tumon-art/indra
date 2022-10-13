import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className=" underline text-2xl font-extrabold text-orange-800">
        Hello
      </h1>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <Image
            src="/vercel.svg"
            style={{ display: "inline" }}
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
