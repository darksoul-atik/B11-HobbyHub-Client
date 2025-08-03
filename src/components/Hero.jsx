import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useSpring, animated, easings } from "react-spring";

const Hero = () => {
  const props = useSpring({
    from: { backgroundPosition: "0% 50%" },
    to: { backgroundPosition: "200% 50%" },
    loop: { reverse: false, reset: true },
    config: {
      duration: 6000,
      easing: easings.linear,
    },
  });

  return (
    <div className="border-2 border-white lg:w-[1600px] px-40 mx-auto flex lg:flex-row">
      <div className="lg:w-180 lg:h-180 border-2 border-white">
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
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {Array.from({ length: 9 }, (_, i) => (
            <SwiperSlide key={i}>
              <img
                src={`https://swiperjs.com/demos/images/nature-${i + 1}.jpg`}
                alt={`Nature ${i + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center p-6">
        <animated.h1
          style={{
            ...props,
            fontSize: "3rem",
            fontWeight: "bold",
            backgroundImage:
              "linear-gradient(90deg, #e34e98, #4640a8, #e34e98, #4640a8)",
            backgroundSize: "400% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            display: "inline-block",
          }}
        >
          Animated Gradient Text
        </animated.h1>
      </div>
    </div>
  );
};

export default Hero;
