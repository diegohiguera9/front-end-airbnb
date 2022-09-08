import '../styles/pages/Home.scss'
import FilterTypes from '../components/FilterTypes';
import CardMain from '../components/CardMain';
import ButtonMapa from '../components/ButtonMapa';
import Footer from '../components/Footer';
import FooterTouch from '../components/FooterToch';

const data = [
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: 'falta cuadrar esto'
    }
]

const Home = () => {
    return (
        <div>
            <FilterTypes />
            <div className='main'>
                {data.map((element) => {
                    return (
                        <div className='main__button'>
                            <CardMain location={element.location} qualy={element.qualy} distance={element.dist} available={element.available}
                                price={element.price} />
                        </div>
                    )
                })}
            </div>
            <ButtonMapa/>
            <Footer/>
            <FooterTouch/>
        </div>
    )
}

export default Home