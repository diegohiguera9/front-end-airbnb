import "../styles/components/ModalPersonasP2.scss"
import ButtonModal from "./ButtonModal";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../store/reducer/peopleReducer";





const ModalPersonasP2 = ({count,who}) => {
    const dispatch = useDispatch();
    return (
        <>
             <div className="part2">
                        { ((count===0)||(count===1&&who==="adults"))?(
                             <ButtonModal notAble={true} clase={`roundButton `} texto={"-"} />
                        ):(
                        <ButtonModal  setClick={()=>{dispatch(decrement(count,who))}} notAble={false} clase={`roundButton `} texto={"-"} />
                        )
                        }
                        <p className="cantidad">{`${count}`}</p>
                        
                        <ButtonModal setClick={()=>{dispatch(increment(count,who))}} clase={"roundButton"} texto={"+"} />
                    </div>
        </ >
    )

}

export default ModalPersonasP2;
