import React from "react";
import axios from "axios";
import hash from 'object-hash';
import { MapContainer, TileLayer, FeatureGroup, Popup, Circle } from 'react-leaflet';
import ModalExample from "./Modal";
const workDevUrl = "http://localhost:8787"

function Map() {
  const [ferries, setFerries] = React.useState(null);
  const [busstops, setbusstops] = React.useState(null);
  const [modal, setModal] =  React.useState(false);
  const [selectedFeature, setSelectedFeature] =  React.useState({});

  const toggle = () => setModal(!modal);
  //test request
  //leaflet, mapbox, open street map, react leaflet
  //example.features[0].geometry.coordinates
  React.useEffect(() => {
    axios.get(workDevUrl + "/ferries").then((response) => {
        setFerries(response.data);
    });
    /*axios.get(workDevUrl + "/busstops").then((response) => {
        setbusstops(response.data);
    });*/
  }, []);
  if (!ferries) return null;
  return (
    <div className="Map">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      {/*Below is because the long lat is in the order of lat long in geojson*/}
      <MapContainer center={[ferries.features[0].geometry.coordinates[1], ferries.features[0].geometry.coordinates[0]]} zoom={10} scrollWheelZoom={true}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        {
          ferries.features.map((feature,index) => {
            return(
            <FeatureGroup color="purple" key={index}>
              <Popup>
                <p>{feature.properties.name}</p>
                <button
                  id="button"
                  className="btn btn-primary"
                  onClick={() => {
                    toggle(true);
                    setSelectedFeature(feature);
                  }}
                >
                  stats about environment stuff here
                </button>
              </Popup>
              <Circle
                center={[
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0]
                ]}
                fillColor="#0020ff"
                radius={50}
                color={"#0020ff"}
                weight={1}
                opacity={1}
                fillOpacity={0.8}
              />
            {
              modal ?
              <ModalExample
                modal={modal}
                toggle={toggle}
                selectedFeature={selectedFeature}
              /> : ""
            }
            </FeatureGroup>
          )
        })
        }
        {//<GeoJSON key={hash(busstops)} data={busstops} />
        }
    </MapContainer>
    </div>
  );
}

export default Map;