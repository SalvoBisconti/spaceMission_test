import React from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "../../assets/issdaylight.svg";
import icon1 from "../../assets/isseclipsed.svg";

const ISSMarkerdaylight = L.icon({
  iconUrl: icon,
  iconSize: [45, 45],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

const ISSMarkereclipsed = L.icon({
  iconUrl: icon1,
  iconSize: [45, 45],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

const Map = () => {
  const [issPosition, setISSPosition] = React.useState({ lat: 0, lng: 0 });
  const [issVisibility, setISSVisibility] = React.useState("daylight");

  React.useEffect(() => {
    const getISSPosition = async () => {
      try {
        const response = await fetch(
          "https://api.wheretheiss.at/v1/satellites/25544"
        );
        const data = await response.json();
        setISSPosition({ lat: data.latitude, lng: data.longitude });
        setISSVisibility(data.visibility);
      } catch (error) {
        console.error("Errore nel recupero della posizione dell'ISS:", error);
      }
    };
    getISSPosition();
    const interval = setInterval(getISSPosition, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToISSPosition = () => {
    mapRef.current?.setView(issPosition, 3);
  };

  const mapRef = React.useRef<any>();

  const ISSPositionMarker = () => {
    const map = useMap();
    map.setView(issPosition, map.getZoom());
    return null;
  };

  return (
    <section className="">
      <MapContainer
        className=""
        center={[0, 0]}
        zoom={3}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          accessToken={process.env.REACT_APP_TOKEN_KEY}
          id="mapbox/navigation-night-v1"
        />
        <Marker
          position={issPosition}
          icon={
            issVisibility === "daylight" ? ISSMarkerdaylight : ISSMarkereclipsed
          }
        >
          <Popup>
            <h2>ISS</h2>
            <p>Latitude: {issPosition.lat}</p>
            <p>Longitude: {issPosition.lng}</p>
            <p>Visibility: {issVisibility === "daylight" ? "Day" : "Night"}</p>
          </Popup>
        </Marker>
        <ISSPositionMarker />
      </MapContainer>
      <div className="">
        <button className="" onClick={goToISSPosition}>
          Center on ISS
        </button>
      </div>
    </section>
  );
};

export default Map;
