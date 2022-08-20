import React from "react";
import axios from "axios";
import hash from 'object-hash';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const workDevUrl = "http://localhost:8787"

function Map() {
  const [ferries, setFerries] = React.useState(null);
  const [busstops, setbusstops] = React.useState(null);
  //test request
  //leaflet, mapbox, open street map, react leaflet
  //example.features[0].geometry.coordinates
  React.useEffect(() => {
    axios.get(workDevUrl + "/ferries").then((response) => {
        setFerries(response.data);
    });
    axios.get(workDevUrl + "/busstops").then((response) => {
        setbusstops(response.data);
    });
  }, []);
  if (!ferries) return null;
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <MapContainer center={[-32.0, 115.9]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        <GeoJSON key={hash(ferries)} data={ferries} />
        <GeoJSON key={hash(busstops)} data={busstops} />
    </MapContainer>
    </div>
  );
}

export default Map;