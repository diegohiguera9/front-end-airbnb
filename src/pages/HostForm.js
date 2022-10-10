import HostGradient from "../components/HostGradient";
import "../styles/pages/HostForm.scss";
import { useState, useRef } from "react";
import { Autocomplete, Input } from "@mantine/core";
import {
  IconMapPin,
  IconHome,
  IconCurrencyDollar,
  IconFriends,
  IconBed,
} from "@tabler/icons";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const center = { lat: 4.650176467537301, lng: -74.08958383984998 };
const libraries = ["places"];
// const center = { lat: 48.8584, lng: 2.294 };

const HostForm = () => {
  const [homeType, setHomeType] = useState("");
  const homeLocation = useRef("");
  const homePrice = useRef("");
  const homeCap = useRef("");
  const homeRooms = useRef("");

  const [username, setUsername] = useState("");
  const [file, setFile] = useState(new DataTransfer());
  const [fileDataURL, setFileDataURL] = useState([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: 'AIzaSyDADK25rjdH0W0WL0Kr35HJLTfOTG2z6Bk',
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
    console.log(file);
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
        <Autocomplete
          placeholder="Escoge uno"
          data={[
            "Aapartamento",
            "Casa",
            "Vivienda anexa",
            "Alojamiento Unico",
            "Hotel Boutique",
          ]}
          value={homeType}
          onChange={setHomeType}
          className="hostform__auto"
          icon={<IconHome size={16} />}
        />
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
        <Input
          ref={homePrice}
          type="number"
          placeholder="Ingresa tu precio"
          icon={<IconCurrencyDollar size={16} />}
          className='hostform__setmargin'
        />
        <label>4. Cuantas personas puedes albergar?</label>
        <Input
          ref={homeCap}
          type="number"
          placeholder="Ingresa capacidad"
          icon={<IconFriends size={16} />}
          className='hostform__setmargin'
        />
        <label>5. Cuantos cuartos tiene tu espacio?</label>
        <Input
          ref={homeRooms}
          type="number"
          placeholder="Ingresa capacidad"
          icon={<IconBed size={16} />}
          className='hostform__setmargin'
        />
        <div className='hostform__setmargin'>6. Agrega las imagenes que coniseres representativas de tu espacio</div>
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
              <div key={image} className='hostform__imgprev__card'>
                <img src={image} alt="previe" height="200"></img>
                <button onClick={() => handleClcik(image)}>Delete image</button>
              </div>
            );
          })}
      </div>
        <button type="submit" className="hostform__submit">Enviar</button>
      </form>
    </div>
  );
};

export default HostForm;
