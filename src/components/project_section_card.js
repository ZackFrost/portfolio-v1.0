import React from "react";
import { BACKGROUND_COLOR, LIGHT_GREY_COLOR, LIGHT_GREY_DESCRIPTION } from "../utils/color_utils";
import Android from "../assets/icons/platform/android.svg";

const CustomPlatformWidget = ({color, text}) => {
  return <h5 style={{color: color, fontSize:"12px"}}>{text}</h5>
}

const ProjectSectionCard = ({ title, description, image , platform}) => {
  
  return (
    
    <div className="card shadow-lg" style={{
      boxShadow:`5px 5px 15px ${BACKGROUND_COLOR}`, border:"0px", marginBottom:"60px"}}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body" style={{marginTop:"5px", padding:"20px"}}>
        <h5 style={{fontWeight:"600"}}>{title}</h5>
        <p style={{fontSize:"14px", margin:"10px 0px 30px 0px" , color: LIGHT_GREY_DESCRIPTION}}>{description}</p>
        <div style={{float:"right"}} className="row">
          {platform.map((platformName, index)=>{ 
            return <div className="col" style={{marginLeft:"-10px", paddingLeft:"8px"}}>{(platformName === 'android')?
            <img key={index} src={Android} height="12" width="12" style={{marginTop:"-8px"}} />
            : <CustomPlatformWidget color={(platformName == 'ios')? "grey" : "black"} text={platformName}/>}</div>
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionCard;
