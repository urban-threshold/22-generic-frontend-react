import LeafRating from "./LeafRating";
import { calcCarbon } from "../functions/calculations";
import React from "react";
const ModalExample = ({ modal, toggle, selectedFeature }) => {
  return (
    <div>
      <p>Carbon Rating</p> 
      <LeafRating carbonRating={calcCarbon()}/>
    </div>
  );
};

export default ModalExample;
