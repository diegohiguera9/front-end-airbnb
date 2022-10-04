import ButtonModal from './ButtonModal';
import '../styles/components/ModalMenu.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { flipMenu } from '../store/reducer/headerReducer';

const ModalMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="containerMenu">
        <ButtonModal
          setClick={() => {
            dispatch(flipMenu());
          }}
          clase={'whiteButton'}
          texto={'Regístrate'}
        />
        <ButtonModal
          setClick={() => {
            dispatch(flipMenu());
          }}
          clase={'whiteButton'}
          texto={'Inicia sesión'}
        />
        <hr />
        <ButtonModal
          clase={'whiteButton'}
          texto={'Recibe huéspedes en tu hogar'}
        />
        <ButtonModal clase={'whiteButton'} texto={'Organiza una experiencia'} />
        <ButtonModal clase={'whiteButton'} texto={'Ayuda'} />
      </div>
    </>
  );
};

export default ModalMenu;
