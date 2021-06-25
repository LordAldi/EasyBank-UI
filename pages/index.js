import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import bgMobile from "../assets/images/bg-intro-mobile.png";
import bgDesktop from "../assets/images/bg-intro-desktop.png";
import mockupImg from "../assets/images/image-mockups.png";
import Feature from "../components/Feature";
import iconBanking from "../assets/images/icon-online.svg";
import iconBudgeting from "../assets/images/icon-budgeting.svg";
import iconApi from "../assets/images/icon-online.svg";
import iconOnboard from "../assets/images/icon-onboarding.svg";
export default function Home() {
  return (
    <div className="bg-bg-color overflow-hidden">
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-3  max-h-screen mb-20 contain-left">
        <div className="relative sm:order-1 sm:col-span-2 flex justify-end">
          <div className="relative top-0 sm:hidden">
            <Image src={bgMobile} className="" />
          </div>
          <div className="relative -top-36  hidden sm:block max-w-384 ">
            <Image src={bgDesktop} />
          </div>
          <div className="absolute -top-32 w-full sm:-right-32 flex justify-center items-center">
            <Image src={mockupImg} />
          </div>
        </div>

        <div className="flex flex-col sm:justify-start sm:mt-32 md:mt-44 items-center sm:items-start sm:max-w-md  px-6 text-center sm:text-left font-light z-10">
          <h3 className="text-4xl sm:text-5xl	text-text-black mb-4">
            Next generation digital banking
          </h3>
          <p className="text-base sm:text-lg tracking-tighter	leading-6 font-bold sm:font-normal  text-text-gray mb-8">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <div className="flex justify-center transition duration-500 ease-in-out transform hover:scale-110 items-center leading-3 bg-gradient-to-tl	from-primary-blue to-primary-green rounded-full px-8 py-4 text-white text-sm hover:opacity-50">
            Request Invite
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-screen contain py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-x-8">
        <div className="text-center lg:text-left max-w-2xl  md:col-span-2 lg:col-span-4">
          <h3 className="text-4xl sm:text-5xl	text-text-black mb-4">
            Why choose Easybank?
          </h3>
          <p className="text-base sm:text-lg tracking-tighter	leading-6 font-bold lg:font-normal  text-text-gray mb-8">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <Feature
          title="Online Banking"
          desc="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          img={iconBanking}
        />
        <Feature
          title="Simple Budgeting"
          desc="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
          img={iconBudgeting}
        />
        <Feature
          title="Fast Onboarding"
          desc="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          img={iconOnboard}
        />
        <Feature
          title="Open API"
          desc="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          img={iconApi}
        />
      </div>
    </div>
  );
}
Home.Layout = Layout;
