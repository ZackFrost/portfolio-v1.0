import React from "react";
import {
  BACKGROUND_COLOR,
  LIGHT_GREY_COLOR,
  LIGHT_GREY_DESCRIPTION,
} from "../utils/color_utils";
import Android from "../assets/icons/platform/android.svg";

const ProjectSectionCard = ({ title, description, image, platform }) => {
  return (
    <div
      className="card shadow-lg"
      style={{
        boxShadow: `5px 5px 15px ${BACKGROUND_COLOR}`,
        border: "0px",
        marginBottom: "60px",
      }}
    >
      <img src={image} style={{
        width: "100%",
        height: "140px",
        objectFit: "cover",
      }} className="card-img-top" alt="..." />
      <div className="card-body" style={{ marginTop: "5px", padding: "20px" }}>
        <h5 style={{ fontWeight: "600" }}>{title}</h5>
        <p
          style={{
            fontSize: "14px",
            margin: "10px 0px 30px 0px",
            color: LIGHT_GREY_DESCRIPTION,
          }}
        >
          {description}
        </p>
        <div className="row" style={{ float:"right"}}>
          {platform.map((platformName, index) => {
            return (
              <div style={{width: "12px"}}>
                {platformName === "android" ? (
                  <img className="row" key={index} src={Android} style={{width:"13px", paddingTop:"5px"}} />
                ) : 
                (<span className="row" style={{ color:platformName == "ios" ? "grey" : "black",
                 fontSize: "13px", fontWeight:"500"}}>
                  {platformName}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionCard;
