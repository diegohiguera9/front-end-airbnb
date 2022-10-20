import "../styles/pages/Home.scss";
import CardMain from "../components/CardMain";
import ButtonMapa from "../components/ButtonMapa";
import Footer from "../components/Footer";
import FooterTouch from "../components/FooterToch";
import Header from "../components/Header";
import HeaderTouh from "../components/HeaderTouch";
import FilterCarousel from "../components/FilterCarousel";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://airbnbclonetop24.herokuapp.com/homes")
      .then((response) => {
        
        setItems(response.data.data);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <HeaderTouh />
      <FilterCarousel />
      <div className="main">
        {loading ? (
          <p>Loading</p>
        ) : (
          items.map((item) => {
            return (
              <div className="main__button" key={item._id}>
                <CardMain item={item} />
              </div>
            );
          })
        )}
      </div>
      <ButtonMapa />
      <Footer />
      <FooterTouch />
    </div>
  );
};

export default Home;
