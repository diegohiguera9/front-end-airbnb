import { Input } from '@mantine/core';
import { IconMapPin } from '@tabler/icons';
import { useState, useRef } from 'react';
import GoogleAdressFilter from '../components/GoogleAdressFilter';
import { useDispatch } from 'react-redux';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { locate } from '../store/reducer/headerReducer';
const ModalLocationSearch = () => {
  const dispatch = useDispatch();
  const homeLocation = useRef('');
  const center = { lat: 4.650176467537301, lng: -74.08958383984998 };
  const libraries = ['places'];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_GOOGLE,
    libraries: libraries,
  });

  const [map, setMap] = useState(null);

  if (!isLoaded) {
    return <div>Loading</div>;
  }
  const defaultBounds = {
    north: center.lat + 1,
    south: center.lat - 1,
    east: center.lng + 1,
    west: center.lng - 1,
  };
  const options = {
    bounds: defaultBounds,
    componentRestrictions: { country: 'co' },
    // fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: false,
  };

  // eslint-disable-next-line
  new google.maps.places.Autocomplete(homeLocation.current, options);
  const test = () => {
    if (homeLocation) {
      dispatch(locate(homeLocation.current.value));
      console.log(homeLocation.current.value);
    }
  };
  return (
    <div className="hostform__mapcontainer__control">
      <Input
        ref={homeLocation}
        type="text"
        onChange={test()}
        placeholder="Ingresa tu ubicacion"
        icon={<IconMapPin size={16} />}
      />

      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '100', height: '100' }}
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
  );
};

export default ModalLocationSearch;
