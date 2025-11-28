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
      className=" lg:ml-20 md:flex-col md:flex-wrap  lg:mx-auto lg:mt-10 lg:w-full mx-auto flex lg:flex-row max-sm:flex-col gap-10  lg:justify-around 
    "
    >
      {/* Image Slide Container */}
      <div className=" lg:w-3/6">
        {/* SwiperJs Div Container */}
        <div className="backdrop-blur-lg rounded-2xl shadow-xl">
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
                <div className=" rounded-2xl">
                  <img
                    className="rounded-2xl w-full h-full shadow-lg transition-transform duration-500 hover:scale-105"
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

      <div className=" md:flex-col  lg:flex-col lg:pl-10 lg:flex-2 lg:pt-10 flex max-sm:flex-col max-sm:justify-center max-sm:items-center ">
        <AnimatedGradientText className="lg:pb-4 md:mb-10  md:text-4xl md:text-center lg:text-left lg:text-7xl max-sm:text-3xl max-sm:text-center max-sm:mb-10 ">
          Your Hobby. <br /> Your Community. <br />
          <span className="max-sm:flex max-sm:justify-center lg:hidden ">
            Your Place.
          </span>
        </AnimatedGradientText>

        <p className="md:text-base md:mx-auto lg:mx-0 text-white roboto-regular  dark:text-lcyan  text-lg lg:mt-10 max-w-xl max-sm:text-sm max-sm:text-center">
          Whatever sparks your curiosity .It maybe coding, cooking, sketching,
          or strategy games! <br />
          <span className="text-cpink font-bold">hobbyHUB</span> is where that
          spark turns into shared joy. Dive into thriving local groups or start
          something brand new. Because doing what you love is even better when
          you do it together.
        </p>

        <div className="md:mx-auto lg:mx-0 md:justify-center lg:justify-start md:mt-5 w-full max-sm:hidden flex flex-wrap lg:mt-10 gap-3 items-center rounded-lg px-4 py-2 bg-opacity-10 max-sm:mt-5 max-sm:justify-center ">
          <FaQuoteLeft className="md:text-sm max-sm:hidden text-white dark:text-lcyan  text-2xl" />

          <div></div>
          <span className="md:text-sm text-cpurple max-sm:text-xs font-semibold text-lg">
            My hobby is
          </span>

          <span className="md:text-xl max-sm:text-sm text-cpink text-3xl lg:text-4xl font-bold">
            {text}
            <Cursor cursorColor="#e34e98" />
          </span>

          <FaQuoteRight className=" md:text-sm max-sm:hidden text-white dark:text-lcyan  text-2xl" />
        </div>

        {/* Hero Bottom Section */}

        <p className="md:text-center md:mt-10 md:text-base lg:text-left text-white max-sm:mt-10 roboto-bold dark:text-lcyan  text-left lg:text-xl lg:mt-20  font-bold">
          Create your group today!
        </p>

        {/* Hero Button Area */}

        <div className="md:justify-center lg:justify-start mt-3 md:mt-4 lg:mt-5 flex flex-col md:flex-row flex-wrap items-stretch md:items-center space-y-3 md:space-y-0 md:space-x-4 lg:space-x-5 max-sm:flex max-sm:w-4/6">

          <GradientShadowButton className="rounded-xl w-full md:w-auto px-3 py-2 text-sm inline-flex items-center justify-center gap-2 
          max-sm:text-[10px] max-sm:px-2 
          ">
            <FaUsers className="text-base max-sm:text-lg" />
            Create an Instant Group
          </GradientShadowButton>

          <GradientShadowButton className="rounded-xl w-full md:w-auto px-3 py-2 text-sm inline-flex items-center justify-center gap-2
          max-sm:text-[10px] max-sm:px-2">
            <FaSearch className="text-base max-sm:text-base" />
            Search Ideas!
          </GradientShadowButton>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
