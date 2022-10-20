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
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";




const RentElement = () => {
  let params = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const {location, userId} = item

   
  
  useEffect(() => {
    axios
      .get(`https://airbnbclonetop24.herokuapp.com/homes/${params.id}`)
      .then((response) => {
        
        setItem(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return (
    <>
    <Header/>
    <HeaderTouh/>
    <main className="rentMain">
      <div className="rentElement">
      {loading ? (
          <p>Loading</p>
        ) : (
        <div className="rentElementContainer">
          <HeaderName1 children={location.city} />
          
          <HeaderSections1
            rating={item.totalScore}
            reviews={`${item.totalreviews} Reviews`}
            location={location.city}
          />
          <ImgContainer1 imgs={item.images} />
          <div className="rentInfoContainer">
            <General
            profileImg = {userId.profileimg}
              host={userId.name}
              guest={`${item.capacity} guest`}
              bedrooms={`${item.rooms} bedrooms`}
              beds={`${item.rooms} beds`}
              baths={`${item.rooms} baths`}
              cancel={"8 noviembre"}
            />
            <StickyContainer price ={item.price} rating={item.totalScore} reviews={`${item.totalreviews} Reviews`} />
          </div>
          <hr className="hr1" />
          <RentReviews item={item} rating={item.totalScore} reviews={`${item.totalreviews} Reviews`} comments={item.comments} />
          <Payment/>
          <RentMap/>

          </div>
  )}
      </div>
    </main>
    </>
    
  );
};
export default RentElement;

//si realizo un componente para ser container RentElement, no funciona asignarle propiedades en sass.
