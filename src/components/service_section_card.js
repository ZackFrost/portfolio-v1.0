import React from "react";

const ServiceSectionCard = ({ title, description, image }) => {
  const Styles = {
    card: {
      borderRadius: "7px",
      border: "0px",
      padding: "30px 8px 20px 8px",
      minHeight: "330px",
    },
    cardTitle: {
      fontWeight: "700",
      marginTop: "20px",
      textAlign: "center",
      fontSize:"18px"
    },
    cardDescription: {
      color: "#989898",
      padding: "10px 10px",
      textAlign: "justify",
      fontSize: "15px",
    },
  };
  return (
    <div className="card card shadow-lg  mb-5 " style={Styles.card}>
      <img src={image} class="card-img-top" height="80" alt="Not Found" />
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
