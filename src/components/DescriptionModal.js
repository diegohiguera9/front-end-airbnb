import "../styles/components/airCoverModal.scss";

const DescriptionModal = ({ setOpened }) => {
  return (
    <div className="modalContainer">
      <div className="headerSections">
        <div className="rentSection">
          <button className="closeBtn" onClick={() => setOpened(false)}>
            <svg
              className="closeSvg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m6 6 20 20"></path>
              <path d="m26 6-20 20"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="descriptionContainer">
        <div className="descTitle">
          <h2>About this space</h2>
        </div>
        <div className="descText">
          <span>
            Beautiful residence of minimalist construction. Open dining room and
            living room with cement and wood finishes. Large garden with mirror
            pool and jacuzzi with capacity for 10 people. The entire property
            has a spectacular view of the golf course It has three bedrooms with
            two double beds; one of them can be adapted as a living room with
            cable TV. Open spaces provide guests with a unique experience where
            nature matters most.
          </span>
        </div>
        <div className="descSubTitle">
            <h3>The space</h3>
        </div>
        <div className="descText1"><span>Ideal for Golfers, Open Areas, Outdoor Experience,
Amazing Mirror Pool, Jacuzzi and Bar</span></div>
        <div className="descSubTitle"><h3>Guest access</h3></div>
        <div className="descText1"><span>The entrance to the Golf Course is prohibited through the house</span></div>
      </div>
    </div>
  );
};

export default DescriptionModal;
