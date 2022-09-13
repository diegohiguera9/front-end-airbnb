import "../styles/components/generalBeds.scss";
import BedCard from "./BedCard";

const GeneralBeds = () => {
  return (
    <div className="generalBeds">
      <div className="bedsText">
        <h2>Where you'll sleep</h2>
      </div>
      <div>
        <div className="bedsFlex">
          <BedCard bedroom={"Bedroom 1"} bedDesc={"1 double bed"} />
          <BedCard bedroom={"Bedroom 2"} bedDesc={"3 double bed"} />
          <BedCard bedroom={"Bedroom 3"} bedDesc={"2 single bed"} />
        </div>
      </div>
    </div>
  );
};
export default GeneralBeds;
