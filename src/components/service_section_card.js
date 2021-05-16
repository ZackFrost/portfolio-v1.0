import React from "react";
import { DESCRIPTION_COLOR } from "../utils/color_utils";

const ServiceSectionCard = ({ title, description, image }) => {
  const Styles = {
    card: {
      borderRadius: "15px",
      border:"none",
      padding: "40px 0px 15px 0px",
      minHeight: "320px",
    },
    cardTitle: {
      fontWeight: "600",
      marginTop: "10px",
      textAlign: "center",
      letterSpacing:".2px",
      fontSize:"1.28rem",
      color:"#008b74"
    },
    cardDescription: {
      // color: "#989898",
      color:DESCRIPTION_COLOR,
      fontSize: "1rem",
      lineHeight:"1.6",
      textAlign:"justify",
      marginTop: "20px",
      padding:"0px 18px"
    },
  };
  return (
    <div className="card" style={Styles.card}>
      <img src={image} className="card-img-top" height="85" alt="Not Found" />
      <div className="card-body">
        <h5 className="card-title" style={Styles.cardTitle}>
          {title}
        </h5>
        <p className="card-text" style={Styles.cardDescription}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
