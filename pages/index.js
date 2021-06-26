import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import Articles from "../components/Articles";
import SlideIn from "../components/Animation/SlideIn";
export default function Home() {
  return (
    <main className="bg-bg-color overflow-hidden">
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SlideIn>
        <Hero />
      </SlideIn>

      <FeatureList />

      <Articles />
    </main>
  );
}
Home.Layout = Layout;
