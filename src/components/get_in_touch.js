import React from "react";
import DeveloperImage from "../assets/images/development.png";
import Email from "../assets/icons/email.svg";
import "../index.css";

import {
  BACKGROUND_COLOR,
  CUSTOM_GRADIENT_COLOR,
  DARk_GREY_COLOR,
  DESCRIPTION_COLOR,
  DESCRIPTION_COLOR_LIGHT,
  LIGHT_BACKGROUND_COLOR,
  LIGHT_GREY_COLOR,
  LIGHT_GREY_DESCRIPTION,
} from "../utils/color_utils";
import BgCard from "../assets/images/card-bg2.jpg";
import { socialMediaIcons } from "../utils/social_utils";
import UserImage from "../assets/images/ian.png";
import { MaterialButton } from "./material_button";

const GetInTouch = () => {
  const styles = {
    getInTouch: {
      backgroundColor: LIGHT_BACKGROUND_COLOR,
      padding: "120px",
    },
    cardMain: {
      borderRadius: "17px",
      border: "none",
    },
    profileContainer: {
      maxWidth: "280px",
      textAlign: "center",
      padding: "0px",
      margin: "0px",
      boxShadow: "5px 0px 5px -5px rgba(0,0,0,0.7)",
    },
    profileBG: {
      backgroundImage: `url(${BgCard})`,
      height: "130px",
      maxWidth: "268px",
      marginLeft: "12px",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      borderTopLeftRadius: "17px",
    },
    profileImage: {
      width: "123px",
      width: "123px",
      borderRadius: "50%",
      transform: "translateY(-65px)",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      border: "2px solid #fff",
      boxShadow: "0px 0px 8px 0px #6E6E5E, 0px 0px 0px 0px #6E6E5E",
    },
    emailSection: {
      color: DARk_GREY_COLOR,
      transform: "translateY(-44px)",
      fontSize: "14px",
    },
    profileIntro: {
      fontSize: "13px",
      padding: "0px 35px",
      margin: "-28px 0px 28px 0px",
      color: LIGHT_GREY_DESCRIPTION,
    },
    socialMediaIcons: {
      paddingBottom: "10px",
    },
    aboutContainer: {
      margin: "70px 50px 50px 45px",
    },
    sectionDescription: {
      fontSize: "17px",
      textAlign: "justify",
      color: DESCRIPTION_COLOR,
      paddingTop: "10px",
    },
    infoCount: {
      color: "#324e63",
      fontWeight: "700",
      fontSize: "27px",
    },
    infoTitle: {
      color: "#324e63",
      fontWeight: "500",
      marginTop: "7px",
    },
    infoTag: {
      color: DESCRIPTION_COLOR,
    },
  };
  return (
    <section
      id="get-in-touch-section"
      style={{
        backgroundImage: CUSTOM_GRADIENT_COLOR,
        padding: "120px 0px",
      }}
    >
      <section id="main-container" className="container">
        <section
          id="card-main"
          className="card shadow-lg"
          style={styles.cardMain}
        >
          <section className="row gx-0 gy-0">
            <section id="profile-container" className="col-md-6 profile-container">
              <section id="profile-container">
                <section id="profile-background" className="profile-bg"></section>
                <section id="profile-image">
                  <img src={UserImage} style={styles.profileImage} />
                </section>
                <section id="profile-data">
                  <section
                    id="section-email-id"
                    className="col"
                    style={styles.emailSection}
                  >
                    <img
                      src={Email}
                      width="12"
                      style={{ marginRight: "8px", marginTop: "-2px" }}
                    />
                    ianpaul789@gmail.com
                  </section>
                  <section id="profile-intro" style={styles.profileIntro}>
                    Hi, my name is Ian Paul and I'm a senior software engineer.
                    Welcome to my personal website!
                  </section>
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
                            <img src={icons.path} height="16" width="16" />
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                </section>
              </section>
            </section>
            <section className="col">
              <section style={styles.aboutContainer}>
                <section id="section-title">
                  <h3 style={{ fontWeight: "700" }}>What I do?</h3>
                </section>
                <section
                  id="section-description"
                  style={styles.sectionDescription}
                >
                  I have more than 10 years' experience building software for
                  clients all over the world. Below is a quick overview of my
                  main technical skill sets and technologies I use. Want to find
                  out more about my experience? Check out my online resume and
                  project portfolio.
                </section>
                <section className="row" style={{ marginTop: "35px" }}>
                  {/* <section className="form col-md-7">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter your email"
                      />
                    </div>
                  </section> */}
                  <section id="get-in-touch" className="col-md-5">
                    <MaterialButton
                      name="Get In Touch"
                      onTap={() => null}
                      customCss="gradient-btn-1"
                      textColor="#fff"
                      height="48px"
                    />
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
        {/* <div className="row" style={{ padding: "130px 0px 130px 0px" }}>
          <div className="col-6">
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "700",
                color: DARk_GREY_COLOR,
                paddingTop: "25%",
              }}
            >
              Turn Your Idea's
            </h1>
            <h3
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: LIGHT_GREY_COLOR,
              }}
            >
              Into Reality
            </h3>

            <button
              className="btn"
              style={{
                padding: "22px",
                marginTop: "50px",
                backgroundImage: "linear-gradient(to right, #1F85B2, #69AF74)",
                fontSize: "17px",
                width: "65%",
                color: "white",
                fontWeight: "700",
                borderRadius: "4px",
                boxShadow: "8px 8px 12px #5CE3C9",
              }}
              onClick={() => {
                console.log("hello World");
              }}
            >
              Get In Touch
            </button>
          </div>
          <div className="col-6"></div>
        </div> */}
      </section>
    </section>
  );
};

export default GetInTouch;
