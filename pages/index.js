import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import bgMobile from "../assets/images/bg-intro-mobile.png";
import bgDesktop from "../assets/images/bg-intro-desktop.png";
import mockupImg from "../assets/images/image-mockups.png";
export default function Home() {
  return (
    <div className="bg-bg-color container mx-auto  overflow-hidden">
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-3  max-h-screen">
        <div className="relative sm:order-1 sm:col-span-2 flex justify-end">
          <div className="relative top-0 sm:hidden">
            <Image src={bgMobile} className="" />
          </div>
          <div className="relative -top-36  hidden sm:block max-w-384 ">
            <Image src={bgDesktop} />
          </div>
          <div className="absolute -top-32 max-w-1xl sm:-right-32">
            <Image src={mockupImg} />
          </div>
        </div>
        <div className="flex flex-col sm:justify-start sm:mt-44 items-center sm:items-start  px-6 text-center sm:text-left font-light">
          <h3 className="text-4xl sm:text-5xl	text-text-black mb-4">
            Next generation digital banking
          </h3>
          <p className="text-base sm:text-lg tracking-tighter	leading-6 font-bold sm:font-normal sm:w-96 text-text-gray mb-8">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="flex justify-center items-center leading-3 bg-gradient-to-tl	from-primary-blue to-primary-green rounded-full px-8 py-4 text-white text-sm hover:opacity-50">
            Request Invite
          </div>
        </div>
      </div>
    </div>
  );
}
Home.Layout = Layout;
