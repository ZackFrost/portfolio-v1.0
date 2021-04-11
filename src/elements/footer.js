import React from "react";
import { ScrollTo } from "../components/scrollTo_widget";
import "../index.css";
// import { socialMediaIcons } from "../utils/social_utils";
import { LIGHT_GREY_COLOR, DARk_GREY_COLOR } from "../utils/color_utils";

const Footer = () => {
  
  return (
    <div id="footer" className="bg-dark">
      <div className="container">
        <div className="row" style={{ padding: "20px 0px 10px 0px" }}>
          <div
            className="col-sm-11"
            style={{
              color: DARk_GREY_COLOR,
              textAlign: "center",
              fontSize: "14px",
            
            }}
          >
            &copy; Ian Paul 2016-2021
          </div>
          <div className="col-sm-1 d-none d-sm-block" style={{textAlign:"end", marginTop:"-8px"}}>
            <ScrollTo color={DARk_GREY_COLOR} />
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
