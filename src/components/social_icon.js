import React from "react";
import "../index.css";

const SocialIcon = ({ icon, backgroundColor, shadowColor }) => {
  return (
    <div
      className="social-media"
      style={{
        background: backgroundColor,
        boxShadow: `0px 7px 30px ${shadowColor}`,
      }}
    >
      <svg style={{ margin:"21%"}}>{icon}</svg>
    </div>
  );
};

export default SocialIcon;
