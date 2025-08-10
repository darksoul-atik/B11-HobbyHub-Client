import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import AnimatedGradientText from "../utils/AnimatedGradientText";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import GradientShadowButton from "../utils/GradientShadowButton";
import { FaUsers, FaSearch } from "react-icons/fa";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      ".......Join a Book Club",
      ".......Explore Hiking Trails",
      ".......Learn to Paint",
      ".......Cook Together",
      ".......Code and Collaborate",
      ".......Grow a Garden",
      ".......Snap Great Photos",
      ".......Play Chess with Friends",
    ],
    loop: 0,
  });
  return (
    // Hero Container
    <div
      className=" lg:mt-10 lg:max-w-5/6 mx-auto flex lg:flex-row max-sm:flex-col  lg:justify-around
    "
    >
      {/* Image Slide Container */}
      <div className="lg:w-3/6">
        {/* SwiperJs Div Container */}
        <div className="backdrop-blur-lg rounded-xl shadow-xl">
          {/* SwiperJs Slide */}
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            speed={3000}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {[
              "https://i.postimg.cc/CLn7zRjq/Yellow-Torn-Paper-Did-You-Know-Facebook-Post-2.png",
              "https://i.postimg.cc/YCc3gt3y/Yellow-Torn-Paper-Did-You-Know-Facebook-Post-1.png",
              "https://i.postimg.cc/6QtfjzFr/Yellow-Torn-Paper-Did-You-Know-Facebook-Post.png",
              "https://i.postimg.cc/Cxj4s9rM/Yellow-We-are-Hiring-Facebook-Post.png",
              "https://i.postimg.cc/265Fmyk3/Green-and-Black-Quote-Facebook-Post.png",
            ].map((src, index) => (
              <SwiperSlide key={index}>
                <div className="p-1 rounded-2xl">
                  <img
                    className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                    src={src}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Text Content Container */}
      <div className=" lg:pl-10 lg:flex-2 lg:pt-10    ">
        <AnimatedGradientText className="lg:text-7xl">
          Your Hobby. <br /> Your Community.
        </AnimatedGradientText>

        <p className="text-white  text-lg lg:mt-10  max-w-xl">
          Whatever sparks your curiosity .It maybe coding, cooking, sketching,
          or strategy games! <br />
          <span className="text-cpink font-bold">hobbyHUB</span> is where that
          spark turns into shared joy. Dive into thriving local groups or start
          something brand new. Because doing what you love is even better when
          you do it together.
        </p>

        <div className="w-full flex flex-wrap lg:mt-10 gap-3 items-center rounded-lg px-4 py-2 bg-opacity-10">
          <FaQuoteLeft className="text-white text-2xl" />

          <span className="text-cpurple font-semibold text-lg">
            My hobby is
          </span>

          <span className="text-cpink text-3xl lg:text-4xl font-bold">
            {text}
            <Cursor cursorColor="#e34e98" />
          </span>

          <FaQuoteRight className="text-white text-2xl" />
        </div>

        {/* Hero Bottom Section */}

        <p className="text-white text-left lg:text-xl lg:mt-20  font-bold">
          Create your group today!
        </p>

        {/* Hero Button Area */}
        <div className="lg:mt-5 space-x-5 flex flex-wrap">
          <GradientShadowButton className="text-sm inline-flex items-center gap-2">
            <FaUsers className="text-base" />
            Create an Instant Group
          </GradientShadowButton>

          <GradientShadowButton className="text-sm inline-flex items-center gap-2">
            <FaSearch className="text-base" />
            Search Ideas!
          </GradientShadowButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
