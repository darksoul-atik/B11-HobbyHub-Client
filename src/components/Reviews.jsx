import React from "react";
import InfiniteScrollDiv from "./InfiniteScrollDiv";
import { FaStar } from "react-icons/fa";


const ReviewCard = (name, rating, review, imageUrl) => ({
  content: (
    <div className="bg-white dark:bg-gray-800 hover:scale-[1.02] transition-transform duration-300  shadow-lg rounded-2xl p-5 w-72 border border-gray-100 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center gap-4 mb-3">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 shadow-sm"
        />
        <div>
          <p className="font-semibold text-gray-800 lg:text-base dark:text-white">{name}</p>
          <div className="flex space-x-[2px]">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Review */}
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
        “{review}”
      </p>
    </div>
  ),
});


const items = [
  ReviewCard("Emily Clark", 5, "Absolutely love the photography group!", "https://i.pravatar.cc/100?img=1"),
  ReviewCard("Liam Johnson", 4, "Hiking crew is great, needs better scheduling.", "https://i.pravatar.cc/100?img=2"),
  ReviewCard("Sophia Lee", 5, "Painting circles are creative and fun.", "https://i.pravatar.cc/100?img=3"),
  ReviewCard("Noah Kim", 4, "Writing groups are helpful and consistent.", "https://i.pravatar.cc/100?img=4"),
  ReviewCard("Jacob Wang", 3, "Could be more structured.", "https://i.pravatar.cc/100?img=5"),
  ReviewCard("Ella Thomas", 5, "Very engaging sessions!", "https://i.pravatar.cc/100?img=6"),
  ReviewCard("Michael Brown", 4, "Enjoyed meeting like-minded people.", "https://i.pravatar.cc/100?img=7"),
  ReviewCard("Grace Park", 5, "Perfect for weekend hobbies.", "https://i.pravatar.cc/100?img=8"),
];


const items2 = [
  ReviewCard("Olivia Brown", 5, "Best book club I’ve been part of.", "https://i.pravatar.cc/100?img=9"),
  ReviewCard("Ethan Miller", 4, "Loved the cooking group!", "https://i.pravatar.cc/100?img=10"),
  ReviewCard("Ava Garcia", 5, "Great platform for hobby seekers.", "https://i.pravatar.cc/100?img=11"),
  ReviewCard("William Martinez", 3, "Needs better moderation.", "https://i.pravatar.cc/100?img=12"),
  ReviewCard("Leo Roberts", 4, "Good interface, helpful groups.", "https://i.pravatar.cc/100?img=13"),
  ReviewCard("Zoe Chen", 5, "Thanks to the writing club, I'm more consistent.", "https://i.pravatar.cc/100?img=14"),
  ReviewCard("Henry Scott", 4, "Could use better calendar tools.", "https://i.pravatar.cc/100?img=15"),
  ReviewCard("Sienna James", 5, "Highly recommend the photography circle.", "https://i.pravatar.cc/100?img=16"),
];


const items3 = [
  ReviewCard("Isabella Turner", 5, "Relaxing painting sessions every weekend.", "https://i.pravatar.cc/100?img=17"),
  ReviewCard("James Evans", 4, "Nice folks, just hard to match time slots.", "https://i.pravatar.cc/100?img=18"),
  ReviewCard("Maya Singh", 5, "Writing accountability partners are great!", "https://i.pravatar.cc/100?img=19"),
  ReviewCard("David Allen", 3, "Some sessions felt too short.", "https://i.pravatar.cc/100?img=20"),
  ReviewCard("Natalie Brooks", 5, "Really appreciate the friendly members.", "https://i.pravatar.cc/100?img=21"),
  ReviewCard("Ryan Moore", 4, "Good structure, fun topics.", "https://i.pravatar.cc/100?img=22"),
  ReviewCard("Chloe Sanders", 5, "My go-to hobby app.", "https://i.pravatar.cc/100?img=23"),
  ReviewCard("Andrew Ross", 4, "Well-run and engaging.", "https://i.pravatar.cc/100?img=24"),
];


const items4 = [
  ReviewCard("Daniel Kim", 4, "Fishing group is peaceful and relaxing.", "https://i.pravatar.cc/100?img=25"),
  ReviewCard("Aria Patel", 5, "Introduced to so many amazing books.", "https://i.pravatar.cc/100?img=26"),
  ReviewCard("Benjamin Lee", 3, "Some onboarding issues but good overall.", "https://i.pravatar.cc/100?img=27"),
  ReviewCard("Lucy Watson", 4, "Really organized groups.", "https://i.pravatar.cc/100?img=28"),
  ReviewCard("Mateo Diaz", 5, "UI is clean, experience is smooth.", "https://i.pravatar.cc/100?img=29"),
  ReviewCard("Eva Adams", 4, "Cooking demos are really fun.", "https://i.pravatar.cc/100?img=30"),
  ReviewCard("George Knight", 3, "Some inactive groups.", "https://i.pravatar.cc/100?img=31"),
  ReviewCard("Hazel Morgan", 5, "Book discussions are lively!", "https://i.pravatar.cc/100?img=32"),
];



const Reviews = () => {
  return (
    <div className="p-10">
      <div className="flex h-[700px]  justify-center gap-4">
        <InfiniteScrollDiv
          items={items}
          autoplayDirection="down"
          autoplay={true}
          pauseOnHover={true}
        />
        <InfiniteScrollDiv
          items={items2}
          autoplayDirection="up"
          autoplay={true}
          pauseOnHover={true}
        />
        <InfiniteScrollDiv
          items={items3}
          autoplayDirection="down"
          autoplay={true}
          pauseOnHover={true}
        />
        <InfiniteScrollDiv
          items={items4}
          autoplayDirection="up"
          autoplay={true}
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default Reviews;
