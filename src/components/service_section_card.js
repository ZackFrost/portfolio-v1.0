import React from "react";

const ServiceSectionCard = ({title, description, image}) => {
  return (
    <div className="card card shadow-lg  mb-5 " style={{borderRadius:"7px", border:"0px", padding:"40px 10px 40px 10px"}}>
      <img src={image} class="card-img-top" height="80" alt="Not Found"/>
      <div className="card-body" style={{textAlign:"center", paddingTop:"35px", fontSize:"15px"}}>
        <h5 className="card-title" style={{fontWeight:"700"}}>{title}</h5>
        <p className="card-text" style={{color:"#989898", marginTop:"15px", textAlign:"justify"}}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceSectionCard;