import HostGradient from "../components/HostGradient";
import "../styles/pages/HostForm.scss";
import { useState, useRef } from "react";
import { Input, TransferList, NumberInput } from "@mantine/core";
import {
  IconMapPin,
  IconHome,
  IconFriends,
  IconBed,
  IconChevronDown,
} from "@tabler/icons";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import axios from "axios";

const center = { lat: 4.650176467537301, lng: -74.08958383984998 };
const libraries = ["places"];
// const center = { lat: 48.8584, lng: 2.294 };

const HostForm = () => {
  const homeLocation = useRef("");
  const [locationResult, setLocationResult] = useState({});
  const [locationCity, setLocationCity] = useState("");

  const homeType = useRef("");
  const homePrice = useRef("");
  const homeCap = useRef("");
  const homeRooms = useRef("");

  const [file, setFile] = useState(new DataTransfer());
  const [fileDataURL, setFileDataURL] = useState([]);
  const [dataTranser, setDataTransfer] = useState([
    [
      { value: "Piscina", label: "Piscina" },
      { value: "Jacuzzi", label: "Jacuzzi" },
      { value: "Terraza", label: "Terraza" },
      { value: "Parrilla", label: "Parrilla" },
      { value: "Fogata", label: "Fogata" },
      { value: "Mesa billar", label: "Mesa billar" },
      { value: "Chimenea", label: "Chimenea" },
      { value: "WiFi", label: "WiFi" },
      { value: "Tv", label: "Tv" },
      { value: "Cocina", label: "Cocina" },
      { value: "Lavadora", label: "Lavadora" },
      { value: "Estacionamiento", label: "Estacionamiento" },
      { value: "Aire Acondicionado", label: "Aire Acondicionado" },
    ],
    [],
  ]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_GOOGLE,
    libraries: libraries,
  });

  const [map, setMap] = useState(null);

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  async function getLocation() {
    try {
      if (homeLocation === "") {
        return;
      }

      // eslint-disable-next-line
      const geocoder = new google.maps.Geocoder();
      // eslint-disable-next-line
      const bounds = new google.maps.LatLngBounds(center);

      const GeocoderRequest = {
        address: homeLocation.current.value,
        bounds: bounds,
      };

      const { results } = await geocoder.geocode(GeocoderRequest);
      map.setCenter(results[0].geometry.location);
      // eslint-disable-next-line
      new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
      setLocationResult(results[0].geometry.location);
      setLocationCity(
        results[0].address_components[6].long_name + ' ' +
          results[0].address_components[5].long_name
      );      
    } catch (err) {
      console.log(err);
    }
  }

  const defaultBounds = {
    north: center.lat + 1,
    south: center.lat - 1,
    east: center.lng + 1,
    west: center.lng - 1,
  };

  const options = {
    bounds: defaultBounds,
    componentRestrictions: { country: "co" },
    // fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: false,
  };

  // eslint-disable-next-line
  new google.maps.places.Autocomplete(homeLocation.current, options);

  const handleChange = (event) => {
    const imageArray = Array.from(event.target.files).map((fil) => {
      file.items.add(fil);
      return URL.createObjectURL(fil);
    });

    setFileDataURL((prevImage) => prevImage.concat(imageArray));
    event.target.value = "";
  };

  const handleClcik = (image) => {
    setFileDataURL(
      fileDataURL.filter((item, index) => {
        if (item === image) {
          file.items.remove(index);
        }
        return item !== image;
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const amenities = dataTranser[1].map((item) => item.value);
    const data = new FormData();

    data.append("hometype", homeType.current.value);
    data.append("location", locationResult);
    data.append("city",locationCity)
    data.append("price", homePrice.current.value);
    data.append("capacity", homeCap.current.value);
    data.append("rooms", homeRooms.current.value);
    data.append("amenities", amenities);

    console.log([
      homeType.current.value,
      homePrice.current.value,
      homeCap.current.value,
      homeRooms.current.value,
      amenities,
      file.files,
    ]);

    const fileSend = file.files;

    for (let i = 0; i < fileSend.length; i++) {
      data.append(`file_${i}`, fileSend[i], fileSend[i].name);
    }

    await axios.post("http://localhost:8080", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer jdkaljsdiwdfdhksldjkl",
      },
    });

    setFile(new DataTransfer());
    setFileDataURL([]);
  };

  return (
    <div className="hostform">
      <div className="hostform__gradient">
        <HostGradient>Listo para convertirte en anfitrión?</HostGradient>
      </div>
      <form onSubmit={handleSubmit} className="hostform__form">
        <h1 className="hostform__h1">Sólo es necesario un par de pasos ...</h1>
        <label>
          1. En qué tipo de espacio brindaras tus servicios como anfitrión
        </label>
        <Input
          ref={homeType}
          placeholder="Escoge uno"
          className="hostform__auto"
          icon={<IconHome size={16} />}
          component="select"
          rightSection={<IconChevronDown size={14} stroke={1.5} />}
        >
          <option value="Aapartamento">Aapartamento</option>
          <option value="Casa">Casa</option>
          <option value="Vivienda anexa">Vivienda anexa</option>
          <option value="Alojamiento Unico">Alojamiento Unico</option>
          <option value="Hotel Boutique">Hotel Boutique</option>
        </Input>
        <div className="hostform__mapcontainer">
          <label htmlFor={homeLocation}>2. Donde se encuentra tu espacio</label>
          <div className="hostform__mapcontainer__control">
            <Input
              ref={homeLocation}
              type="text"
              placeholder="Ingresa tu ubicacion"
              icon={<IconMapPin size={16} />}
            />
            <button onClick={getLocation}>Buscar</button>
          </div>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(map) => setMap(map)}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
        <label>
          3. Cuanto quieres que sea el precio de tu espacio (moneda local)
        </label>
        <NumberInput
          ref={homePrice}
          label="Price"
          defaultValue={500000}
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value))
              ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : "$ "
          }
          className="hostform__setmargin"
          step={100000}
        />
        <label>4. Cuantas personas puedes albergar?</label>
        <NumberInput
          ref={homeCap}
          label="Capacidad de personas"
          description="Desde 1 hasta 16"
          placeholder="Capacidad"
          max={16}
          min={1}
          icon={<IconFriends size={16} />}
          className="hostform__setmargin"
        />
        <label>5. Cuantos cuartos tiene tu espacio?</label>
        <NumberInput
          ref={homeRooms}
          label="Cantidad de cuartos"
          description="Desde 1 hasta 16"
          placeholder="Cuartos"
          max={16}
          min={1}
          icon={<IconBed size={16} />}
          className="hostform__setmargin"
        />
        <div className="hostform__setmargin">
          6. Agrega las imagenes que coniseres representativas de tu espacio
        </div>
        <label htmlFor="file" className="hostform__label">
          + Agregar imagenes
          <input
            type="file"
            name="file"
            id="file"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="hostform__inputtext"
          />
        </label>
        <div className="hostform__imgprev">
          {fileDataURL &&
            fileDataURL.map((image, index) => {
              return (
                <div key={image} className="hostform__imgprev__card">
                  <img src={image} alt="previe" height="200"></img>
                  <button onClick={() => handleClcik(image)}>
                    Delete image
                  </button>
                </div>
              );
            })}
        </div>
        <div className="hostform__setmargin">
          7. Selecciona las comididades que ofrece tu espacio
        </div>
        <TransferList
          value={dataTranser}
          onChange={setDataTransfer}
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          titles={["Comodidades principales", "Comodidades ofrecidas"]}
          breakpoint="sm"
        />
        <button type="submit" className="hostform__submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default HostForm;
