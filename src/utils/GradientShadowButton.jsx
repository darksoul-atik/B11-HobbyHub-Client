import React from "react";

const GradientShadowButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      bg-[length:200%_100%] bg-left
      hover:bg-right
      text-white font-semibold
     
      shadow-lg
      transition-all duration-500 ease-in-out
      cursor-pointer
      ${className}
    `}
  >
    {children}
  </button>
);

export default GradientShadowButton;
