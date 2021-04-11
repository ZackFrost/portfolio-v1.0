import React from "react";
import Arrow from "../assets/icons/arrow.svg";
import { DARk_GREY_COLOR } from "../utils/color_utils";

const ScrollTo = ({ color }) => (
  <img
    src={Arrow}
    height="33"
    style={{
      color: DARk_GREY_COLOR,
      border: `1px solid ${color}`,
      padding: "11px",
      transform: "rotate(270deg)",
    }}
  />
);

export { ScrollTo };
