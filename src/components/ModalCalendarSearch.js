import ButtonRound from "./ButtonModal";
import "../styles/components/CalendarSearch.scss"



const CalendarSearch = () => {

    return (
        <div>
            <div className="containerMapa">
                <div className="itemCalendario">
                    <div className="itemSelector">
                        <ButtonRound clase={"dateButtonType"} selected={"selected"} texto={"Elige las fechas"}/>
                        <ButtonRound clase={"dateButtonType"} texto={"Fechas flexibles"}/>
                    </div>
                </div>
                <div className="itemCalendario">
                    <img src={ process.env.PUBLIC_URL +'image/agosto.png'} alt="calendario agosto" width="250" height="200" />
                    <img src={ process.env.PUBLIC_URL +'image/septiembre.png'} alt="calendario septiembre" width="250" height="200" />
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
