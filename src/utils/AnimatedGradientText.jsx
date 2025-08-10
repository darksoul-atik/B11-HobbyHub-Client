import React from "react";
// eslint-disable-next-line no-unused-vars
import { animated, useSpring, easings } from "@react-spring/web";

const AnimatedGradientText = ({ children, className = "" }) => {
  const animationProps = useSpring({
    from: { backgroundPosition: "0% 50%" },
    to: { backgroundPosition: "100% 50%" },
    loop: true,
    config: {
      duration: 6000,
      easing: easings.linear,
    }, 
  });

  return (
    <animated.h1
      className={`font-bold bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-[length:500%_100%] bg-clip-text text-transparent inline-block ${className}`}
      style={animationProps}
    >
      {children}
    </animated.h1>
  );
};

export default AnimatedGradientText;
