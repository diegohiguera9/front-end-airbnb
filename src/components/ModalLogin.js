import "../styles/components/ModalLogin.scss"
import ButtonImg from "./ButtonImg";
const ModalLogin = () => {

    return (
        <>
            <div className="containerLogin">

                <p>Iniciar sesión o registrate</p>
                <hr />
                <h1 >Te damos la bienvenida a Airbnb</h1>
                <div className="wrapper">
                    <span for="email">Correo electrónico</span>
                    <input className="loginEmail" id="email" type="email" placeHolder="Correo electrónico"></input>
                </div>
                <button className="aceptarButton"> Continúa </button>
                <p>o</p>
                <ButtonImg clase={"buttonLoginType facebook"} texto={"Continúa con Facebook"} />
                <ButtonImg clase={"buttonLoginType google"} texto={"Continúa con Google"} />
                <ButtonImg clase={"buttonLoginType apple"} texto={"Continúa con Apple"} />
                <ButtonImg clase={"buttonLoginType telefono"} texto={"Continúa con un teléfono"} />

            </div>
        </ >
    )

}

export default ModalLogin;
