import ButtonModal from "./ButtonModal";
import "../styles/components/ModalMenu.scss"
const ModalMenu = () => {

    return (
        <>
            <div class="containerMenu">
                <ButtonModal clase={"whiteButton"} texto={"Regístrate"} />
                <ButtonModal clase={"whiteButton"} texto={"Inicia sesión"} />
                <hr />
                <ButtonModal clase={"whiteButton"} texto={"Recibe huéspedes en tu hogar"} />
                <ButtonModal clase={"whiteButton"} texto={"Organiza una experiencia"} />
                <ButtonModal clase={"whiteButton"} texto={"Ayuda"} />
            </div>
        </ >
    )

}

export default ModalMenu;
