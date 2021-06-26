import React from "react";
import ArticleCard from "./ArticleCard";
import currencyPic from "../assets/images/image-currency.jpg";
import restaurantPic from "../assets/images/image-restaurant.jpg";
import planePic from "../assets/images/image-plane.jpg";
import confettiPic from "../assets/images/image-confetti.jpg";
const Articles = () => {
  return (
    <div className="contain my-20">
      <h4 className="text-4xl sm:text-5xl	text-text-black mb-10">
        Latest Articles
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-y-8 md:gap-x-10">
        <ArticleCard
          img={currencyPic}
          author="Claire Robinson"
          title="Receive money in any currency with no fees"
          desc="The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single …"
        />
        <ArticleCard
          img={restaurantPic}
          author="Wilson Hutton"
          title="Treat yourself without worrying about money"
          desc="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        />
        <ArticleCard
          img={planePic}
          author="Wilson Hutton"
          title="Take your Easybank card wherever you go"
          desc="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        />
        <ArticleCard
          img={confettiPic}
          author="Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          desc="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        />
      </div>
    </div>
  );
};

export default Articles;
