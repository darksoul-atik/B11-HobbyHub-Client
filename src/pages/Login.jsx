import React from "react";
import DarkModeToggle from "../utils/DarkModeToggle";
import AnimatedGradientText from "../utils/AnimatedGradientText";
import GradientShadowButton from "../utils/GradientShadowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="h-screen roboto-regular w-screen  dark:bg-[url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')] bg-[url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')] flex flex-col lg:flex-row items-center justify-center bg-cover bg-center gap-4 p-4">
      {/* Left Glass Card: Login form */}
      <div className="w-full md:w-4/6 lg:w-2/6 h-[540px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-tr-none lg:rounded-br-none shadow-2xl flex flex-col items-center justify-center hover:bg-white/5 space-y-6 p-8">
        {/* Header */}
        <div className="h-1/5 flex items-center">
          <AnimatedGradientText className="p-2 lg:text-5xl text-3xl font-bold roboto-bold">
            Login
          </AnimatedGradientText>
        </div>

        {/* Form */}
        <form className="w-full max-w-md flex flex-col space-y-4">
          {/* Email */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-white/90"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-xs placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-corange focus:border-transparent backdrop-blur-md"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-white/90"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none placeholder:text-xs focus:ring-2 focus:ring-corange focus:border-transparent backdrop-blur-md"
            />
          </div>

          {/* Submit */}
          <GradientShadowButton className="py-2">Log In</GradientShadowButton>

          {/* Helpers */}
          <div className="flex items-center justify-between text-xs text-white/80">
            <a href="/forgot-password" className="hover:underline">
              Forgot password?
            </a>
            <Link to="/register" className="hover:underline">
              New to this site? Register Now
            </Link>
          </div>

          <div className="flex  items-center justify-center text-xs text-white/80">
            <AnimatedGradientText>Or login with</AnimatedGradientText>
          </div>

          {/* google and github id login */}
          <div className="flex max-sm:flex max-sm:flex-col justify-center gap-3">
            <button className="btn bg-black text-white border-black">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              Login with GitHub
            </button>

            <button className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </form>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>

      {/* Right Glass Card: HobbyHub content */}
      <div className="relative hidden lg:flex hover:bg-white/5  w-full lg:w-2/6 h-[540px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-tl-none lg:rounded-bl-none shadow-2xl flex-col justify-between p-8 overflow-hidden">
        {/* Soft gradient accents */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-corange/40 to-white/20 blur-2xl opacity-60" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-white/10 to-corange/40 blur-2xl opacity-50" />

        {/* Badge + Headline */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-cpink font-bold border border-white/20">
            <span className="h-2 w-2 rounded-full bg-cpurple  border animate-pulse" />
            hobbyHUB
          </span>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Find your people. Fuel your passions.
          </h2>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            Discover and join local hobby groups—from book clubs to hiking
            crews—or create your own. Build real communities around what you
            love.
          </p>
        </div>

        {/* Feature bullets */}
        <div className="mt-5 grid grid-cols-1 gap-3">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 text-xs">
              ✓
            </span>
            <div>
              <p className="text-white font-medium">Discover nearby groups</p>
              <p className="text-white/70 text-xs">
                Personalized suggestions based on your interests.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/20 border border-sky-300/40 text-sky-200 text-xs">
              ✓
            </span>
            <div>
              <p className="text-white font-medium">Start your own circle</p>
              <p className="text-white/70 text-xs">
                Create events, manage members, and grow a community.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-400/20 border border-fuchsia-300/40 text-fuchsia-200 text-xs">
              ✓
            </span>
            <div>
              <p className="text-white font-medium">Stay connected</p>
              <p className="text-white/70 text-xs">
                Group chat, RSVPs, reminders, and shared galleries.
              </p>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div>
          <Swiper
            modules={[Autoplay]} // enable Autoplay
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            slidesPerView={1}
            className="w-full h-32"
            observer={true} // if parent visibility changes
            observeParents={true} // (e.g., hidden on small screens)
            onInit={(s) => s.autoplay.start()} // ensure autoplay starts
          >
            {[
              "Discover local hobby groups",
              "Meet people who share your passions",
              "Create your own community",
              "Stay connected and inspired",
              "Turn passions into friendships",
            ].map((text, i) => (
              <SwiperSlide
                key={i}
                className="flex mt-10 items-center justify-center text-center text-white text-base font-semibold"
              >
                <div className="px-6 py-4 bg-white/10">{text}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Login;
