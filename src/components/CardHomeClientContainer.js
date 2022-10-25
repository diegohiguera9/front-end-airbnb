import '../styles/components/CardHomeContainer.scss';
import CardHomeClient from './CardHomeClient';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CardHomeClientContainer = () => {
  const [reservations, setReservations] = useState('');
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  const getReservations = async () => {
    try {
      const { data } = await axios.get(
        'https://airbnbclonetop24.herokuapp.com/reservations/showHost',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
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

  console.log(reservations);

  if (loading) {
    return <p>loading</p>;
  }
  return (
    <div className="CardHomeContainer">
      {reservations.length === 0 ? (
        <h1>
          No se encontraron reservas, que esperar para programar tu primer
          viaje!
        </h1>
      ) : (
        reservations.map((home, index) => {
          if (home.reservations.length > 0) {
            return home.reservations.map((item) => {
              return (
                <div key={index}>
                  <CardHomeClient
                    name={item.user.name}
                    date={item.createdAt}
                    img={item.user.profileimg}
                    huespedes={item.guests}
                    llegada={item.initialDdate}
                    salida={item.finalDate}
                    codigo={item._id}
                    price={item.price}
                    location={home.location.city}
                  />
                </div>
              );
            });
          }
        })
      )}
    </div>
  );
};

export default CardHomeClientContainer;
