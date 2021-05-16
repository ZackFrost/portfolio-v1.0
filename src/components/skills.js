import React from "react";
import {
  TITLE_COLOR,
  LIGHT_BACKGROUND_COLOR,
  SECTION_TITLE_COLOR,
} from "../utils/color_utils";
import { skills } from "../utils/technology_utils";
import IconTitleWidget from "./icon_title_widget";

const Skills = () => {
  
  const styles = {
    skillSection: {
      padding: "70px 0px",
      backgroundColor: LIGHT_BACKGROUND_COLOR
    },
    sectionTitle : {
      fontWeight: 700,
      fontSize: "43px",
      paddingBottom: "58px",
      textAlign: "center",
      color:"#008b74"
    },
    sectionTitle1 :{
      fontWeight:"600",
      fontSize: "1.28rem",
      letterSpacing:".7px",
      marginBottom: "45px",
      textAlign:"center",
      color:"#527660"
    }
  }

  return (
    <section
      id="skill_section"
      style={ styles.skillSection}
    >
      <div className="container">
        <div style={styles.sectionTitle}>
          Experience in
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <section key={index} className="col" style={{margin:"0px 30px"}} >
              <section
                id="heading"
                style={styles.sectionTitle1}
              >
                {skill.category}
              </section>
              <section id="skill-items" className="row" style={{ justifyContent:"center", marginTop:"50px"}}>
                {skill.platforms.map((platform, index) => (
                  <div key={index} className="col-6 col-md-4 col-lg-3">
                    <IconTitleWidget
                      path={platform.path}
                      title={platform.name}
                    />
                  </div>
                ))}
              </section>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


{/* <section className="col-6" style={{}}>
            <section
              id="heading"
              style={{
                color: "#000",
                fontSize: "30px",
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              Frameworks
            </section>
            <section id="languages" className="row">
              {technologiesMap.map((icon, index) => (
                <div key={index} className="col-2 m-3">
                  <IconTitleWidget path={icon.path} title={icon.name} />
                </div>
              ))}
            </section>
          </section>
          <section className="col-6" style={{}}>
            <section
              id="heading"
              style={{
                color: "#000",
                fontSize: "30px",
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              Languages
            </section>
            <section id="languages" className="row">
              {technologiesMap.map((icon, index) => (
                <div key={index} className="col-2 m-3">
                  <IconTitleWidget path={icon.path} title={icon.name} />
                </div>
              ))}
            </section> */}
          {/* </section> */}
