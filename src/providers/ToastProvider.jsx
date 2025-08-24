import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { ToastContext } from "../contexts/ToastContext";
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import alertTriangle from "react-useanimations/lib/alertTriangle";
import alertCircle from "react-useanimations/lib/alertTriangle";

const ToastProvider = ({ children }) => {
  const showToast = (text, type) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } max-w-md w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg pointer-events-auto flex ring-1`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 text-white flex flex-row gap-2 items-center">
              {type === "success" && (
                <UseAnimations animation={activity} strokeColor="white" size={24} autoplay />
              )}
              {type === "error" && (
                <UseAnimations animation={alertTriangle} strokeColor="white" size={24} autoplay />
              )}
              {type === "else" && (
                <UseAnimations animation={alertCircle} strokeColor="white" size={24} autoplay />
              )}
              <p className="text-sm  text-lwhite font-medium ">
                {text}
              </p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full  rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white hover:text-[var(--color-cpurple)] focus:outline-none focus:ring-2 focus:ring-[var(--color-cpink)]"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <ToastContext value={{ showToast }}>
      <Toaster position="top-right" />
      {children}
    </ToastContext>
  );
};

export default ToastProvider;
