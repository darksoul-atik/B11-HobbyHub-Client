import React from "react";
import InfiniteScroll from "../utils/InfiniteScroll";
import { FaStar } from "react-icons/fa";

const InfiniteScrollDiv = ({ items, autoplayDirection }) => {
  return (
   
        <div className="flex w-[400px]  max-sm: max-sm:scale-50 mx-auto ">
      <InfiniteScroll
        items={items}
        isTilted={false}
        autoplay={true}
        autoplaySpeed={0.4}
        autoplayDirection={autoplayDirection}
        pauseOnHover={true}
      />
    </div>
  );
};

export default InfiniteScrollDiv;
