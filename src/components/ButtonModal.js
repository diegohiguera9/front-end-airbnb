import "../styles/components/ButtonModal.scss"
const ButtonModal = ({texto,selected="",clase}) => {
    return (
        <button className={`${clase} ${selected}`} >
            {texto}      
        </button >
    )
}
export default ButtonModal;
