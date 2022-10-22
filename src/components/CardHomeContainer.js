import "../styles/components/CardHomeContainer.scss";
import CardHomeHost from "./CardHomeHost";
import axios from "axios";
import { useState, useEffect } from "react";

const CardHomeContainer = () => {
  const [reservations, setReservations] = useState("");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const getReservations = async () => {
    try {
      const { data } = await axios.get(
        "https://airbnbclonetop24.herokuapp.com/reservations/showHost",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReservations(data.data.homes);
      setLoading(false);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getReservations();
    // eslint-disable-next-line
  }, []);

  // const data = [
  //   {
  //     name: "Ruben",
  //     fechas: "1-2 Oct",
  //     img: process.env.PUBLIC_URL + "cardhome/1.webp",
  //     huespedes: 16,
  //     llegada: "14 Oct 2022",
  //     salida: "17 Oct 2022",
  //     fecha: "25 Sept 2022",
  //     codigo: "HM22ASCE42",
  //   },
  //   {
  //     name: "Diego",
  //     fechas: "1-2 Oct",
  //     img: process.env.PUBLIC_URL + "cardhome/1.webp",
  //     huespedes: 16,
  //     llegada: "14 Oct 2022",
  //     salida: "17 Oct 2022",
  //     fecha: "25 Sept 2022",
  //     codigo: "HM22ASCE42",
  //   },
  //   {
  //     name: "John",
  //     fechas: "1-2 Oct",
  //     img: process.env.PUBLIC_URL + "cardhome/1.webp",
  //     huespedes: 16,
  //     llegada: "14 Oct 2022",
  //     salida: "17 Oct 2022",
  //     fecha: "25 Sept 2022",
  //     codigo: "HM22ASCE42",
  //   },
  // ];

  console.log(reservations);

  if (loading) {
    return <p>loading</p>;
  }
  return (
    <div className="CardHomeContainer">
      {reservations.length === 0 ? (
        <h1>No reservations found, get ready to be the greatest host</h1>
      ) : (
        reservations.map((item, index) => {
          if (item.reservations.length > 0) {
            return item.reservations.map(item=>{
              return (
                <div key={index}>
                  <CardHomeHost
                    name={item.user.name}
                    date={item.createdAt}
                    img={item.user.profileimg}
                    huespedes={item.guests.adults}
                    llegada={item.initialDdate}
                    salida={item.finalDate}
                    codigo={item._id}
                  />
                </div>
              );
            })
            
          }
        })
      )}
    </div>
  );
};

export default CardHomeContainer;
