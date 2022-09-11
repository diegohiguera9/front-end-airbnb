import "../styles/components/ButtonRound2.scss"
const ButtonRound2 = ({texto,selected=""}) => {
    
    return (
        <button className={`dateButtonType ${selected}`} >
            {texto}      
        </button >
    )

}

export default ButtonRound2;
