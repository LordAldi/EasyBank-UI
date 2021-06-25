import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
import Articles from "../components/Articles";
export default function Home() {
  return (
    <main className="bg-bg-color overflow-hidden">
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <FeatureList />
      <Articles />
    </main>
  );
}
Home.Layout = Layout;
