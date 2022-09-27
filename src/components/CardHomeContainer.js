import "../styles/components/CardHomeContainer.scss";
import CardHomeHost from "./CardHomeHost";

const CardHomeContainer = () => {
  const data = [
    {
      name: "Ruben",
      fechas: "1-2 Oct",
      img: process.env.PUBLIC_URL + "cardhome/1.webp",
      huespedes: 16,
      llegada: "14 Oct 2022",
      salida: "17 Oct 2022",
      fecha: "25 Sept 2022",
      codigo: "HM22ASCE42",
    },
    {
      name: "Diego",
      fechas: "1-2 Oct",
      img: process.env.PUBLIC_URL + "cardhome/1.webp",
      huespedes: 16,
      llegada: "14 Oct 2022",
      salida: "17 Oct 2022",
      fecha: "25 Sept 2022",
      codigo: "HM22ASCE42",
    },
    {
      name: "John",
      fechas: "1-2 Oct",
      img: process.env.PUBLIC_URL + "cardhome/1.webp",
      huespedes: 16,
      llegada: "14 Oct 2022",
      salida: "17 Oct 2022",
      fecha: "25 Sept 2022",
      codigo: "HM22ASCE42",
    },
  ];
  return (
    <div className="CardHomeContainer">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <CardHomeHost
              name={item.name}
              date={item.fechas}
              img={item.img}
              huespedes={item.huespedes}
              llegada={item.llegada}
              salida={item.salida}
              codigo={item.codigo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardHomeContainer;
