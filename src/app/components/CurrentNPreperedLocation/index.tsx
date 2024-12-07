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
import "./index.css";
import Mapmark1 from "@/app/assets/imgs/mapmark1.gif";
import Mapmark2 from "../../assets/imgs/mapmark2.gif";

// Define the custom icon
const locationIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MyLocation = ({ location, locations }: any) => {
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

  if (!location) {
    return position
      ? locations.map((location: any, index: number) => (
          <Marker
            // title={location.name}
            key={index}
            position={location.position}
            icon={locationIcon}
          >
            <Popup>{location.name}</Popup>
            <Tooltip className="marker-tooltip">{location.name}</Tooltip>
          </Marker>
        ))
      : null;
  } else {
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
  }
};

const CurrentNPreperedLocation = () => {
  const [location, setLocation] = useState<{
    name: string;
    position: [number, number];
  } | null>(null);
  const [locations, setLocations] = useState<any>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

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
      //   className="flex justify-center items-center"
    >
      <div className="w-[80%] flex justify-between pb-2">
        <div>&#x2758;</div>
        <button
          className={
            selectedLocation === "currentLocation" ? "text-blue-600" : ""
          }
          onClick={() => {
            setLocation({
              name: "Pune, Maharashtra",
              position: [18.550985, 73.934982],
            });
            setLocations([]);
            setSelectedLocation("currentLocation");
          }}
        >
          Current Location
        </button>
        <div>&#x2758;</div>
        <button
          className={
            selectedLocation === "currentCompany" ? "text-blue-600" : ""
          }
          onClick={() => {
            setLocation({
              name: "Senwell Group private limited, Gera Imperium, Kharadi, Pune",
              position: [18.556774, 73.955024],
            });
            setLocations([]);
            setSelectedLocation("currentCompany");
          }}
        >
          Current Company
        </button>
        <div>&#x2758;</div>
        <button
          className={selectedLocation === "born&Grown" ? "text-blue-600" : ""}
          onClick={() => {
            setLocation({
              name: "\u2003\u2003Aurangabad, Maharashtra",
              position: [19.901054, 75.352478],
            });
            setLocations([]);
            setSelectedLocation("born&Grown");
          }}
        >
          Born & Grown
        </button>
        <div>&#x2758;</div>
        <button
          className={
            selectedLocation === "preperedLocation" ? "text-blue-600" : ""
          }
          onClick={() => {
            setLocation(null);
            setLocations([
              { id: 1, name: "New Delhi", position: [28.6139, 77.209] },
              { id: 2, name: "Mumbai", position: [19.076, 72.8777] },
              { id: 3, name: "Bengaluru", position: [12.9716, 77.5946] },
              { id: 5, name: "Chennai", position: [13.0827, 80.2707] },
            ]);
            setSelectedLocation("preperedLocation");
          }}
        >
          Prepered Location
        </button>
        <div>&#x2758;</div>
      </div>
      <div
        style={{
          width: "80%",
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
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MyLocation location={location} locations={locations} />
        </MapContainer>
      </div>
    </div>
  );
};

export default CurrentNPreperedLocation;
