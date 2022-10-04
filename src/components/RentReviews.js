import ReviewsPuntuation from "./ReviewsPuntuation";
import ReviewScore from "./ReviewScore";
import "../styles/components/rentReviews.scss"
import RentComments from "./RentComments";
const RentReviews = () => {
  return (
    <div className="reviewsContainer">
      <ReviewsPuntuation rating={"1.11"} reviews={"10 Reviews"}/>
      <ReviewScore />
      <RentComments/>
      <div></div>
    </div>
  );
};

export default RentReviews;
