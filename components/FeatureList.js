import React from "react";
import Feature from "./Feature";
import OnlineIcon from "../assets/images/icon-online.svg";
import BudgetIcon from "../assets/images/icon-budgeting.svg";
import OnboardIcon from "../assets/images/icon-onboarding.svg";
import ApiIcon from "../assets/images/icon-api.svg";
const FeatureList = (props) => {
  return (
    <div
      {...props}
      className="bg-gray-100 w-screen contain py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-x-8"
    >
      <div className="text-center lg:text-left max-w-2xl  md:col-span-2 lg:col-span-4">
        <h3 className="text-4xl sm:text-5xl	text-text-black mb-4">
          Why choose Easybank?
        </h3>
        <p className="text-base sm:text-lg tracking-tighter	leading-6 font-bold lg:font-normal  text-text-gray mb-8">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <Feature
        title="Online Banking"
        desc="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        Image={OnlineIcon}
      />
      <Feature
        title="Simple Budgeting"
        desc="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        Image={BudgetIcon}
      />
      <Feature
        title="Fast Onboarding"
        desc="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        Image={OnboardIcon}
      />
      <Feature
        title="Open API"
        desc="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        Image={ApiIcon}
      />
    </div>
  );
};

export default FeatureList;
