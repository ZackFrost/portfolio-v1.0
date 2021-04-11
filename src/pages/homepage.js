import React from "react";
import Body from "../elements/body";
import Footer from "../elements/footer";
import Header from "../elements/header";
import { BACKGROUND_COLOR } from "../utils/color_utils";

const HomePage = () => {
  return (<div style={{backgroundColor: BACKGROUND_COLOR}} >
    <Header/>
    <Body/>
    <Footer/>
  </div>);
};

export default HomePage;
