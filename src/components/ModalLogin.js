import '../styles/components/ModalLogin.scss';
import ButtonImg from './ButtonImg';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { flipMenu } from '../store/reducer/headerReducer';
const ModalLogin = () => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail === '' && userPassword === '') {
      alert('Por favor llene el formulario antes de continuar');
    } else {
      try {
        const user = {
          email: userEmail,
          password: userPassword,
        };
        const { data } = await axios.post(
          'http://localhost:8080/user/singin',
          user,
        );

        localStorage.setItem('token', data.data.token);
        //  cookies.set('tokenCookie', data.data.token);
        localStorage.setItem('email', data.data.email);
        dispatch(flipMenu(''));

        /* const dataUser = await axios.get('http://localhost:8080/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setInfoUser({
          name: dataUser.data.name,
          city: dataUser.data.city,
          age: dataUser.data.age,
        });*/
      } catch (err) {
        //console.log(err.response.status);
        err.response.status === 400
          ? alert('Usuario o Contraseña errada.')
          : alert('Ups! ocurrió algo en el login');
      }
    }
  };

  return (
    <>
      <div className="containerLogin">
        <form onSubmit={handleSubmit}>
          <p>Iniciar sesión o registrate</p>
          <hr />
          <h1>Te damos la bienvenida a Airbnb</h1>
          <div className="wrapper">
            <span htmlFor="email">Correo electrónico</span>
            <input
              className="loginEmail"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              id="email"
              type="email"
              placeholder="Correo electrónico"
            ></input>
          </div>
          <div className="wrapper">
            <span htmlFor="password">Contraseña</span>
            <input
              className="loginEmail"
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              id="password"
              type="password"
              placeholder=""
            ></input>
          </div>
          <button className="aceptarButton"> Continúa </button>
          <div className="ButtonsLogin">
            <ButtonImg
              clase={'buttonLoginType facebook'}
              texto={'Continúa con Facebook'}
            />
            <ButtonImg
              clase={'buttonLoginType google'}
              texto={'Continúa con Google'}
            />
            <ButtonImg
              clase={'buttonLoginType apple'}
              texto={'Continúa con Apple'}
            />
            <ButtonImg
              clase={'buttonLoginType telefono'}
              texto={'Continúa con un teléfono'}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalLogin;
