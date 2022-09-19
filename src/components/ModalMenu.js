import ButtonModal from "./ButtonModal";
import "../styles/components/ModalMenu.scss"
import { Modal } from '@mantine/core';
import { useState } from "react";
import ModalLogin from "./ModalLogin";

const ModalMenu = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>

            <div class="containerMenu">
                <ButtonModal click={opened} setClick={() => { setOpened(true) }} clase={"whiteButton"} texto={"Regístrate"} />
                <ButtonModal click={opened} setClick={() => { setOpened(true) }} clase={"whiteButton"} texto={"Inicia sesión"} />
                <hr />
                <ButtonModal clase={"whiteButton"} texto={"Recibe huéspedes en tu hogar"} />
                <ButtonModal clase={"whiteButton"} texto={"Organiza una experiencia"} />
                <ButtonModal clase={"whiteButton"} texto={"Ayuda"} />
            </div>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Iniciar sesión o registrarse"
                size="550px"
                overflow="inside"
                radius="xl"
                shadow="none"
            >
                <ModalLogin></ModalLogin>
            </Modal>
        </ >
    )

}

export default ModalMenu;
