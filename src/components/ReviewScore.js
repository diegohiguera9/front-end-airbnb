import ScoreApart from "./ScoreApart"

const ReviewScore = (props) => {
  return (
    <div className="reviewScore">
        <ScoreApart name={"Cleanliness"} widthStyle={{ width: "90%" }}/>
        <ScoreApart name={"Accuracy"} widthStyle={{ width: "30%" }}/>
        <ScoreApart name={"Communication"} widthStyle={{ width: "70%" }}/>
        <ScoreApart name={"Location"} widthStyle={{ width: "90%" }}/>
        <ScoreApart name={"Check-in"} widthStyle={{ width: "10%" }}/>
        <ScoreApart name={"Value"} widthStyle={{ width: "85%" }}/>
        
    </div>
  )
}

export default ReviewScore