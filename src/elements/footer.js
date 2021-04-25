import React from "react";
import { ScrollTo } from "../components/scrollTo_widget";
import "../index.css";
import { socialMediaIcons } from "../utils/social_utils";
import { LIGHT_GREY_COLOR, DARk_GREY_COLOR, LIGHT_BACKGROUND_COLOR } from "../utils/color_utils";

const Footer = () => {
  return (
    <div id="footer" style={{backgroundColor:LIGHT_BACKGROUND_COLOR }}>
      <div className="container" style={{ padding: "30px 0px 10px 0px"}}>
        <div className="row">
          <div className="col-6" >
            <h3 id="logo">IP</h3>
          </div>
          {/* <div className="col-4" style={{color: DARk_GREY_COLOR, textAlign:"end"}}>
                Secunderabad, karkhana <br /> +91 9700058792 <br />{" "}
                ianpaul789@gmail.com
              </div> */}
          <div className="col-6" style={{ textAlign: "end"}}> <ScrollTo color={DARk_GREY_COLOR}/> </div>
          <div style={{ textAlign: "center", color: LIGHT_GREY_COLOR , paddingTop:"20px"}}>
            &copy; Ian Paul 2016-2021
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="col-6" style={{ textAlign: "center" }}>
            {socialMediaIcons.map((icon, index) => {
              return (
                <div className="col" key={index} style={{color:LIGHT_GREY_COLOR}}>
                  <img src={icon.path} height="12" style={{paddingLeft:"10px"}}/>
                </div>
              );
            })}
          </div> */
}
