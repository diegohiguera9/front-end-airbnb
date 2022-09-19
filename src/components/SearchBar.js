import '../styles/components/SearchBar.scss';
import searchIcon from '../styles/icons/searchIcon.svg';

const SearchBar = (props)=>{
    return(
    <div className="header__search">
        <div className='header__search__button'>
            <div className="header__search__cualquier">
                {props.first}
            </div>
        </div>   
        <span></span>
        <div className='header__search__button'>
            <div className="header__search__semana">
            {props.second}
            </div>
        </div>
        <span></span>
        <div className='header__search__button'>
            <div className="header__search__cuantos" >
                {props.third}
            </div>
            <div className="header__searchIcon">
                <img src={searchIcon} alt="Search Icon" />
            </div>
        </div>
    </div>
    )
}

export default SearchBar;