import "../styles/components/airCoverModal.scss";

const AmenitiesModal = ({setOpened}) => {
  return (
    <div className="modalContainer" >
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
      <div className="amenitiesTitle">
        <h2>What this place offers</h2>
      </div>
    </div>
  )
}

export default AmenitiesModal