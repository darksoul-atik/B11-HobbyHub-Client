import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { ToastContext } from "../contexts/ToastContext";
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import alertTriangle from "react-useanimations/lib/alertTriangle";
import alertCircle from "react-useanimations/lib/alertCircle";

const ToastProvider = ({ children }) => {
  const showToast = (text, type) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-custom-enter" : "animate-custom-leave"
        } max-w-md w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl border-2 pointer-events-auto flex`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 text-white flex flex-row gap-2 items-center">
              {type === "success" && (
                <UseAnimations animation={activity} strokeColor="white" size={30} autoplay />
              )}
              {type === "error" && (
                <UseAnimations animation={alertTriangle} strokeColor="white" size={50} autoplay />
              )}
              {type === "else" && (
                <UseAnimations animation={alertCircle} strokeColor="white" size={36} autoplay />
              )}
              <p className="text-sm text-lwhite font-medium">{text}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full rounded-none rounded-r-lg p-4 flex items-center cursor-pointer justify-center text-sm font-medium text-white"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <ToastContext value={{ showToast }}>
     
      <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
      {children}
    </ToastContext>
  );
};

export default ToastProvider;
