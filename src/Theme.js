import React from "react";
import halloween from "./halloween.jpg";
import "./Theme.css";

export default function Theme() {
  return (
    <div className="Theme">
      <img src={halloween} alt="halloween themed image" />
    </div>
  );
}
