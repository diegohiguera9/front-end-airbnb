import "../styles/components/CardHomeContainer.scss";
import CardHomeHost from "./CardHomeHost";
import axios from "axios";
import { useState, useEffect } from "react";

const CardHomeContainer = () => {
  const [reservations, setReservations] = useState("");
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
      setReservations(data.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    getReservations();
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

  return (
    <div className="CardHomeContainer">
      {reservations.length === 0 ? (
        <h1>No reservations found, get ready to be the greatest host</h1>

      ) : (
        reservations.map((item, index) => {
          return (
            <div key={index}>
              <CardHomeHost
                name={item.user.name}
                date={item.fechas}
                img={item.user.profileimg}
                huespedes={item.guests.adults}
                llegada={item.fechas}
                salida={item.fechas}
                codigo={item._id}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default CardHomeContainer;
