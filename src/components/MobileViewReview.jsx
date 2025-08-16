import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const MobileViewReview = () => {
  const ReviewCard = (name, rating, review, imageUrl) => (
    <div
      className="flex  flex-col items-center roboto-regular justify-center p-4 text-xl font-semibold text-center 
                 border-2 bg-cpink dark:bg-cpurple rounded-2xl select-none box-border 
                  m-3 shadow-md "
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-3">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 shadow-sm"
        />
        <div className="text-left">
          <p className=" font-semibold text-white dark:text-white text-xs">
            {name}
          </p>
          <div className="flex space-x-[2px]">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "text-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review */}
      <p className="text-xs text-white-700 dark:text-gray-200 leading-snug">
        “{review}”
      </p>
    </div>
  );

  const items = [
    ReviewCard(
      "Emily Clark",
      5,
      "Absolutely love the photography group!",
      "https://i.pravatar.cc/100?img=1"
    ),
    ReviewCard(
      "Liam Johnson",
      4,
      "Hiking crew is great, needs better scheduling.",
      "https://i.pravatar.cc/100?img=2"
    ),
    ReviewCard(
      "Sophia Lee",
      5,
      "Painting circles are creative and fun.",
      "https://i.pravatar.cc/100?img=3"
    ),
    ReviewCard(
      "Noah Kim",
      4,
      "Writing groups are helpful and consistent.",
      "https://i.pravatar.cc/100?img=4"
    ),
    ReviewCard(
      "Jacob Wang",
      3,
      "Could be more structured.",
      "https://i.pravatar.cc/100?img=5"
    ),
    ReviewCard(
      "Ella Thomas",
      5,
      "Very engaging sessions!",
      "https://i.pravatar.cc/100?img=6"
    ),
  ];

  const items2 = [
    ReviewCard(
      "Olivia Brown",
      5,
      "Best book club I’ve been part of.",
      "https://i.pravatar.cc/100?img=9"
    ),
    ReviewCard(
      "Ethan Miller",
      4,
      "Loved the cooking group!",
      "https://i.pravatar.cc/100?img=10"
    ),
    ReviewCard(
      "Ava Garcia",
      5,
      "Great platform for hobby seekers.",
      "https://i.pravatar.cc/100?img=11"
    ),
    ReviewCard(
      "William Martinez",
      3,
      "Needs better moderation.",
      "https://i.pravatar.cc/100?img=12"
    ),
    ReviewCard(
      "Leo Roberts",
      4,
      "Good interface, helpful groups.",
      "https://i.pravatar.cc/100?img=13"
    ),
    ReviewCard(
      "Zoe Chen",
      5,
      "Thanks to the writing club, I'm more consistent.",
      "https://i.pravatar.cc/100?img=14"
    ),
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* First Row */}
      <Marquee gradient={false} speed={50}>
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </Marquee>

      {/* Second Row, opposite direction */}
      <Marquee gradient={false} speed={40} direction="right">
        {items2.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </Marquee>
    </div>
  );
};

export default MobileViewReview;
