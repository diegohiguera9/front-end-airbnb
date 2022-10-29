import "../styles/components/HeaderHost.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Popover } from "@mantine/core";
import ButtonHeaderHome from "./ButtonHeaderHome";
import DropDownMenuHost from "./DropDownMenuHost";
import { Outlet } from "react-router-dom";
import { useJwt } from "react-jwt";
import { Navigate, useNavigate } from "react-router";

const HeaderHost = () => {
  const navigate = useNavigate()
  const { isExpired } = useJwt(localStorage.getItem("token"));

  const location = useLocation();
  const [selected, setSelected] = useState({
    0: location.pathname === "/hosting" ? true : false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);

  if (isExpired) {
    return <Navigate to="/" />;
  }
  const handleClick = (index) => {
    let keys = Object.keys(selected);
    keys.map((item) => {
      return setSelected((prev) => {
        return { ...prev, [item]: item === index ? true : false };
      });
    });
  };
  const text = ["Hoy",  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    navigate('/')
  };

  return (
    <>
      <div className="headerhost">
        <div>
          <Link to="/hosting" className="header__logo">
            <svg
              viewBox="0 0 1991.3 2143.2"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "30px", height: "32px" }}
            >
              <path
                d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z"
                fill="#FF585D"
              />
            </svg>
          </Link>
        </div>
        <div className="headerhost__menubar">
          {text.map((item, index) => {
            return (
              <button onClick={() => handleClick(`${index}`)} key={index}>
                <Link to="/hosting">
                  <ButtonHeaderHome
                    select={selected[index] ? "ButtonHeaderHome--closed" : ""}
                  >
                    {item}
                  </ButtonHeaderHome>
                </Link>
              </button>
            );
          })}
          <div>
            <Popover opened={opened} onChange={setOpened}>
              <Popover.Target>
                <button
                  onClick={() => {
                    setOpened((o) => !o);
                  }}
                >
                  <ButtonHeaderHome
                    menu={opened ? "ButtonHeaderHome--menu" : ""}
                  >
                    Menu
                  </ButtonHeaderHome>
                </button>
              </Popover.Target>
              <Popover.Dropdown>
                <DropDownMenuHost fun={handleClick} setOpened={setOpened} />
              </Popover.Dropdown>
            </Popover>
          </div>
        </div>
        <div className="roundbuttonHost">
          <Link to="/" className="roundbuttonHost__modo">
            Modo Viajero
          </Link>
          <div className="roundbuttonHost__each">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-bell"
              viewBox="0 0 16 16"
              style={{ width: "16", height: "16", fill: "currentColor" }}
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
          </div>
          <Popover 
          opened={opened2} 
          onChange={setOpened2}
          width={200}
          position='bottom-end'
          >
            <Popover.Target>
              <button className="roundbuttonHost__each" onClick={() => setOpened2((o) => !o)}>
                <img
                  // src={localStorage.getItem('img')}
                  src='https://res.cloudinary.com/dvljusehm/image/upload/v1666440516/top24/202011910389_1_exu8mx.jpg'
                  alt="userlogo"
                ></img>
              </button>
            </Popover.Target>
            <Popover.Dropdown>
              <div>
                <button className="logout__host" onClick={handleLogout}>Cerrar sesion</button>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default HeaderHost;
