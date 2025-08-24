import DarkModeToggle from "../utils/DarkModeToggle";
import AnimatedGradientText from "../utils/AnimatedGradientText";
import GradientShadowButton from "../utils/GradientShadowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { Toaster } from "react-hot-toast";
import { ToastContext } from "../contexts/ToastContext";


const Register = () => {
  const { createUser, updateUser, setUser  } = useContext(AuthContext);
  const {showToast} = useContext(ToastContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const registerForm = e.target;
    const registerFormData = new FormData(registerForm);
    const registeredUserForm = Object.fromEntries(registerFormData.entries());

    const name = registeredUserForm.name;
    const email = registeredUserForm.email;
    const photoURL = registeredUserForm.photourl;
    const password = registeredUserForm.password;

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    } else {
      setError("");
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          updateUser({ displayName: name, photoURL: photoURL }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            console.log(user);
            navigate("/");
            showToast("Successfully Registered","success")

          


          });



        })

        .catch((error) => {
          console.log("Something Wrong", error);
          if (error.message == "Firebase: Error (auth/email-already-in-use).") {
            alert(
              "Error while registering or Email has already registered. Try another Mail"
            );
          }
        });
    }
  };
  return (
    <div className="h-screen roboto-regular w-screen dark:bg-[url('https://i.postimg.cc/g0Ps8yCt/bgauth.png')] bg-[url('https://i.postimg.cc/d3sJWt3P/Purple-and-Black-Modern-Login-and-Sign-up-Website-Page-UI-Desktop-Prototype.png')] flex flex-col lg:flex-row items-center justify-center bg-cover bg-center gap-4 p-4">
    
      {/* Left Glass Card: HobbyHub content  */}
      <div className="relative  hidden lg:flex hover:bg-white/5 w-full lg:w-2/6 h-4/6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-tr-none lg:rounded-br-none shadow-2xl flex-col justify-between p-8 overflow-hidden">
        {/* Gradient accents */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-corange/40 to-white/20 blur-2xl opacity-60" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-white/10 to-corange/40 blur-2xl opacity-50" />

        {/* Badge + Headline */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-cpink font-bold border border-white/20">
            <span className="h-2 w-2 rounded-full bg-cpurple  border animate-pulse" />
            hobbyHUB
          </span>

          <h2 className="mt-4  text-3xl font-bold text-white tracking-tight">
            Join a Community That Grows With You
          </h2>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            Curated groups, real events, and simple tools to turn interests into
            lasting connections.
          </p>
        </div>

        {/* Quick credibility strip */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-white/10 border border-white/10 p-3 text-center">
            <AnimatedGradientText>
              <p className="text-2xl font-semibold ">50k+</p>
              <p className="text-[11px] text-white/70">Active members</p>
            </AnimatedGradientText>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/10 p-3 text-center">
            <AnimatedGradientText>
              <p className="text-2xl font-semibold ">900+</p>
              <p className="text-[11px] text-white/70">Monthly events</p>
            </AnimatedGradientText>
          </div>
          <div className="rounded-xl bg-white/10 border border-white/10 p-3 text-center">
            <AnimatedGradientText>
              <p className="text-2xl font-semibold ">4.8/5</p>
              <p className="text-[11px] text-white/70">Member rating</p>
            </AnimatedGradientText>
          </div>
        </div>

        {/* Value bullets */}
        <div className="mt-5 grid grid-cols-1 gap-3">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 text-xs">
              ✓
            </span>
            <div>
              <p className="text-white font-medium">Smart discovery</p>
              <p className="text-white/70 text-xs">
                Tailored group recommendations based on interests & location.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/20 border border-sky-300/40 text-sky-200 text-xs">
              ✓
            </span>
            <div>
              <p className="text-white font-medium">Host with confidence</p>
              <p className="text-white/70 text-xs">
                Create events, manage RSVPs, and grow engagement with ease.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-400/20 border border-fuchsia-300/40 text-fuchsia-200 text-xs">
              ✓
            </span>
            <div>
              <p className="text-white font-medium">Built-in connections</p>
              <p className="text-white/70 text-xs">
                Group chat, reminders, and shared galleries keep everyone
                aligned.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
          <div className="rounded-lg bg-white/5 border border-white/10 p-2">
            <p className="text-white/80 font-medium">1. Create</p>
            <p className="text-white/60">Set up your profile</p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-2">
            <p className="text-white/80 font-medium">2. Discover</p>
            <p className="text-white/60">Join or start groups</p>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-2">
            <p className="text-white/80 font-medium">3. Meet</p>
            <p className="text-white/60">Attend events IRL/online</p>
          </div>
        </div>

        {/* Testimonials Swiper */}
        <div className="mt-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            slidesPerView={1}
            loop
            allowTouchMove
            className="w-full h-24"
          >
            {[
              "“Joined my first event and already made three new friends!” — Priya",
              "“The app made hosting stress-free — everything just worked.” — James",
              "“Loved how inclusive and welcoming the community felt.” — Elena",
              "“Reminders saved me from missing out on so many great meetups.” — Marco",
              "“Perfect balance of casual hangouts and professional networking.” — Fatima",
              "“I was nervous at first, but the group made me feel right at home.” — Kevin",
              "“Easy to RSVP, easy to show up — can't ask for more.” — Sofia",
              "“Discovered a new hobby and a group of amazing people.” — Tom",
              "“Both online and in-person events fit perfectly with my schedule.” — Mei",
              "“From strangers to friends in just one evening — unforgettable.” — Arjun",
            ].map((text, i) => (
              <SwiperSlide
                key={i}
                className="!h-full flex items-center justify-center"
              >
                <div className="px-6 py-4  bg-white/10  text-white text-center text-sm font-medium">
                  {text}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Privacy & Safety */}
        <div className="mt-4 flex items-start gap-2 text-[11px] text-white/70">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-200">
            ✓
          </span>
          <p>
            Privacy-first: you control your visibility and data sharing at all
            times.
          </p>
        </div>
      </div>
      {/* Right Glass Card: Sign-up form  */}
      <div className="w-full h-4/6 md:w-4/6 lg:w-2/6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl lg:rounded-tl-none lg:rounded-bl-none shadow-2xl flex flex-col items-center justify-center hover:bg-white/5 space-y-6 p-8">
        {/* Header */}
        <div className="h-1/5 flex items-center">
          <AnimatedGradientText className="p-2 lg:text-5xl text-3xl font-bold roboto-bold">
            Sign Up!
          </AnimatedGradientText>
        </div>

        {/* Form */}
        <form
          onSubmit={handleRegisterForm}
          className="w-full max-w-md flex flex-col space-y-4"
        >
          {/* Name */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white/90">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-xs placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-corange focus:border-transparent backdrop-blur-md"
            />
          </div>

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
              name="email"
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
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none placeholder:text-xs focus:ring-2 focus:ring-corange focus:border-transparent backdrop-blur-md"
            />
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}

          {/* PhotoURL */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="photourl"
              className="text-sm font-medium text-white/90"
            >
              PhotoURL
            </label>
            <input
              type="text"
              name="photourl"
              placeholder="Enter a valid PhotoURL"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-xs placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-corange focus:border-transparent backdrop-blur-md"
            />
          </div>

          {/* Submit */}
          <GradientShadowButton className="py-2">Sign Up</GradientShadowButton>

          {/* Helpers */}
          <div className="flex items-center justify-center text-xs text-white/80">
            <Link to="/login" className="hover:underline">
              Already have an account? Login Now
            </Link>
          </div>
        </form>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Register;
