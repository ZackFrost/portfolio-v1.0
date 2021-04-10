import React from "react";
import Arrow from "../assets/icons/arrow.svg";

const ScrollTo = ({ color }) => (
  <img
    src={Arrow}
    height="40"
    style={{
      color: color,
      border: `1px solid ${color}`,
      padding: "11px",
      transform: "rotate(270deg)",
    }}
  />
);

export { ScrollTo };
