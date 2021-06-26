import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import Articles from "../components/Articles";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main className="bg-bg-color overflow-hidden">
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero data-aos="fade-right" />
      <FeatureList data-aos="fade-left" />
      <Articles data-aos="fade-right" />
    </main>
  );
}
Home.Layout = Layout;
