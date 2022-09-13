import '../styles/pages/Home.scss'
import FilterTypes from '../components/FilterTypes';
import CardMain from '../components/CardMain';
import ButtonMapa from '../components/ButtonMapa';
import Footer from '../components/Footer';
import FooterTouch from '../components/FooterToch';
import Header from '../components/Header';
import HeaderTouh from '../components/HeaderTouch';
import FilterCarousel from '../components/FilterCarousel';


const data = [
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/1.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/4.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/5.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/6.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/7.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/8.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/9.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/10.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/11.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
    {
        location: 'Costa Rica',
        qualy: 4.87,
        dist: 1262,
        available: '13 sept-10 oct',
        price: 1848368,
        img: [
            process.env.PUBLIC_URL + 'cardhome/12.webp',
            process.env.PUBLIC_URL + 'cardhome/2.webp',
            process.env.PUBLIC_URL + 'cardhome/3.webp',
            process.env.PUBLIC_URL + 'cardhome/4.webp',
        ]
    },
]

const Home = () => {
    return (
        <div>
            <Header/>
            <HeaderTouh/>
            <FilterCarousel/>
            <div className='main'>
                {data.map((element,index) => {
                    return (
                        <div className='main__button' key={index}>
                            <CardMain location={element.location} qualy={element.qualy} distance={element.dist} available={element.available}
                                price={element.price} images={element.img}/>
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