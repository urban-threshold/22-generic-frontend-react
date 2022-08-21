import LeafRating from "./LeafRating";
import React from "react";
import axios from "axios";
import { dataURL } from "../config";

const ModalExample = ({ modal, toggle, selectedFeature, carbonRating }) => {
  const [booked, setBooked] = React.useState(false);

  const bookFeature = () => {
    axios.post(dataURL + "/addbooking/" + selectedFeature).then(() => {
      setBooked(true);
    });
  };

  return (
    <div>
      <p>Carbon Rating</p>
      <LeafRating carbonRating={carbonRating} />
      {booked ? (
        <p>Your booking has been recorded.</p>
      ) : (
        <button className="border br-2 p-2" onClick={bookFeature}>
          Book Now
        </button>
      )}
    </div>
  );
};

export default ModalExample;
