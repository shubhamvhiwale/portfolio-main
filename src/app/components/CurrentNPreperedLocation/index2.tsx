import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";

// Define the custom icon
const locationIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MyLocation = ({ location }: any) => {
  const [position, setPosition] = useState<[number, number] | null>(null); // Use LatLngTuple
  const map = useMap();

  useEffect(() => {
    if (location) {
      setPosition(location);
      map.flyTo(location.position, 13); // Center map on the user's location
    } else {
      const indiaBounds: any = {
        southwest: [6.5546079, 68.1113787], // Southwest corner of India (Kerala)
        northeast: [35.6745457, 97.395561], // Northeast corner of India (Arunachal Pradesh)
      };
      const bounds = L.latLngBounds(
        indiaBounds.southwest,
        indiaBounds.northeast
      );
      map.fitBounds(bounds);
    }
  }, [map, location]);

  return (
    <Marker
      // title={location.name}
      position={location.position}
      icon={locationIcon}
    >
      <Popup>{location.name}</Popup>
      <Tooltip className="marker-tooltip">{location.name}</Tooltip>
    </Marker>
  );
};

const CurrentNPreperedLocation = () => {
  const [location, setLocation] = useState<{
    name: string;
    position: [number, number];
  } | null>(null);

  useEffect(() => {
    setLocation({
      name: "Pune, Maharashtra",
      position: [18.550985, 73.934982],
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="w-[95%] md:w-[80%]"
        style={{
          height: "80%",
          overflow: "scroll",
          scrollbarWidth: "none",
          borderRadius: "10px",
        }}
      >
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={30}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MyLocation location={location} />
        </MapContainer>
      </div>
    </div>
  );
};

export default CurrentNPreperedLocation;
