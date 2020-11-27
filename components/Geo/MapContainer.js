import { useState } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import config from "../../config";
console.log("config.GOOGLE_API_KEY", config.GOOGLE_API_KEY);

function MapContainer({ google }) {
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const location = {
    address: "Pikacho Guest House",
    lat: 13.731081,
    lng: -89.270601,
  };
  const containerStyle = {
    height: "100%",
    position: "relative",
    width: "100%",
  };

  const style = {
    position: "relative",
    width: 400,
    height: 400,
    padding: 5,
  };

  const onMarkerClick = (props, marker) => {
    console.log("props", props);
    console.log("marker", marker);
    setActiveMarker(marker);
    setSelectedPlace(props);
    setShowInfoWindow(true);
  };

  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowInfoWindow(false);
  };

  return (
    <Map
      containerStyle={containerStyle}
      style={style}
      google={google}
      zoom={15}
      initialCenter={location}
    >
      <Marker
        name={"Pikacho View Guest House"}
        position={location}
        onClick={onMarkerClick}
      />
      <InfoWindow
        marker={activeMarker}
        onClose={onInfoWindowClose}
        visible={showInfoWindow}
      >
        <h3>{selectedPlace.name}</h3>
        <a
          href={`https://www.google.com/maps/@${location.lat},${location.lng},15z`}
        >
          See in Google Maps
        </a>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: config.GOOGLE_API_KEY,
})(MapContainer);
