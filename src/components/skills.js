import React from "react";
import { technologiesMap } from "../utils/technology_utils";
import IconTitleWidget from "./icon_title_widget";

const Skills = () => {
  //"#faf9f7"
  return (
    <div id="skill_section" style={{backgroundColor: "black", marginTop: "150px", padding: "80px 0px 100px 0px"}}>
      <div className="container">
        <div
        
          style={{
            fontWeight: 700,
            fontSize: "48px",
            paddingBottom: "120px",
            textAlign: "center",
            color:"white"
          }}
        >
          Experience In
        </div>
        <div className="row">
          {technologiesMap.map((icon, index) => (
            <div key={index} style={{ marginBottom: "80px" }} className="col-xl-2 col-sm-3 col-6">
              <IconTitleWidget path={icon.path} title={icon.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
