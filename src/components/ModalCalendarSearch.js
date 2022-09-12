import ButtonRound from "./ButtonModal";
import "../styles/components/CalendarSearch.scss"
import { RangeCalendar } from '@mantine/dates';
import { useState } from 'react';
import dayjs from 'dayjs';


const CalendarSearch = () => {

    const [calendarOne, setCalendarOne] = useState(null);
   

    return (
        <div>
             
            <div className="containerMapa">
                <div className="itemCalendario">
                    <div className="itemSelector">
                        <ButtonRound clase={"dateButtonType"} selected={"selected"} texto={"Elige las fechas"}/>
                        <ButtonRound clase={"dateButtonType"} selected={"selected"} texto={"Fechas flexibles"}/>
                    </div>
                </div>
                <div >
             
                <RangeCalendar   minDate={new Date()} amountOfMonths={2} value={calendarOne} onChange={setCalendarOne} />
         
                </div>
                <div className="itemCalendario">
                    <ButtonRound clase={"dateButton"} selected={"selected"} texto={"Fechas exactas"}/>
                    <ButtonRound clase={"dateButton"} texto={ "± 1 día"}/>
                    <ButtonRound clase={"dateButton"} texto={"± 3 días"}/>
                    <ButtonRound clase={"dateButton"} texto={"± 7 días"}/>
                 
                </div>
            </div>

        </div >
    )

}

export default CalendarSearch;
