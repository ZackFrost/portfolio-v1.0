import React from "react";
import Body from "../elements/body";
import Footer from "../elements/footer";
import Header from "../elements/header";
import { BACKGROUND_COLOR } from "../utils/color_utils";
import CustomProjectCard from "../components/custom_project_card";

const HomePage = () => {
  return (<div >
    <Header/>
    <Body/>
    

<CustomProjectCard/>
    <Footer/>
  </div>);
};

export default HomePage;
