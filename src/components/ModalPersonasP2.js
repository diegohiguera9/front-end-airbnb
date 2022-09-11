import "../styles/components/ModalPersonasP2.scss"
import ButtonModal from "./ButtonModal";
const ModalPersonasP2 = ({hidden="",cantidad}) => {

    return (
        <>
             <div className="part2">
                        <ButtonModal clase={`roundButton ${hidden}`} texto={"-"} />
                        <p className="cantidad">{cantidad}</p>
                        <ButtonModal clase={"roundButton"} texto={"+"} />
                    </div>
        </ >
    )

}

export default ModalPersonasP2;
