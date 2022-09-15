import CalendarSearch from "../components/ModalCalendarSearch";
import ModalMenu from "../components/ModalMenu";
import ModalLogin from "../components/ModalLogin";
import ModalPersonas from "../components/ModalPersonas";
import ModalLocation from "../components/ModalLocation";

const Modal = () => {

    return (
        <>
            <h1> Pruebas de modales</h1>
            <ModalLocation/>
            <CalendarSearch/>
            <ModalMenu/>
            <ModalLogin/>
            <ModalPersonas/>
        </ >
    )

}

export default Modal;
