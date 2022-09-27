import '../styles/components/ModalCardHome.scss'

const ModalCardHome = (props)=>{
    const text = ['Nombre','Fecha','Img','Huespedes','Llegada','Salida','Codigo']
    return(
        <div className='ModalCardHome'>
            <h1>Detalles de la reservacion</h1>
            <hr></hr>
            <div className='ModalCardHome__row'>
                <div className='ModalCardHome__row__img'>
                <img src={props.img} alt="profile logo"></img>
                </div>
                <div className='ModalCardHome__column'>
                    <span className='ModalCardHome__column__bold'>{props.name}</span>
                    <span>Titulo home</span>
                    <span>{props.date}</span>
                    <span>#Huespedes · Valor</span>
                </div>
            </div>
            <hr className='ModalCardHome__hr__middle'></hr>
            <h2>Mas detalles</h2>
            {Object.keys(props).map((item,index)=>{
                return(item === 'img'?<></>:(
                    <div className='ModalCardHome__details' key={index}>
                        <span className='ModalCardHome__details__bold'>{text[index]}</span>
                        <span className='ModalCardHome__details__light'>{props[item]}</span>
                        <span className='ModalCardHome__details__line'></span>
                    </div>
                )
                )
            })}
        </div>
    )
}

export default ModalCardHome;