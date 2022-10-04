import "../styles/components/airCoverModal.scss";

const AirCoverModal = ({ setOpened }) => {
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
      <div className="airCoverLogo"></div>
      <div className="airCoverDetails">
        <h2>
          <img
            className="airCoverImg"
            src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
            alt="AirCover"
          />
        </h2>
        <div className="airCoverText">
          AirCover is comprehensive protection included for free with every
          booking.
        </div>
        <hr className="hr3" />
      </div>
      <div className="airCoverProtections">
        <div className="protection">
          <h3 className="protectionTitle">Booking Protection Guarantee</h3>
          <div className="protectionText">
            In the unlikely event a Host needs to cancel your booking within 30
            days of check-in, we’ll find you a similar or better home, or we’ll
            refund you.
          </div>
        </div>
        <div className="protection">
          <h3 className="protectionTitle">Check-In Guarantee</h3>
          <div className="protectionText">
            If you can’t check into your home and the Host cannot resolve the
            issue, we’ll find you a similar or better home for the length of
            your original stay, or we’ll refund you.
          </div>
        </div>
        <div className="protection">
          <h3 className="protectionTitle">Get-What-You-Booked Guarantee</h3>
          <div className="protectionText">
            If at any time during your stay you find your listing isn't as
            advertised—for example, the refrigerator stops working and your Host
            can’t easily fix it, or it has fewer bedrooms than listed—you'll
            have three days to report it and we’ll find you a similar or better
            home, or we’ll refund you.
          </div>
        </div>
        <div className="protection">
          <h3 className="protectionTitle">24-hour Safety Line</h3>
          <div className="protectionText">
            If you ever feel unsafe, you’ll get priority access to
            specially-trained safety agents, day or night.
          </div>
        </div>
      </div>
      <div className="coverHelpCenter">Find complete details on how AirCover protects your booking in our <b><u>Help Center</u></b></div>
    </div>
  );
};

export default AirCoverModal;
