import '../styles/components/NavBar.scss';
import globe from "../styles/icons/globe.svg";
import hamburger from "../styles/icons/hamburger.svg";
import account from "../styles/icons/account.svg";

const NavBar = ()=>{
    return(
    <div className="header__nav">
        <a href="" className="header__nav__button-greyHover">Hazte anfitrion</a>
        <button	className="header__nav__button-language-greyHover">
            <img src={globe} alt="Globe" />					
        </button>
        <button className="header__nav__button-account">
            <img src={hamburger} alt="Hamburger" />
            <img src={account} alt="Account" />
        </button>
    </div>
    )
}

export default NavBar;