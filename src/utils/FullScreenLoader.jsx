import React from 'react';
import { ClipLoader } from "react-spinners";

const FullScreenLoader = () => (
  <div className="fixed inset-0 bg-cblack dark:bg-lwhite dark:text-lcyan flex items-center justify-center">
    <ClipLoader color="#e34e98" size={80} loading aria-label="Loading Spinner" />
  </div>
);

export default FullScreenLoader;