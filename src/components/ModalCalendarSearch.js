import ButtonRound from "./ButtonModal";
import "../styles/components/CalendarSearch.scss"
import "../styles/components/ButtonModal.scss"
import { RangeCalendar } from '@mantine/dates';
import { useState } from 'react';


const CalendarSearch = () => {
    const [viewCalendar, setViewCalendar] = useState(true)

    const [calendarOne, setCalendarOne] = useState([null, null]);
    // const [hiddenClass, setHiddenClass] = useState({
    //     flex: "",
    //     pick: "",
    // })
    const hiddenClass= {
        flex: "",
        pick: "",
    }
    const [buttonRoundSelected, setButtonRoundSelected] = useState({
        flex: "",
        pick: "selected",
    })
    const handleClickType = (who) => {
        if (who === "pick") {
            setButtonRoundSelected({
                flex: "",
                pick: "selected",
            })
          /*  setHiddenClass({
                flex: "hidden",
                pick: "",
            })*/
            setViewCalendar(true)
        } else {
            setButtonRoundSelected({
                flex: "selected",
                pick: "",
            })/*
            setHiddenClass({
                flex: "",
                pick: "hidden",
            })*/
            setViewCalendar(false)
        }
    }

    return (
        <div>

            <div className="containerMapa">
                <div className="itemCalendario">
                    <div className="itemSelector">
                        <button onClick={() => handleClickType("pick")} className={`dateButtonType ${buttonRoundSelected.pick}`} >Elige las fechas </button >
                        <button onClick={() => handleClickType("flex")} className={`dateButtonType ${buttonRoundSelected.flex}`} >Fechas flexibles</button >
                        {
                            //<ButtonRound clase={""} selected={`${buttonRoundSelected.pick}`} texto={""} />
                            //<ButtonRound clase={"dateButtonType"} selected={`${buttonRoundSelected.flex}`} texto={"Fechas flexibles"} />
                        }
                    </div>
                </div>
                { viewCalendar ? (
                <div className={`mutablePick ${hiddenClass.pick}`}>
                    <div >

                        <RangeCalendar

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
                            className="
                        RangeCalendarModal" minDate={new Date()} amountOfMonths={2} value={calendarOne} onChange={setCalendarOne} />

                    </div>
                    <div className="itemCalendario">
                        <ButtonRound clase={"dateButton"} selected={"selected"} texto={"Fechas exactas"} />
                        <ButtonRound clase={"dateButton"} texto={"± 1 día"} />
                        <ButtonRound clase={"dateButton"} texto={"± 3 días"} />
                        <ButtonRound clase={"dateButton"} texto={"± 7 días"} />

                    </div>
                </div>
                ) : (
                <div className={`mutableFlex ${hiddenClass.flex}`}>
                    <p>¿Cuánto tiempo quieres quedarte?</p>
                    <div className="itemSelector">
                        <ButtonRound clase={"dateButton"} selected={""} texto={"Fin de semana"} />
                        <ButtonRound clase={"dateButton"} selected={"selected"} texto={"Semana"} />
                        <ButtonRound clase={"dateButton"} selected={""} texto={"Mes"} />
                    </div>
                    <p>¿Cuándo quieres ir?¿Cuándo quieres ir?</p>
                </div>
            )}
            </div>

        </div >
    )

}

export default CalendarSearch;
