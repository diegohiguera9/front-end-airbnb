import "../styles/components/imgContainer.scss";
const ImgContainer = ({ children }) => {
  return (
    <div className="rentContainerImg">
      <div className="ContainerImgStyle">
        <div className="mainImg">
          <div id="rentImg1" className="rentImg"></div>
        </div>
        <div className="secondaryImg">
          <div id="rentImg2" className="rentImg"></div>
          <div id="rentImg3" className="rentImg"></div>
          <div id="rentImg4" className="rentImg"></div>
          <div id="rentImg5" className="rentImg"></div>
          <div className="moreImg">
            <button className="moreBtn">
              <div className="morediv">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                >
                  <path
                    d="m3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
                    
                  ></path>
                </svg>
                <div className="moretext">Mostrar Más</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgContainer;
