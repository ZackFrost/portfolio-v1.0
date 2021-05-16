import React from "react";
import Email from "../assets/icons/email.svg";
import "../index.css";

import {
  BACKGROUND_COLOR,
  CUSTOM_GRADIENT,
  CUSTOM_GRADIENT_COLOR,
  DARk_GREY_COLOR,
  DESCRIPTION_COLOR,
  DESCRIPTION_COLOR_LIGHT,
  LIGHT_BACKGROUND_COLOR,
  LIGHT_GREY_COLOR,
  LIGHT_GREY_DESCRIPTION,
  TITLE_COLOR,
} from "../utils/color_utils";
import { socialMediaIcons } from "../utils/social_utils";
import UserImage from "../assets/images/ian2.jpg";
import { MaterialButton } from "./material_button";
import { ProjectInfoFeature } from "./profile_info_feature";

const GetInTouch = () => {
  const styles = {
    // profileContainer: {
    //   maxWidth: "280px",
    //   textAlign: "center",
    //   padding: "0px",
    //   margin: "0px",
    //   boxShadow: "5px 0px 5px -5px rgba(0,0,0,0.7)",
    // },
    // profileBG: {
    //   backgroundImage: `url(${BgCard})`,
    //   height: "130px",
    //   maxWidth: "268px",
    //   marginLeft: "12px",
    //   backgroundSize: "cover",
    //   backgroundPosition: "bottom",
    //   borderTopLeftRadius: "17px",
    // },
    getInTouch: {
      backgroundColor: LIGHT_BACKGROUND_COLOR,
    },
    cardMain: {
      borderRadius: "7px",
      border: "none",
    },
    profileImage: {
      width: "115px",
      borderRadius: "50%",
      transform: "translateY(-65px)",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      border: "3px solid #fff",
      boxShadow: "0px 0px 8px 0px #6E6E5E, 0px 0px 0px 0px #6E6E5E",
    },
    emailSection: {
      color: "#527660",
      fontSize: ".9rem",
    },
    profileIntro: {
      fontSize: "13px",
      color: LIGHT_GREY_DESCRIPTION,
    },
    socialMediaIcons: {
      paddingBottom: "10px",
    },
    aboutContainer: {
      margin: "45px 50px 20px 28px",
    },
    sectionDescription: {
      fontSize: "15px",
      textAlign: "justify",
      color: DESCRIPTION_COLOR,
      paddingTop: "12px",
    },
    sectionHeader: {
      background: BACKGROUND_COLOR,
      padding: "120px 0px",
    },
    bioTitle: { fontWeight: "700", color: "#008b74", fontSize: "1.6rem" },
  };
  return (
    <section id="section-header" style={styles.sectionHeader}>
      <section id="section-container" className="container">
        <section
          id="card-main"
          className="card shadow-lg"
          style={styles.cardMain}
        >
          <section className="row m-0">
            <section
              id="section-profile-info"
              className="profile-container col-md-6"
            >
              <section id="profile-background" className="profile-bg"></section>
              <section id="profile-image">
                <img src={UserImage} style={styles.profileImage} />
              </section>
              <section
                id="profile-data"
                style={{ transform: "translateY(-40px)" }}
              >
                <section
                  id="section-email-id"
                  className="col"
                  style={styles.emailSection}
                >
                  <img
                    src={Email}
                    width="11"
                    style={{ marginRight: "7px", marginTop: "-1px" }}
                  />
                  ianpaul789@gmail.com
                </section>
                <p
                  style={{
                    padding: "10px 30px",
                    color: DESCRIPTION_COLOR,
                    fontSize: ".9rem",
                    letterSpacing: ".1px",
                  }}
                >
                  Living, learning, & leveling up one day at a time!
                </p>
                <section
                  id="profile-social-icons"
                  style={styles.socialMediaIcons}
                >
                  <ul>
                    {socialMediaIcons.map((icons, index) => {
                      return (
                        <li
                          className="col social-media-icon"
                          style={{ marginRight: "1.0rem" }}
                          key={index}
                        >
                          <img
                            src={icons.path}
                            height="15"
                            width="15"
                            style={{ marginLeft: "-3px" }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </section>
              </section>
            </section>
            <section id="section-bio" className="col">
              <section style={styles.aboutContainer}>
                <section id="section-title">
                  <h5 style={styles.bioTitle}>What I do?</h5>
                </section>
                <section
                  id="section-description"
                  style={styles.sectionDescription}
                >
                  I create successful websites and mobile apps that are fast,
                  easy to use, and built with best practices. I, am also working
                  on few side projects providing SEO and Google Advertising
                  services for clients. Want to find out more about my
                  experience? Check out my resume.
                  <br />
                  <br />
                  Outside of work i run a tech blog as a passion towards tech
                  savy content. Check it out!{" "}
                  <span>
                    <a target="_blank" href="https://geekviatech.blogspot.com/">
                      geekviatech
                    </a>
                  </span>
                </section>
                <section style={{ marginTop: "23px" }}>
                  <ProjectInfoFeature styles="" />
                </section>
                <section
                  id="get-in-touch"
                  className="git-section-button"
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    marginBottom: "30px",
                  }}
                >
                  <MaterialButton
                    name="GET IN TOUCH"
                    onTap={() => null}
                    maxHeight="40px"
                    maxWidth="120px"
                    lineHeight="40px"
                    boxShadow={`1px 1px 12px 0px #008a94`}
                    backgroundColor="#008a94"
                    textColor="#fff"
                    fontSize=".67rem"
                  />
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default GetInTouch;
