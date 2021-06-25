import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FeatureList from "../components/FeatureList";
export default function Home() {
  return (
    <main className="bg-bg-color overflow-hidden">
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <FeatureList />
    </main>
  );
}
Home.Layout = Layout;
