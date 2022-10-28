import RentMap from "./RentMap";
import "../styles/components/rentLocation.scss";

const RentLocation = ({ location }) => {
  return (
    <div className="rentLocationContainer">
      <div className="rentLocationTitle">
        <h2>Dónde vas a estar</h2>
      </div>
      <RentMap location={location} />
      <div className="rentLocationInfo">
        <h3>{location.city}</h3>
        <div className="rentLocationDesc">
          <span>una excelente ciudad</span>
        </div>
      </div>
    </div>
  );
};

export default RentLocation;
