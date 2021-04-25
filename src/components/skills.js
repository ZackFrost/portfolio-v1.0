import React from "react";
import {
  BACKGROUND_COLOR,
  TITLE_COLOR,
  SECTION_TITLE_COLOR,
  LIGHT_BACKGROUND_COLOR,
} from "../utils/color_utils";
import { skills } from "../utils/technology_utils";
import IconTitleWidget from "./icon_title_widget";

const Skills = () => {
  
  const styles = {
    skillSection: {
      padding: "130px 0px",
      backgroundColor:LIGHT_BACKGROUND_COLOR
    },
    sectionTitle : {
      fontWeight: 700,
      fontSize: "48px",
      paddingBottom: "50px",
      textAlign: "center",
      color: SECTION_TITLE_COLOR,
    },
    sectionTitle1 :{
      color: "#000",
      fontSize: "23px",
      marginBottom: "45px",
      textAlign:"center"
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
              <section id="skill-items" className="row" style={{ justifyContent:"center"}}>
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
