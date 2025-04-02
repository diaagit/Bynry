import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ profile }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; 

  if (!profile || !profile.lat || !profile.lng) {
    return null;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "400px", height: "400px" }}
        center={{ lat: profile.lat, lng: profile.lng }}
        zoom={12}
      >
        <Marker position={{ lat: profile.lat, lng: profile.lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
