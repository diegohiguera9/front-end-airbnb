import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react'
/*global google*/


  
  

const RentMap = () => {
    const containerStyle = {
        width: '100%',
        height: '450px'
      };
      
      const center = {
        lat: 4.655351022105508, lng: -74.10845345099511
      };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_GOOGLE
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                zoomControl: true,
                zoomControlOptions:{
                    position: google.maps.ControlPosition.TOP_RIGHT,
                },
                streetViewControl: true,
                streetViewControlOptions:{
                    position: google.maps.ControlPosition.RIGHT,
                },
                mapTypeControl: false,
                fullscreenControl:false,
              }}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <Marker position={center} />
          </GoogleMap>
      ) : <></>
}

export default RentMap