import ButtonModal from './ButtonModal';
import '../styles/components/ModalMenu.scss';
import { useDispatch } from 'react-redux';
import { flipMenu } from '../store/reducer/headerReducer';

const ModalMenuLogged = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(flipMenu('0'));
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
  };
  return (
    <>
      <div className="containerMenu">
        <ButtonModal clase={'whiteButton'} texto={'Viajes'} />
        <hr />
        <ButtonModal
          setClick={() => {
            handleLogout();
          }}
          clase={'whiteButton'}
          texto={'Cerrar sesión'}
        />
      </div>
    </>
  );
};

export default ModalMenuLogged;
