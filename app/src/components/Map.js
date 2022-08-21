import React from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Popup,
  Circle,
} from "react-leaflet";
import ModalExample from "./Modal";
import { dataURL } from "../config";

function Map() {
  const [ferries, setFerries] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [selectedFeature, setSelectedFeature] = React.useState({});
  const [ferryRatings, setFerryRatings] = React.useState({});

  const updateRating = (pid, rating) => {
    setFerryRatings((prevState) => {
      // Deep copy state so we dont mutate
      let newState = JSON.parse(JSON.stringify(prevState));
      newState[pid] = rating;
      return newState;
    });
  };

  const toggle = () => setModal(!modal);

  React.useEffect(() => {
    axios.get(dataURL + "/ferries").then((response) => {
      setFerries(response.data);
    });
  }, []);

  React.useMemo(() => {
    // Check if we need to populate feature ratings
    if (Object.keys(ferryRatings).length < 1 && ferries) {
      console.log("Fetching ferry ")
      ferries.features.forEach((feature) => {
        axios
          .get(dataURL + "/booking/" + feature.properties.LGIP_ID)
          .then((response) => {
            let count = !response.data.counter ? 0 : response.data.counter < 5 ? response.data.counter : 5
            updateRating(feature.properties.LGIP_ID, count);
          });
      });
    }
  }, [ferries, ferryRatings]);

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
      <MapContainer
        center={[
          ferries.features[0].geometry.coordinates[1],
          ferries.features[0].geometry.coordinates[0],
        ]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {ferries.features.map((feature, index) => {
          return (
            <FeatureGroup color="purple" key={index}>
              <div class="flex w-5 h-5">
                <Popup>
                  <p>{feature.properties.LGIP_ID}</p>
                  <button
                    id="button"
                    className="btn btn-primary"
                    onClick={() => {
                      toggle(true);
                      setSelectedFeature(feature);
                    }}
                  >
                    <ModalExample
                      modal={modal}
                      toggle={toggle}
                      selectedFeature={feature.properties.LGIP_ID}
                      carbonRating={
                        !ferryRatings[feature.properties.LGIP_ID]
                          ? 0
                          : ferryRatings[feature.properties.LGIP_ID]
                      }
                      updateRating={counter => updateRating(feature.properties.LGIP_ID, counter)}
                    />
                  </button>
                </Popup>
              </div>
              <Circle
                center={[
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0],
                ]}
                fillColor="#0020ff"
                radius={50}
                color={"#0020ff"}
                weight={1}
                opacity={1}
                fillOpacity={0.8}
              />
            </FeatureGroup>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
