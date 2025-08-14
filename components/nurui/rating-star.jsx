import RatingIcon from "@/components/nurui/rating-icon";
const RatingStars = ({ count = 5, size }) => (
  <div className="flex items-center">
    {Array.from({ length: count }).map((_, i) => (
      <RatingIcon key={i} rate={i < 4} size={size} />
    ))}
  </div>
);
export default RatingStars;