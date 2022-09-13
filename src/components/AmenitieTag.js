

const AmenitieTag = ({svgPath, amenitie}) => {
  return (
    <div className="amenitiesElement">
          <div className="ameElemFlex">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              
            >
              <path d={`${svgPath}`}></path>
            </svg>
            <div className="amenitie">{amenitie}</div>
          </div>
        </div>
  )
}

export default AmenitieTag