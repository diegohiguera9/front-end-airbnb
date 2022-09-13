import "../styles/components/general.scss";
import Amenities from "./Amenities";
import GeneralBeds from "./GeneralBeds";
const General = (props) => {
  return (
    <div className="generalInfo">
      <div className="rentHostData">
        <div className="rentData">
          <div className="rentHost">
            <h2>Entire home hosted by {props.host}</h2>
          </div>
          <div className="rentList">
            <ol className="rentDataList">
              <li>
                <span>{props.guest}</span>
              </li>
              <li>
                <span>.</span>
                <span>{props.bedrooms}</span>
              </li>
              <li>
                <span>.</span>
                <span>{props.beds}</span>
              </li>
              <li>
                <span>.</span>
                <span>{props.baths}</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="rentProfileImg">
          <button className="rentProfileBtn">
            <div className="rentProfileI">
              <img
                className="pimg"
                aria-hidden="true"
                alt="Learn more about the host, Mario."
                decoding="async"
                elementtiming="LCP-target"
                src="https://a0.muscache.com/im/pictures/user/3d5f33d9-153e-4d00-9798-7749b4928a64.jpg?im_w=240"
                data-original-uri="https://a0.muscache.com/im/pictures/user/3d5f33d9-153e-4d00-9798-7749b4928a64.jpg?im_w=240"
              />
            </div>
          </button>
        </div>
      </div>
      <hr className="hr2" />
      <div className="highlightsContainer">
        <div className="highlightsStyleContainer">
          <div className="highlight" id="hight1">
            <div>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="m16.8438 27.1562-.00005-3.39845-.2608465.0913211c-.9857292.3215073-2.0303948.5116467-3.1127817.5499306l-.4076218.0071983-.2927873-.0037049c-6.03236807-.1528291-10.89442655-5.0148222-11.04725775-11.0472069l-.00370495-.2927882.00370495-.2927873c.1528312-6.03236807 5.01488968-10.89442655 11.04725775-11.04725775l.2927873-.00370495.2927882.00370495c6.0323847.1528312 10.8943778 5.01488968 11.0472069 11.04725775l.0037049.2927873-.00663.3912275c-.0484899 1.4286741-.3615343 2.7917824-.8920452 4.0406989l-.1327748.2963236 7.90645 7.90705v5.5834h-5.5834l-4.12505-4.12545zm-6.5313-19.93745c1.708641 0 3.09375 1.38511367 3.09375 3.09375 0 1.7086436-1.3851064 3.09375-3.09375 3.09375-1.70863633 0-3.09375-1.385109-3.09375-3.09375 0-1.70863365 1.38511635-3.09375 3.09375-3.09375zm0 2.0625c-.56954635 0-1.03125.46170365-1.03125 1.03125 0 .5695521.46169942 1.03125 1.03125 1.03125.5695564 0 1.03125-.4616936 1.03125-1.03125 0-.56955058-.4616979-1.03125-1.03125-1.03125zm12.1147 15.81255 4.12455 4.12495h2.667v-2.667l-8.37295-8.37255.3697-.6775.1603998-.3074798c.56763-1.1397167.90791-2.4128858.9606815-3.761954l.0072187-.3697662-.0038197-.2688703c-.1397418-4.91222958-4.0963692-8.86881961-9.0086094-9.00856l-.2688709-.0038197-.2688703.0038197c-4.91222958.13974039-8.86881961 4.09633042-9.00856 9.00856l-.0038197.2688703.0038197.2688709c.14228112 5.0015536 4.24146819 9.0124291 9.2774303 9.0124291 1.4456308 0 2.8116781-.3298367 4.0293209-.9177001l.3012791-.1522999 1.5131-.7998-.00045 4.61975z"></path>
              </svg>
            </div>
            <div className="highlightStyle">
              <div className="hi1">Great check-in experience</div>
              <div className="hi2">
                90% of recent guests gave the check-in process a 5-star rating.
              </div>
            </div>
          </div>
          <div className="highlight" id="hight2">
            <div>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path>
              </svg>
            </div>
            <div className="highlightStyle">
              <div className="hi1">Dive right in</div>
              <div className="hi2">
                This is one of the few places in the area with a pool.
              </div>
            </div>
          </div>
          <div className="highlight" id="hight3">
            <div>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path>
              </svg>
            </div>
            <div className="highlightStyle">
              <div className="hi1">
                Free cancellation before {props.cancel}.
              </div>
              <div className="hi2"></div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr2" />
      <div className="highlightsStyleContainer">
        <div>
          <h2>
            <img
              className="airCoverImg"
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
              alt="AirCover"
            />
          </h2>
          <div className="airCoverText">
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </div>
          <button className="airCoverBtn">
            <u>Learn More</u>
          </button>
        </div>
      </div>
      <hr className="hr2" />
      <div>
        <div className="traduction">
          <div className="traductionsvg">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m30 13c.2652 0 .5196.1054.7071.2929s.2929.4419.2929.7071v16c0 .2652-.1054.5196-.2929.7071s-.4419.2929-.7071.2929h-16c-.2652 0-.5196-.1054-.7071-.2929s-.2929-.4419-.2929-.7071v-6.758l3.2407241-3.244 2.0572759.002.248.796.134.405c.4006 1.164 1.0174 2.2419 1.818 3.177-.862.563-1.985 1.077-3.37 1.532l-1.086.339 1.072 1.762.606-.191c1.763-.576 3.19-1.256 4.279-2.05 1 .727 2.284 1.36 3.848 1.904l1.038.336 1.073-1.761-1.051-.328c-1.4-.458-2.535-.975-3.401-1.543.7985-.9363 1.4139-2.0143 1.814-3.178l.134-.405.247-.797 1.799.002v-2l-4.546-.001c-.1642-.4623-.381-.9042-.646-1.317-.1643-.2493-.3461-.4865-.544-.71l-.168-.187-1.793.654 3.439-3.439zm-1.7071068-10.70710678 1.4142136 1.41421356-26.00000002 26.00000002-1.41421356-1.4142136zm-4.6868932 17.70710678-.061.205-.113.341c-.3163.9202-.8024 1.7729-1.433 2.514-.5479-.644-.9861-1.3737-1.297-2.16l-.133-.354-.113-.341-.063-.205zm-5.606-19c.2652 0 .5196.10536.7071.29289.1875.18754.2929.44189.2929.70711v6.757l-2 2v-7.757h-14v14h7.757l-2 2h-6.757c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071v-16c0-.26522.10536-.51957.29289-.70711.18754-.18753.44189-.29289.70711-.29289zm.242 17 1.372-1.372.075.071c.435.416.75.776.941 1.071l.138.229zm-7.053-13 3.1973479 8.3827979-1.5563479 1.5442021-.733-1.927h-4.194l-.763 2h-2.138l3.809-10zm-1.189 2.496-1.335 3.504h2.67z"></path>
            </svg>
          </div>
          <div>
            <span className="traductionText">
              Some info is shown in its original language.
            </span>
            <button className="traductionBtn">
              <u>Translate</u>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="rentDescription">
          <div>
            <span className="rentDescriptionTxt">
              Beautiful residence of minimalist construction. Open dining room
              and living room with cement and wood finishes. Large garden with
              mirror pool and jacuzzi with capacity for 10 people. The entire
              property has a spectacular view of the golf course It has three
              bedrooms with two double beds; one of them can be adapted as a
              living room with cable TV. Open spaces provide guests with a
              unique experience where nature matters most.
            </span>
          </div>
          <div className="descriptionMore">
            <button className="descriptionBtn">
              <span className="descBtnFlex">
                <span className="descBtnTxt">
                  <u>Show more</u>
                </span>
                <span className="descSvg">
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <hr className="hr2" />
      <GeneralBeds />
      <hr className="hr2" />
      <Amenities/>
      <hr className="hr2" />
    </div>
  );
};

export default General;
