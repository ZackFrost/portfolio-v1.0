import React from "react";
import GetInTouch from "../components/get_in_touch";
import Projects from "../components/projects";
import Services from "../components/services";
import Skills from "../components/skills";
import { Testimonials } from "../components/testimonials";

const Body = () => {
  return (
    <div>
      
      <Skills />
      <Services />
      
      <GetInTouch />
      <Projects />
      <Testimonials/>
      
      
    </div>
  );
};

export default Body;
