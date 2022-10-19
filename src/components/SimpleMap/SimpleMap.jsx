import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '970px',
  height: '970px',
  left: '10%',
  top: '-150px',
  borderRadius: '50%',
  position: 'reletive',
};

const center = {
  lat: 40.7,
  lng: -73.9,
};

function SimpleMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBMoSyFipvUBQ43KHyCzVOKShiSJ6SME74',
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default SimpleMap;
