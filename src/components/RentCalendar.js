import "../styles/components/rentCalendar.scss";
import "../styles/components/amenities.scss";
import RentCalendarBtn from "./RentCalendarBtn";
import AmenitieTag from "./AmenitieTag";
import { RangeCalendar } from "@mantine/dates";
import { useState } from "react";

const RentCalendar = () => {
  const [rentCalendarOne, setRentCalendarOne] = useState([null,null]);
  const [dateHeader, setDateHeader] = useState("Add your travel dates for exact pricing");

  const clearCalendar = () => {
    setRentCalendarOne([null, null]);
  };
  const textDateHeader = () => {
    if (rentCalendarOne[0] === null && rentCalendarOne[1] === null) {
      setDateHeader("Add your travel dates for exact pricing");
      console.log(dateHeader+ " ");
    } else if (rentCalendarOne[0] && rentCalendarOne[1] === null) {
      setDateHeader("Minimum stay: 2 nights");
    } else if (rentCalendarOne[0] && rentCalendarOne[1]) {
      const sDates = rentCalendarOne.map((item) => {
        return [`${item.getMonth()}, ${item.getDate()}, ${item.getFullYear()}`];
      });
      return setDateHeader(`${sDates[0]} - ${sDates[1]}`);
    }
  };

  return (
    <div >
      <div className="rentCalendar" >
        <div children={dateHeader}></div>
        <div>
          <RangeCalendar
            minDate={new Date()}
            amountOfMonths={2}
            value={rentCalendarOne}
            onChange={setRentCalendarOne}
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
