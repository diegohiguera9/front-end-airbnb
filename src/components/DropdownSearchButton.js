import '../styles/components/DropdownSearchButton.scss'


const DropdownSearchButton = ({ text, styles, icon, iconText,clase }) => {
    
    return (
        <div className={`searchbar__pop__button ${clase}`} style={styles}>
            <div className='searchbar__pop__button__colum'>
                <span className="searchbar__pop__bold">{text[0]}</span>
                <span className="searchbar__pop__light">{text[1]}</span>
            </div>
            {icon ? (
                <div className='searchbar__pop__button__buscar'>
                    <span>{icon}</span>
                    <span>{iconText}</span>
                </div>
            ):null
            }

        </div>
    )
}

export default DropdownSearchButton;