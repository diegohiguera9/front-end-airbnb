import '../styles/components/DropdownSearch.scss'
import DropdownSearchButton from './DropdownSearchButton'
import { Popover } from '@mantine/core';
import { useState } from 'react';
import ModalCalendarSearch from "./ModalCalendarSearch";
import ModalPersonas from "./ModalPersonas";
import ModalLocation from "./ModalLocation";

const DropdownSearch = () => {
    const [clase, setClase] = useState({
        0: false,
        1: false,
        2: false,
        3: false
    })
    const handleClick = (index) => {
        let keys = Object.keys(clase)
        keys.map((item) => {
            return (
                setClase(prev => {
                    return (
                        { ...prev, [item]: item === index ? true : false }
                    )
                })
            )
        })
    }
    return (
        <div className='wraper__searchbar__pop'>
            <div className="searchbar__pop">
                <Popover
                    width={'100px'}
                    opened={clase[0]}
                >
                    <Popover.Target>
                        <button onClick={() => handleClick('0')}>
                            <DropdownSearchButton text={['Donde', 'Explora destinos']} styles={{ width: '300px', paddingLeft: '20px' }} clase={clase[0] ? 'selected' : ''} />

                        </button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <ModalLocation></ModalLocation>
                    </Popover.Dropdown>
                </Popover>

                <Popover
                    width={'100px'}
                    opened={clase[1]}
                >
                    <Popover.Target>
                        <button onClick={() => handleClick('1')}>
                            <DropdownSearchButton text={['Llegada', 'fecha']} styles={{ width: '100px', }} clase={clase[1] ? 'selected' : ''} />
                        </button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <ModalCalendarSearch></ModalCalendarSearch>
                    </Popover.Dropdown>
                </Popover>

                <Popover
                    width={'100px'}
                    opened={clase[2]}
                >
                    <Popover.Target>
                        <button onClick={() => handleClick('2')}>
                            <DropdownSearchButton text={['Salida', 'fecha']} styles={{ width: '100px', }} clase={clase[2] ? 'selected' : ''} />
                        </button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <ModalCalendarSearch></ModalCalendarSearch>
                    </Popover.Dropdown>
                </Popover>

                <Popover
                    width="dropdown"
                    position="bottom-end"
                    radius="xl"
                    shadow="none"
                    opened={clase[3]}
                >
                    <Popover.Target>
                        <button onClick={() => handleClick('3')}>
                            <DropdownSearchButton text={['Quien', 'cuantos']}
                                icon={<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '4', overflow: 'visible' }}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>}
                                iconText={'Buscar'}
                                styles={{ columnGap: '80px' }}
                                clase={clase[3] ? 'selected' : ''}
                            />
                        </button>
                    </Popover.Target>
                    <Popover.Dropdown>
                        <ModalPersonas></ModalPersonas>
                    </Popover.Dropdown>
                </Popover>



            </div>
        </div>
    )
}

export default DropdownSearch;