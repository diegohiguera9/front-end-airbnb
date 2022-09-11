import "../styles/components/ButtonRound.scss"
const ButtonRound = ({texto,selected=""}) => {
    
    return (
        <button className={`dateButton ${selected}`} >
            {texto}      
        </button >
    )

}

export default ButtonRound;
