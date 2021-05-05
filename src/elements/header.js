import React from "react";
import "../index.css";
import HeaderBG from "../assets/images/header-bg.jpg";
import { socialMediaIcons } from "../utils/social_utils";
import {
  CUSTOM_SUNRISE_GRADIENT_COLOR,
  DESCRIPTION_COLOR,
  LABEL_COLOR,
  LIGHT_GREY_COLOR,
} from "../utils/color_utils";
import { MaterialButton } from "../components/material_button";
import { NeonButton } from "../components/neon_button";

const Header = () => {
  const styles = {
    logo: {
      color: "#fff",
    },
    header: {
      backgroundImage: `url(${HeaderBG})`,
      height: "650px",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    content: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    label: {
      color: LABEL_COLOR,
      color: "rgb(0, 68, 131)",
    },
    headerTitle: {
      color: "white",
      fontWeight: 700,
      fontSize: 50,
      padding: "10px 0px 15px 0px",
    },
    headerDescription: {
      color: DESCRIPTION_COLOR,
      fontSize: "17px",
      textAlign: "justify",
    },
    heroBody: {
      paddingTop: "18%",
    },
    sectionContact: {
      padding: "25px 10px",
    },
  };

  return (
    <header id="main-header" style={styles.header}>
      <section id="bg-overlay" style={styles.content}>
        <section id="header-content">
          <section id="container" className="container">
            {/* <section id="logo">
              <h4 style={styles.logo}>IP</h4>
            </section> */}
            <section id="hero-section">
              <section id="hero-body" style={styles.heroBody} className="col-9">
                {/* <h5 style={styles.label}>Flutter Developer</h5> */}
                <section style={styles.headerTitle}>Ian Paul</section>
                <p style={styles.headerDescription}>
                  Hi. I’m Ian, a software engineer and a part-time freelancer building mobile
                  and web applications. My daily activity involve's developing highly interactive
                  front end for mobile and web applications. Below is a quick overview 
                  of my main technical skill sets and technologies I use.
                </p>
              </section>
              <section id="section-contact">
                {/* <section id="social-links">
                  <ul style={{ padding: "10px 0px" }}>
                    {socialMediaIcons.map((icons, index) => {
                      return (
                        <li
                          style={{ marginRight: "1.0rem" }}
                          key={index}
                          className="social-media-icon"
                        >
                          <img src={icons.path} height="16" width="16" />
                        </li>
                      );
                    })}
                  </ul>
                </section> */}
                <section
                  id="section-cta"
                  className="row"
                  style={styles.sectionContact}
                >
                  
                  <MaterialButton
                    name="CONTACT ME"
                    onTap={() => console.log("yuhuui")}
                    boxShadow={`0px 1px 14px 1px #FFC371`}
                    backgroundColor={CUSTOM_SUNRISE_GRADIENT_COLOR}
                    textColor="#fff"
                    margin="0px 1.8rem 1.8rem 0px"
                  />
                  <MaterialButton
                    name="RESUME"
                    onTap={() => console.log("yellow")}
                    boxShadow={`4px 4px 18px 1px ${LIGHT_GREY_COLOR}`}
                    textColor="#000"
                    backgroundColor="white"
                  />
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </header>
  );
};

export default Header;
