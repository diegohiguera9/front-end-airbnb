import ButtonRound from "./ButtonRound";
import "../styles/components/CalendarSearch.scss"
import ButtonRound2 from "./ButtonRound2";


const CalendarSearch = () => {

    return (
        <div>
            <div className="containerMapa">
                <div className="itemCalendario">
                    <div className="itemSelector">
                        <ButtonRound2 selected={"selected"} texto={"Elige las fechas"}/>
                        <ButtonRound2 texto={"Fechas flexibles"}/>
                    </div>
                </div>
                <div className="itemCalendario">
                    <img src={ process.env.PUBLIC_URL +'image/agosto.png'} alt="calendario agosto" width="250" height="200" />
                    <img src={ process.env.PUBLIC_URL +'image/septiembre.png'} alt="calendario septiembre" width="250" height="200" />
                </div>
                <div className="itemCalendario">
                    <ButtonRound selected={"selected"} texto={"Fechas exactas"}/>
                    <ButtonRound texto={ "± 1 día"}/>
                    <ButtonRound texto={"± 3 días"}/>
                    <ButtonRound texto={"± 7 días"}/>
                 
                </div>
            </div>

        </div >
    )

}

export default CalendarSearch;
