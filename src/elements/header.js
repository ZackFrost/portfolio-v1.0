import React from "react";
import "../index.css";
import HeaderBG from "../assets/images/header-bg.jpg";
import { socialMediaIcons } from "../utils/social_utils";
import IanLogo from "../assets/logo/ian_logo1.png";
import {
  CUSTOM_GRADIENT,
  CUSTOM_SUNRISE_GRADIENT_COLOR,
  DESCRIPTION_COLOR,
  LABEL_COLOR,
  LIGHT_GREY_COLOR,
} from "../utils/color_utils";
import { MaterialButton } from "../components/material_button";
import { NeonButton } from "../components/neon_button";

const Header = () => {
  const styles = {
    header: {
      // backgroundImage: `url(${HeaderBG})`,
      // height: "650px",
      // backgroundPosition: "bottom",
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
    },
    content: {
      // height: "100%",
      // width: "100%",
      // backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    heroSection: {
      margin:"7rem 20px"
    },
    headerTitle: {
      // color:"#2b685e",
      fontWeight: 700,
      fontSize: "3.2rem",
    },
    headerDescription: {
      color: DESCRIPTION_COLOR,
      fontSize: "1.04rem",
      textAlign: "justify",
      marginTop: "10px",
      marginBottom: "14px",
      letterSpacing:".5px"
    },
    heroBody: {
      maxWidth:"90ch",
      lineHeight:"1.6"
    },
    sectionContact: {
      padding: "15px 0px",
      display:"flex",
    },
  };

  return (
    <header id="main-header" style={styles.header}>
      <section id="bg-overlay" style={styles.content}>
        <section id="header-content">
          <section id="container" className="container">
            {/* <nav>
              <img src={IanLogo} width="20"/>
            </nav> */}
            <section id="hero-section" style={styles.heroSection}>
              <section id="hero-body" style={styles.heroBody}>
                <section style={styles.headerTitle}>Ian Paul</section>
                <p style={styles.headerDescription}>
                  Hi. I’m a software engineer and a part-time freelancer developing mobile
                  and web applications. My daily activity involve's developing highly interactive
                  front end for mobile and web applications. Below is a quick overview 
                  of my main technical skill sets and technologies I use.
                </p>
              </section>
              <section id="section-contact">
                <section
                  id="section-cta"
                  style={styles.sectionContact}
                >
                  <MaterialButton
                    name="CONTACT ME"
                    onTap={() => console.log("yuhuui")}
                    boxShadow={`4px 4px 16px 1px #268a59`}
                    // backgroundColor={CUSTOM_GRADIENT}
                    backgroundColor="#008b74"
                    textColor="#fff"
                    margin="0px 1.9rem 0px 0px"
                  />
                  <MaterialButton
                    name="RESUME"
                    onTap={() => console.log("yellow")}
                    boxShadow={`4px 4px 13px 1px #a4ae9e`}
                    textColor="#40493b"
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
