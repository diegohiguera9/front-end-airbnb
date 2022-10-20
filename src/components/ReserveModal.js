import "../styles/components/imgModal.scss";

const ReserveModal = ({setOpenReserve}) => {
  return (
    <div className="modalContainer">
      <div className="headerSections">
        <div className="rentSection">
          <button className="descriptionBtn" onClick={() => setOpenReserve(false)}>
            <svg
              className="descSvg"
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="imgsContainer">
      </div>
    </div>
  )
}

export default ReserveModal