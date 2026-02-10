import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Reviews from "../components/reviews";
import Pricing from "../components/Pricing";
import AnimatedGradientText from "../utils/AnimatedGradientText";
import MobileViewReview from "../components/MobileViewReview";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
        <Helmet>
        <title>Home</title>
        <meta name="Create Group" content="Helmet application" />
      </Helmet>
      {/* Hero Section */}

      <section className=" p-10 rounded-lg  ">
        <section className="max-sm:mb-10 ">
          <Hero></Hero>
        </section>
      </section>

      {/* Title and Review Section */}
      <section className="lg:m-20">
        <div className="md:mt-10 w-full lg:mb-20 text-center">
          <AnimatedGradientText>
            <span className="text-4xl  max-sm:mt-10 max-sm:text-3xl ">
              Real Feedback from Real Users
            </span>
          </AnimatedGradientText>
          <p className="text-white dark:text-ccyan roboto-regular text-sm md:text-base  max-w-xl mx-auto mt-5">
            We take pride in cultivating a space where hobbies become shared
            passions. These reviews are more than just feedback — they are
            reflections of real people building real connections through our
            platform.
          </p>
        </div>

        <div>
          {/* Double styled reviews for both Large and Small devices */}
          <div className="hidden lg:block">
            <Reviews></Reviews>
          </div>
          <div className="min-lg:hidden max-sm:mt-5 md:mt-5 max-sm:mb-15">
            <MobileViewReview></MobileViewReview>
          </div>
        </div>
      </section>

      {/* Price and Membership Section */}
      <section className="lg:m-20 max-sm:mb-15">
        <div className="w-full md:mt-10 md:mb-5 lg:mb-5 text-center">
          <AnimatedGradientText>
            <span className="text-4xl ">
              Subscribe to our Premium Membership
            </span>
          </AnimatedGradientText>
        </div>
        <div className="">
          <Pricing></Pricing>
        </div>
      </section>
    </div>
  );
};

export default Home;
