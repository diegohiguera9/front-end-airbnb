import "../styles/components/DropDownMenuHost.scss";
import { Link } from "react-router-dom";

const DropDownMenuHost = ({fun}) => {
  const firstText = [
    "Anuncio",
    "Reservaciones",
    "Crea un nuevo anuncio",
    "Guias",
    "Historial de transacciones",
  ];

  const link = [
    "/hosting/listing",
    "/hosting",
    "/hosting",
    "/hosting",
    "/hosting",
  ];

  return (
    <div className="DropDownMenuHost">
      {firstText.map((item, index) => {
        return (
            <Link to={link[index]} className='DropDownMenuHost__Link' key={index}>{item}</Link>
          ) 
      })}
    </div>
  );
};

export default DropDownMenuHost;
