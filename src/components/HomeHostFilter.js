import "../styles/components/HomeHostFilter.scss"; 
import { useState } from "react";
import HomeHostFilterButton from "./HomeHostFilterButton";

const HomeHostFilter = () => {
  const quantity = [3, 1, 0, 0, 0];
  const text = [
    "Agendadas",
    "Reseñas pendientes",
    "Hara el checkout",
    "En curso",
    "Llegara pronto",
  ];

  const [selected, setSelected] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleClick = (index) => {
    console.log(index);
    let keys = Object.keys(selected);
    keys.map((item) => {
      return setSelected((prev) => {
        return { ...prev, [item]: item === index ? true : false };
      });
    });
  };

  return (
    <div className="HomeHostFilter">
      {quantity.map((item, index) => {
        return (
          <button key={index} onClick={() => handleClick(`${index}`)}>
            <HomeHostFilterButton
              select={selected[index] ? "HomeHostFilterButton--open" : ""}
            >{`${text[index]} (${item})`}</HomeHostFilterButton>
          </button>
        );
      })}
    </div>
  );
};

export default HomeHostFilter;
