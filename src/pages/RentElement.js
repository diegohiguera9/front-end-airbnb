import "../styles/pages/rentElement.scss";
import HeaderName1 from "../components/HeaderComps";
import HeaderSections1 from "../components/HeaderSections1";
import ImgContainer1 from "../components/ImgContainer1";
import General from "../components/General";
import StickyContainer from "../components/StickyContainer";
import RentReviews from "../components/RentReviews";
import Payment from "../components/Payment";
import Header from "../components/Header";
import HeaderTouh from "../components/HeaderTouch";
import RentMap from "../components/RentMap";




const Element = () => {
  
   
  const data = {
    location: 'Centro,Bogotá D.C.,Colombia',
    homeName:'Elemento 1',
    host: 'jhon',
    guest: 10,
    bedrooms: 10,
    beds:3,
    baths: 5,
    rating: 1.11,
    reviews: 170,
    available: '13 sept-10 oct',
    price: 1848368,
    img: [
        process.env.PUBLIC_URL + 'cardhome/1.webp',
        process.env.PUBLIC_URL + 'cardhome/2.webp',
        process.env.PUBLIC_URL + 'cardhome/3.webp',
        process.env.PUBLIC_URL + 'cardhome/4.webp',
        process.env.PUBLIC_URL +'cardhome/5.webp',
        process.env.PUBLIC_URL + 'cardhome/6.webp',
    ]
}
  return (
    <>
    <Header/>
    <HeaderTouh/>
    <main className="rentMain">
      <div className="rentElement">
        <div className="rentElementContainer">
          <HeaderName1 children={data.homeName} />
          <HeaderSections1
            rating={data.rating}
            reviews={`${data.reviews} Reviews`}
            location={data.location}
          />
          <ImgContainer1 imgs={data.img} />
          <div className="rentInfoContainer">
            <General
              host={data.host}
              guest={`${data.guest} guest`}
              bedrooms={`${data.bedrooms} bedrooms`}
              beds={`${data.beds} beds`}
              baths={`${data.baths} baths`}
              cancel={"8 october"}
            />
            <StickyContainer rating={data.rating} reviews={`${data.reviews} Reviews`} />
          </div>
          <hr className="hr1" />
          <RentReviews rating={data.rating} reviews={`${data.reviews} Reviews`} comments={data.comments} />
          <Payment/>
          <RentMap/>
          </div>
          
      </div>
    </main>
    </>
    
  );
};
export default Element;

//si realizo un componente para ser container RentElement, no funciona asignarle propiedades en sass.
