import '../styles/components/NavBar.scss';
import globe from '../styles/icons/globe.svg';
import hamburger from '../styles/icons/hamburger.svg';
import account from '../styles/icons/account.svg';
import { useState, useEffect } from 'react';
import { Popover } from '@mantine/core';
import ModalMenu from '../components/ModalMenu';
import { useSelector } from 'react-redux';
import ModalLogin from './ModalLogin';
import { Modal } from '@mantine/core';

const NavBar = () => {
  const [openedPop, setOpenedPop] = useState(false);
  const menuPopover = useSelector((state) => state.headerReducer.menuPopover);
  const [openedPop1, setOpenedPop1] = useState(false);
  useEffect(() => {
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
      <Modal
        opened={openedPop1}
        onClose={() => setOpenedPop1(false)}
        title="Iniciar sesión o registrarse"
        
        overflow="inside"
        radius="xl"
        shadow="none"
      >
        <ModalLogin></ModalLogin>
      </Modal>
    </div>
  );
};

export default NavBar;
