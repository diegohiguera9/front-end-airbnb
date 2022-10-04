import '../styles/components/NavBar.scss';
import globe from '../styles/icons/globe.svg';
import hamburger from '../styles/icons/hamburger.svg';
import account from '../styles/icons/account.svg';
import { useState, useEffect } from 'react';
import { Popover } from '@mantine/core';
import { useSelector } from 'react-redux';
import { Modal } from '@mantine/core';
import ModalMenu from '../components/ModalMenu';
import ModalRegistro from '../components/ModalRegistro';
import ModalLogin from './ModalLogin';

const NavBar = () => {
  const [openedPop, setOpenedPop] = useState(false);
  const menuPopover = useSelector((state) => state.headerReducer.menuPopover);
  const [openedPop1, setOpenedPop1] = useState(false);
  const [regisOrLogin, setregisOrLogin] = useState('');

  useEffect(() => {
    setregisOrLogin(menuPopover);
    setOpenedPop1((o) => !o);
  }, [menuPopover]);

  return (
    <div className="header__nav">
      <button className="header__nav__button-greyHover">Hazte anfitrion</button>
      <button className="header__nav__button-language-greyHover">
        <img src={globe} alt="Globe" />
      </button>

      <Popover
        width="dropdown"
        position="bottom-end"
        radius="xl"
        shadow="none"
        opened={openedPop}
        onChange={setOpenedPop}
      >
        <Popover.Target>
          <button
            className="header__nav__button-account"
            onClick={() => setOpenedPop((o) => !o)}
          >
            <img src={hamburger} alt="Hamburger" />
            <img src={account} alt="Account" />
          </button>
        </Popover.Target>
        <Popover.Dropdown>
          <ModalMenu />
        </Popover.Dropdown>
      </Popover>


      {regisOrLogin === '1' ? (
        <Modal
          opened={openedPop1}
          onClose={() => setOpenedPop1(false)}
          title="Iniciar sesión"
          size="550px"
          overflow="inside"
          radius="xl"
          shadow="none"
        >
          <ModalLogin />
        </Modal>
      ) : regisOrLogin === '2' ? (
        <Modal
          opened={openedPop1}
          onClose={() => setOpenedPop1(false)}
          size="550px"
          overflow="outside"
          radius="xl"
          shadow="none"
        >
          <ModalRegistro />
        </Modal>
      ) : (
        <></>
      )}

    </div>
  );
};

export default NavBar;
