import ReviewsPuntuation from "./ReviewsPuntuation";
import ReviewScore from "./ReviewScore";
import "../styles/components/rentReviews.scss"
import RentComments from "./RentComments";
const RentReviews = ({rating, reviews, comments}) => {
  return (
    <div className="reviewsContainer">
      <ReviewsPuntuation rating={rating} reviews={reviews}/>
      <ReviewScore />
      <RentComments comments={comments}/>
      <div></div>
    </div>
  );
};

export default RentReviews;
