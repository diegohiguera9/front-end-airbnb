import "../styles/components/DropDownMenuHost.scss";
import { Link } from "react-router-dom";

const DropDownMenuHost = () => {
  const firstText = [
    "Anuncio",
    "Reservaciones",
    "Crea un nuevo anuncio",
    "Guias",
    "Historial de transacciones",
  ];

  return (
    <div className="DropDownMenuHost">
      {firstText.map((item, index) => {
        return <Link to='/hosting' key={index} className='DropDownMenuHost__Link'>{item}</Link>;
      })}
    </div>
  );
};

export default DropDownMenuHost;
