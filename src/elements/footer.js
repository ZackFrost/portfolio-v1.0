import React from "react";
import { ScrollTo } from "../components/scrollTo_widget";
import "../index.css";
import { socialMediaIcons } from "../utils/social_utils";
import {
  LIGHT_GREY_COLOR,
  DARk_GREY_COLOR,
  LIGHT_BACKGROUND_COLOR,
  BACKGROUND_COLOR,
} from "../utils/color_utils";
import { MaterialButton } from "../components/material_button";
import { NeonButton } from "../components/neon_button";

const Footer = () => {
  const Styles = {
    footerContainer: {
      backgroundColor: "#fff",
    },
    footerInfo: {
      textAlign: "center",
      color: LIGHT_GREY_COLOR,
      transform: "translateY(-30px)",
    },
    socialMediaIcons: {
      textAlign: "center",
      marginLeft: "-14px",
      transform: "translateY(-30px)",
    },
    contactMe: {
      padding: "3.1rem 1.25rem",
      border: "none",
      transform: "translateY(-90px)",
      borderRadius: "8px",
    },
  };

  return (
    <div id="footer" style={Styles.footerContainer}>
      <div className="container" style={{ padding: "30px 0px 10px 0px" }}>
        <div>
          {/* <div className="col-4" style={{color: DARk_GREY_COLOR, textAlign:"end"}}>
                Secunderabad, karkhana <br /> +91 9700058792 <br />{" "}
                ianpaul789@gmail.com
              </div> */}
          {/* <div className="col-6" style={{ textAlign: "end" }}>
            {" "}
            <ScrollTo color={DARk_GREY_COLOR} />{" "}
          </div> */}
          <section
            id="footer-contact-me"
            className="card shadow"
            style={Styles.contactMe}
          >
            <section className="row d-flex align-items-center">
              <h4
                className="col-lg-4"
                style={{
                  fontWeight: "700",
                  textAlign: "center",
                  fontSize: "2rem",
                }}
              >
                Start a project
              </h4>
              <p
                className="col-lg-5"
                style={{
                  color:"#527660",
                  fontWeight: "400",
                  textAlign: "center",
                  fontSize: "18px",
                  letterSpacing:".3px",
                  padding:"1.4rem 2rem",
                }}
              >
                Interested in working together? We should queue up a chat to
                discuss more on the project
              </p>
              <section className="col-lg-3 d-flex justify-content-center">
                {/* <NeonButton/> */}
                <MaterialButton
                  name="Let's do this"
                  onTap={() => null}
                  customCss="gradient-btn-1"
                  textColor="#fff"
                  height="48px"
                  fontSize="14px"
                  borderRadius="8px"
                />
              </section>
            </section>
          </section>
          <section id="profile-social-icons" style={Styles.socialMediaIcons}>
            <ul>
              {socialMediaIcons.map((icons, index) => {
                return (
                  <li
                    className="col social-media-icon"
                    style={{ marginRight: "1.0rem", }}
                    key={index}
                  >
                    <img src={icons.path} height="16" width="16"  style={{marginLeft:"-4px" }}/>
                  </li>
                );
              })}
            </ul>
          </section>
          <div style={Styles.footerInfo}>Handcrafted by me &copy; 2021</div>
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
