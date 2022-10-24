import "../styles/components/imgModal.scss";
import "../styles//components/reserveModal.scss";
import "../styles/components/stickyContainer.scss";

import { useJwt } from "react-jwt";
import ModalLogin from "./ModalLogin";
import Payment from "./Payment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";

const ReserveModal = ({ setOpenReserve, item,dates, guest }) => {
  
  let params = useParams();
  const token = localStorage.getItem("token");
  const { isExpired } = useJwt(token);
  const [expired, setExpired] = useState(true);
  const countPeople = useSelector((state) => state.peopleReducer.countPeople);
  const datesRent = useSelector((state) => state.calendarReducer.dates);
  const nights = useSelector((state)=> state.calendarReducer.nights)
  const price = Intl.NumberFormat('de-DE').format(item.price)
  const total1 = item.price * nights;
  const total1format = Intl.NumberFormat('de-DE').format(total1);
  const serviceFee = 43000;
  const serviceFormat = Intl.NumberFormat('de-DE').format(serviceFee);
  const cleaningFee = 30000;
  const cleaningFormat= Intl.NumberFormat('de-DE').format(cleaningFee);
  const invoice =  localStorage.getItem('email') + Math.floor(Math.random())
  const totalReserve = total1 +serviceFee +cleaningFee
  const totalReserveFormat = Intl.NumberFormat('de-DE').format(totalReserve);
  const discount = totalReserve - (totalReserve * 0.99)
  const discountFormat = Intl.NumberFormat('de-DE').format(discount);
  
  const {location, userId} = item

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const reserve = {
        date: [datesRent[0].toString(), datesRent[1].toString()],
        price: discount,
        guests: {
          adults:countPeople.adults,
          childs: countPeople.children,
          babys: countPeople.babies,
          prependListener: countPeople.pets

        },
        homeId: params.id
      }

      console.log('reserva', reserve)
      
      const res = await axios.post(
        "https://airbnbclonetop24.herokuapp.com/reservations/create",
        reserve,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);

    } catch (err) {
      alert("Something went wrong, please review your information");
      console.log(err)
    }
  };


  useEffect(() => {
    setExpired(isExpired);
  }, [expired]);
  return (
    <div className="modalContainer">
      <div className="headerSections">
        <div className="rentSection">
          <button
            className="descriptionBtn"
            onClick={() => setOpenReserve(false)}
          >
            <svg
              className="descSvg"
              viewBox="0 0 18 18"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="modalReserveContainer">
        {expired ? (
          <ModalLogin setExpired={setExpired} />
        ) : (
          <form onSubmit={handleSubmit} className="reserveContainer">
            <div className="title">
              <h1>Confirmar y pagar</h1>
            </div>
            <div className="subTitle">
              <h2>Tu viaje</h2>
            </div>
            <div className="dates">
              <div className="flexContainer"><span>Fechas</span>
              <span>{`${nights} noches`}</span>
              </div>
              
              <div className="flexContainer">
                <span>{`${dates[0]}`}</span>
                <span>a</span>
                <span>{`${dates[1]}`}</span>

              </div>

            </div>
            
            <div className="guests flexContainer">
              <span>Huespedes</span>
              <div className="guestsFlex">
                <span>{`${guest}`}</span>
                
              </div>

            </div>
            
            <div className="">
              <div className="home flexContainer">
              <span>Lugar</span>
              <div className="homeName">
                <span>{`${location.city}`}</span>
              </div>  
              </div>
              
              <hr className="hr1" />
              <div className="totals">
              <div className="section1">
                <div className="values">
                  <button className="valuesBtn">
                    <div className="nightValues">
                      <u>{`$${price} COP x ${nights} noches`}</u>
                    </div>
                  </button>
                  <span className="valueResult">{`$${total1format} COP`}</span>
                </div>
                <div className="values">
                  <button className="valuesBtn">
                    <div className="nightValues">
                      <u>Tarifa de limpieza</u>
                    </div>
                  </button>
                  <span className="valueResult">{`$${cleaningFormat} COP`}</span>
                </div>
                <div className="values">
                  <button className="valuesBtn">
                    <div className="nightValues">
                      <u>Comisión por servicio</u>
                    </div>
                  </button>
                  <span className="valueResult">{`$${serviceFormat} COP`}</span>
                </div>
              </div>
              <hr className="hr1" />
              <div className="section2">
                <div className="totaltext">Total antes de impuestos</div>
                <span className="total">{`$${totalReserveFormat} COP`}</span>
              </div>
              <div className="section2 title">
                <div className="totaltext">Total con el 99% de descuento</div>
                <span className="total">{`$${discountFormat} COP`}</span>
              </div>
            </div>
            </div>

            <div className="reserver">
              <Payment className={"reserveBtn"} invoice ={invoice} price={discount} name= {location.city} />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReserveModal;
