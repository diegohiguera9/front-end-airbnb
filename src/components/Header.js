import '../styles/components/Header.scss';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import logo from '../styles/icons/logo.svg';
import soloLogo from '../styles/icons/airbnb-1.svg';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { Popover } from '@mantine/core';
import '../styles/components/popover.scss'
import DropdownSearch from './DropdownSearch';
import ReplaceSearchPop from './ReplaceSearchPop';


const Header = () => {
    const [opened, setOpened] = useState(false);
    const classPopwraper = opened ? 'pop__wraper__dark' : 'pop__wraper'
    return (
        <div>
            <header className="header">
                <Link to='/' className="header__logo">
                    <img src={logo} alt="logo" />
                    <img src={soloLogo} alt="logo" />
                </Link>
                <Popover
                    width={'100%'}
                    opened={opened}
                    onChange={setOpened}
                    transition="scale-y"
                >
                    <Popover.Target>
                        <button onClick={() => setOpened((o) => !o)}
                            className='toggle'
                            style={{ visibility: opened ? 'hidden' : 'visible',width:opened?'0px':'auto' }}
                        >
                            <SearchBar first='En cualquier lugar del mundo' second='Cualquier semana' third='Cuantos?' />
                        </button>
                    </Popover.Target>

                    <Popover.Dropdown>
                        <DropdownSearch />
                    </Popover.Dropdown>
                </Popover>
                <div style={{ display: opened ? 'flex' : 'none' }}>
                    <ReplaceSearchPop />
                </div>
                <NavBar />

            </header>
            {/* <section>
                <Outlet/>
            </section>           */}
        </div>
    )
}

export default Header