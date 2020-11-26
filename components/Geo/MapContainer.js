import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import config from "../../config";

function MapContainer({ google, onInfoWindowClose }) {
  const location = {
    address: "Pikacho Guest House",
    lat: 13.731081,
    lng: -89.270601,
  };

  const style = {
    position: "relative",
    width: 400,
    height: 400,
  };
  return (
    <Map style={style} google={google} zoom={15} initialCenter={location}>
      <Marker name={"Pikacho View Guest House"} position={location} />
      <InfoWindow onClose={onInfoWindowClose} visible>
        <div>
          <h1>Pikacho View Guest House</h1>
        </div>
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: config.GOOGLE_API_KEY,
})(MapContainer);
