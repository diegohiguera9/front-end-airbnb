import '../styles/components/NavBar.scss';
import globe from "../styles/icons/globe.svg";
import hamburger from "../styles/icons/hamburger.svg";
import account from "../styles/icons/account.svg";

import { Popover } from '@mantine/core';
import ModalMenu from "../components/ModalMenu";
const NavBar = () => {
    return (
        <div className="header__nav">
            <a href="" className="header__nav__button-greyHover">Hazte anfitrion</a>
            <button className="header__nav__button-language-greyHover">
                <img src={globe} alt="Globe" />
            </button>

            <Popover width="dropdown" position="bottom-end" radius="xl" shadow="none">
                <Popover.Target>
                    <button className="header__nav__button-account">
                        <img src={hamburger} alt="Hamburger" />
                        <img src={account} alt="Account" />
                    </button>
                </Popover.Target>
                <Popover.Dropdown>
                    <ModalMenu />
                </Popover.Dropdown>
            </Popover>



        </div>
    )
}

export default NavBar;