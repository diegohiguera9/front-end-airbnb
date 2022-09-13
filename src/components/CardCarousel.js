import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import '../styles/components/CardCarousel.scss';


function CardCarousel(props) {

    // const data = [
    //     process.env.PUBLIC_URL + 'cardhome/1.webp',
    //     process.env.PUBLIC_URL + 'cardhome/2.webp',
    //     process.env.PUBLIC_URL + 'cardhome/3.webp',
    //     process.env.PUBLIC_URL + 'cardhome/4.webp',
    // ]

    const data = props.imagesCard

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

    return (
        <div className='container__main__CC'>
            <Carousel
                className='carousel__main'
                withControls={mobile ? false : true}
                breakpoints={[
                    { maxWidth: 'sm', slideGap: '15px' },
                ]}
                withIndicators
                styles={{
                    control: {
                        '&[data-inactive]': {
                            opacity: 0,
                            cursor: 'default',
                        },
                    },
                    indicator: {
                        width: 6,
                        height: 6,
                        borderRadius: '50%'
                      },
                }}
            >
                {data.map((item, index) => {
                    return (
                        <Carousel.Slide key={index} className='carousel__list__button__heart'>
                            <img src={item} alt="" />
                        </Carousel.Slide>
                    )
                })}
            </Carousel>
        </div >
    );
}

export default CardCarousel;