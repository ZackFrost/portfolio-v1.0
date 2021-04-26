import React from "react";
import { CUSTOM_SUNRISE_GRADIENT_COLOR, DESCRIPTION_COLOR, DESCRIPTION_COLOR_LIGHT, LABEL_COLOR, LIGHT_BACKGROUND_COLOR } from "../utils/color_utils";
import { projectsMap } from "../utils/project_utils";
import ProjectSectionCard from "./project_section_card";

const Projects = () => {
  const Styles = {
    sectionSubtitle: {
      margin: "30px 0px",
    },
  };

  return (
    <div id="projects_section" style={{ padding: "80px 0px 80px 0px" }}>
      <div className="container">
        <div className="row">
          <div
            style={{
              paddingBottom: "70px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontWeight: 700,
                fontSize: "48px",
                textAlign: "center",
                color: "#000",
              }}
            >
              Projects
            </h1>
            {/* <h5>Personal & Freelance</h5> */}
          </div>
          {projectsMap.map((project, index) => (
            <section className="row" style={{marginBottom:"15px"}}>
              <section id="section-subtitle">
                <h5 style={Styles.sectionSubtitle}>{project.title}</h5>
              </section>
              <section id="section-card" className="row" >
                {project.projects.map((service, index) => (
                  <div key={index} className="col-lg-3 col-md-4 col-sm-6 me-5 mb-5">
                    <ProjectSectionCard
                      platform={service.platforms}
                      title={service.title}
                      description={service.descritpion}
                      image={service.image}
                      link={service.link}
                    />
                  </div>
                ))}
              </section>
            </section>
          ))}
          <div className="row"></div>
        </div>
      </div>
    </div>
    // <div
    //   id="projects_section"
    //   style={{ backgroundImage: CUSTOM_GRADIENT_COLOR , padding:"80px 0px 80px 0px"}}
    // >
    //   <div className="container">
    //     <div className="row">
    //       <div
    //         style={{
    //           paddingBottom: "70px",
    //           textAlign: "center",
    //           color: "white",
    //         }}
    //       >
    //         <h1 style={{
    //           fontWeight: 700,
    //           fontSize: "48px",
    //           textAlign: "center",
    //           color: "white"
    //         }}>Projects</h1>
    //         <h5 style={{fontSize:"15px"}}>Personal & Freelance</h5>
    //       </div>

    //       <div className="row">
    //         {projectsMap.map((service, index) => (
    //           <div key={index} className="col-3">
    //             <ProjectSectionCard
    //               platform={service.platforms}
    //               title={service.title}
    //               description={service.descritpion}
    //               image={service.image}
    //             />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
