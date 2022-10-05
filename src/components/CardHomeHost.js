import "../styles/components/CardHomeHost.scss";
import { Modal } from "@mantine/core";
import { useState } from "react";
import ModalCardHome from "./ModalCardHome";

const CardHomeHost = ({
  name,
  date,
  img,
  huespedes,
  llegada,
  salida,
  codigo,
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="CardHomeHost">
      <Modal opened={opened} onClose={() => setOpened(false)} overflow="inside" styles={{modal:{
        width:550,
        borderRadius:20
      }}}>
        <ModalCardHome
          name={name}
          date={date}
          img={img}
          huespedes={huespedes}
          llegada={llegada}
          salida={salida}
          codigo={codigo}
        />
      </Modal>
      <button onClick={() => setOpened(true)}>
        <div className="CardHomeHost__row">
          <div className="CardHomeHost__column">
            <span>{name}</span>
            <span>{date}</span>
          </div>
          <div className="CardHomeHost__row__img">
            <img src={img} alt="profile logo"></img>
          </div>
        </div>
      </button>
      <hr className="CardHomeHost__span"></hr>
      <div className="CardHomeHost__message">Mensaje</div>
    </div>
  );
};

export default CardHomeHost;
