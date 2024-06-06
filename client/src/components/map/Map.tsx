import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import { ISSPosition } from "@/mocks/dataType";

const icon = L.icon({
  iconUrl: "/iss-icon.png",
  iconSize: [35, 35],
});

const Map = () => {
  const [position, setPosition] = useState<ISSPosition | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
      const data = await res.json();
      setPosition(data);
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border rounded w-full h-[80vh] ">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position && (
          <Marker
            position={[position.latitude, position.longitude]}
            icon={icon}
          >
            <Popup>
              ISS Current Position
              <br /> Latitude: {position.latitude}
              <br /> Longitude: {position.longitude}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
