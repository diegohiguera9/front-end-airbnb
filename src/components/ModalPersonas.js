import "../styles/components/ModalPersonas.scss"
import ModalPersonasP1 from "./ModalPersonasP1";
import ModalPersonasP2 from "./ModalPersonasP2";

const ModalPersonas = () => {

    return (
        <>
            <div className="container">
                <div className="item">
                    <ModalPersonasP1 subTitulo={"Adultos"} info={"Edad: 13 años o mas"} />
                    <ModalPersonasP2 hidden={""} cantidad={"3"} />
                </div>

                <div className="item">
                    <ModalPersonasP1 subTitulo={"Niños"} info={"De 2 a 12 años"} />
                    <ModalPersonasP2 hidden={"hidden"} cantidad={"0"} />  </div>
                <div className="item">
                    <ModalPersonasP1 subTitulo={"Bebés"} info={"Menbos de 2 años"} />
                    <ModalPersonasP2 hidden={""} cantidad={"1"} />
                </div>
                <div className="item">
                    <ModalPersonasP1 subTitulo={"Mascotas"} info={"¿Traes a un animal de servicio?"} />
                    <ModalPersonasP2 hidden={"hidden"} cantidad={"0"} />
                </div>
            </div>

        </ >
    )

}

export default ModalPersonas;
