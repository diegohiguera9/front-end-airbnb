import '../styles/pages/rentElement.scss'
import HeaderName1 from "../components/HeaderComps";
import HeaderSections1 from "../components/HeaderSections1";
import ImgContainer1 from "../components/ImgContainer1";
import General from "../components/General";
import StickyContainer from "../components/StickyContainer";
import RentReviews from '../components/RentReviews';



const Element = () => {
  return (
    <main className="rentMain">
      <div className="rentElement">
      <div className="rentElementContainer">
        <HeaderName1 children={"Elemento 1"} />
        <HeaderSections1 rating={"1.11"} reviews={"10 Reviews"} location={"Centro,Bogotá D.C.,Colombia"}/>
        <ImgContainer1 children={"1"}/>
        <div className="rentInfoContainer">
            <General host={"Jhon"} guest={"10 guest"} bedrooms={"10 bedrooms"} beds={"10 beds"} baths={"10 baths"} cancel={"8 Agust"}/>
            <StickyContainer rating={"1.11"} reviews={"10 Reviews"}/>
        </div>
        <hr className="hr1" />
        <div>
<RentReviews/>
        </div>
      </div>
    </div>
    </main>
    
    
  );
};
export default Element;

//si realizo un componente para ser container RentElement, no funciona asignarle propiedades en sass.
