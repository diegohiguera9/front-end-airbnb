import "../styles/components/rentCalendar.scss";
import "../styles/components/amenities.scss";
import RentCalendarBtn from "./RentCalendarBtn";
import AmenitieTag from "./AmenitieTag";
import { RangeCalendar } from "@mantine/dates";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, changeTitle, changeDateHead, changeNights } from "../store/reducer/calendarReducer";

const RentCalendar = () => {
  const rentCalendarOne = useSelector((state) => state.calendarReducer.dates);
  const dispatch = useDispatch();
  const dateTitle = useSelector((state) => state.calendarReducer.title);
  const dateHeader= useSelector((state)=> state.calendarReducer.head)
  
  //const [rentCalendarOne, setRentCalendarOne] = useState([null,null]);
  //const [dateTitle, setDateTitle] = useState("")
  //const [dateHeader, setDateHeader] = useState("");

  const clearCalendar = () => {
    dispatch(changeDate([null, null]));
    dispatch(changeNights(0));
  };
  const textDateHeader = () => {
    if (rentCalendarOne[0] === null && rentCalendarOne[1] === null) {
      dispatch(changeNights(0));
      dispatch(changeTitle("Select check-in date"));
      dispatch(changeDateHead("Add your travel dates for exact pricing"));
    } else if (rentCalendarOne[0] && rentCalendarOne[1] === null) {
      dispatch(changeNights(0));
      dispatch(changeTitle("Select checkout date"));
      dispatch(changeDateHead("Minimum stay: 2 nights"));
    } else if (rentCalendarOne[0] && rentCalendarOne[1]) {
      if (rentCalendarOne[0] && rentCalendarOne[1]) {
        let rentDates =
          rentCalendarOne[1].getTime() - rentCalendarOne[0].getTime();
        rentDates = rentDates / (1000 * 3600 * 24);
        dispatch(changeTitle(`${rentDates} nights in Bogota`));
        dispatch(changeNights(rentDates))
      }
      const sDates = rentCalendarOne.map((item) => {
        return [`${item.getMonth()}, ${item.getDate()}, ${item.getFullYear()}`];
      });
      return dispatch(changeDateHead(`${sDates[0]} - ${sDates[1]}`));
    }
  };
  useEffect(() => {
    textDateHeader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rentCalendarOne]);

  return (
    <div>
      <div className="rentCalendar">
        <div className="dateTitle" children={dateTitle} />
        <div className="dateHeader" children={dateHeader} />
        <div>
          <RangeCalendar
            minDate={new Date()}
            amountOfMonths={2}
            value={rentCalendarOne}
            onChange={(e) => dispatch(changeDate(e))}
            styles={(theme) => ({
              day: {
                "&[data-selected]": {
                  backgroundColor: theme.colors.dark[4],
                  borderRadius: 100,
                  position: "relative",
                },

                "&[data-in-range]": {
                  backgroundColor: theme.colors.gray[2],
                },

                "&[data-first-in-range]": {
                  backgroundColor: theme.colors.dark[4],
                  borderRadius: 100,
                  position: "relative",

                  "&::after": {
                    content: '""',
                    backgroundColor: theme.colors.gray[2],
                    position: "absolute",
                    right: 0,
                    left: 20,
                    top: 0,
                    bottom: 0,
                    zIndex: -1,
                  },
                },

                "&[data-last-in-range]": {
                  backgroundColor: theme.colors.dark[4],
                  borderRadius: 100,
                  "&::after": {
                    content: '""',
                    backgroundColor: theme.colors.gray[2],
                    position: "absolute",
                    left: 0,
                    right: 20,
                    top: 0,
                    bottom: 0,
                    zIndex: -1,
                  },
                },
              },
            })}
          />
        </div>
        <div className="rentCalendarBtns">
          <button>
            <AmenitieTag
              svgPath={
                "M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 2H3v18h26zm-8 13v2H11v-2zm3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm16-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              }
              amenitie={""}
            />
          </button>
          <RentCalendarBtn
            clase={"clearDate"}
            texto={"Clear Dates"}
            evnt={clearCalendar}
          />
        </div>
      </div>
    </div>
  );
};

export default RentCalendar;
