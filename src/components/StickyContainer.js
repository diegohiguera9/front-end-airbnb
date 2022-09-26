import "../styles/components/stickyContainer.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const StickyContainer = (props) => {
  const rentCalendar = useSelector((state) => state.calendarReducer.dates);
  const [texDate, setTextDate] = useState(["Add Date", "Add Date"]);

  const text = () => {
    if (rentCalendar[0] === null && rentCalendar[1] === null) {
      setTextDate(["Add Date", "Add Date"]);
    } else if (rentCalendar[0] && rentCalendar[1] === null) {
      const date1 = `${rentCalendar[0].getMonth()}/${rentCalendar[0].getDate()}/${rentCalendar[0].getFullYear()}`;
      setTextDate([date1, "Add Date"]);
    } else if (rentCalendar[0] && rentCalendar[1]) {
      const date1 = `${rentCalendar[0].getMonth()}/${rentCalendar[0].getDate()}/${rentCalendar[0].getFullYear()}`;
      const date2 = `${rentCalendar[0].getMonth()}/${rentCalendar[0].getDate()}/${rentCalendar[0].getFullYear()}`;
      setTextDate([date1, date2]);
    }
  };

  useEffect(() => {
    text();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rentCalendar]);

  return (
    <div className="bannerContainer">
      <div className="styckyContainer">
        <div className="bookContainer">
          <div className="bookIt">
            <div className="bookSections">
              <div className="estimatePricing">
                <div className="price">
                  <div className="priceflex">
                    <span className="span1">$1,642,053 COP</span>
                    <span className="span2">night</span>
                  </div>
                  <div className="rentSection">
                    <svg
                      className="sectionSvg"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
                    </svg>
                    <span>
                      <b>{props.rating}</b>
                    </span>
                    <span>.</span>
                    <button>
                      <u>{props.reviews}</u>
                    </button>
                  </div>
                </div>
              </div>
              <div className="checkinCheckout">
                <div className="checkContainer">
                  <div className="checkFlex">
                    <button className="checkBtn">
                      <div className="checkFlexI">
                        <div className="check">CHECK-IN</div>
                        <div className="checkText">{texDate[0]}</div>
                      </div>
                      <div className="checkFlexI" id="i2">
                        <div className="check">CHECKOUT</div>
                        <div className="checkText">{texDate[1]}</div>
                      </div>
                    </button>
                  </div>
                  <div className="chekI">
                    <button className="checkBtn">
                      <div className="check" id="guests">
                        GUESTS
                      </div>
                      <div className="checkText">11 Guests</div>
                      <svg
                        className="guestsSvg"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <g fill="none">
                          <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="reserve">
                <button className="reserveBtn">
                  <span className="reserveIt">Reserve</span>
                </button>
              </div>
            </div>
            <div className="message">
              <span className="messageStyle">You won't be charged yet</span>
            </div>
            <div className="totals">
              <div className="section1">
                <div className="values">
                  <button className="valuesBtn">
                    <div className="nightValues">
                      <u>$1,642,053 COP x 6 nights</u>
                    </div>
                  </button>
                  <span className="valueResult">$9,852,316 COP</span>
                </div>
                <div className="values">
                  <button className="valuesBtn">
                    <div className="nightValues">
                      <u>Cleaning fee</u>
                    </div>
                  </button>
                  <span className="valueResult">$43,855 COP</span>
                </div>
                <div className="values">
                  <button className="valuesBtn">
                    <div className="nightValues">
                      <u>Service fee</u>
                    </div>
                  </button>
                  <span className="valueResult">$1,399,250 COP</span>
                </div>
              </div>
              <hr className="hr1" />
              <div className="section2">
                <div className="totaltext">Total before taxes</div>
                <span className="total">$11,310,568 COP</span>
              </div>
            </div>
          </div>
        </div>
        <div className="report">
          <button className="reportBtn">
            <span className="reportFlex">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
              </svg>
              <span>
                <u>Report this listing</u>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default StickyContainer;
