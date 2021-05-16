import React from "react";
import {
  BACKGROUND_COLOR,
  CUSTOM_SUNRISE_GRADIENT_COLOR,
  DESCRIPTION_COLOR,
  DESCRIPTION_COLOR_LIGHT,
  LABEL_COLOR,
  LIGHT_BACKGROUND_COLOR,
} from "../utils/color_utils";
import { projectsMap } from "../utils/project_utils";
import ProjectCard from "./project_card";
import ProjectSectionCard from "./project_section_card";

const Projects = () => {
  const Styles = {
    sectionSubtitle: {
      margin: "30px 0px",
    },
  };

  return (
    <div id="projects_section" style={{ padding: "80px 0px 160px 0px" }}>
      <div className="container">
        <div className="row">
          <div
            style={{
              paddingBottom:"15px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontWeight: 700,
                fontSize: "43px",
                textAlign: "center",
                color: "#008b74",
              }}
            >
              Projects
            </h1>
            <h5>Personal & Freelance</h5>
          </div>
          <div className="row gy-4 gx-3 m-0" style={{display:"flex"}}>
            {projectsMap.map((project, index) => (
              <section
                id="section-card"
                key={index}
                className="col-sm-6 col-md-6 col-12 col-lg-3"
              >
                {/* <ProjectCard image={project.image}/> */}
                <ProjectSectionCard
                  platform={project.platforms}
                  title={project.title}
                  description={project.descritpion}
                  image={project.image}
                  link={project.link}
                />
              </section>
            ))}
          </div>
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
