import React from "react";
import GetInTouch from "../components/get_in_touch";
import Projects from "../components/projects";
import Services from "../components/services";
import Skills from "../components/skills";

const Body = () => {
  return (
    <div>
      <Skills />
      <GetInTouch />
      <Services />
      <Projects />
    </div>
  );
};

export default Body;
