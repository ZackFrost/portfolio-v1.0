import React from "react";
import "../index.css";
import UserImage from "../assets/images/ian.png";
import CustomCardWidget from "../components/custom_card_widget";
import { socialMediaIcons } from "../utils/social_utils";
import { LIGHT_GREY_COLOR } from "../utils/color_utils";

const Header = () => {
  return (
    <div style={{ padding: "0px 15px" }}>
      <div className="container">
        <section className="row">
          <h1 id="logo">IP</h1>
          <div className="col-lg-6">
            <span
              className="row"
              style={{
                color: "#7b7992",
                marginBottom: "15px",
                display: "block",
                fontWeight: "500",
                paddingTop: "40%",
              }}
            >
             
            </span>
            <span
              className="row"
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: "#0d0925",
                marginBottom: "20px",
              }}
            >
              Ian Paul
            </span>
            <span
              className="row"
              style={{
                fontSize: "17px",
                textAlign: "justify",
                color: "#bdb9bb",
                marginBottom: "30px",
                lineHeight: "1.5em",
              }}
            >
              I'm a software engineer and a part-time freelancer building mobile
              and web applications. It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.
            </span>
          </div>
          <div
            className="col-lg-6 d-none d-sm-block"
            style={{ paddingTop: "7%" }}
          >
            <img
              src={UserImage}
              width="60%"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                // boxShadow: "0px 10px 20px #5CE3C9",
              }}
            />
            <CustomCardWidget
              borderRadius={25}
              border="1px solid white"
              widget={
                <div className="row">
                  <div className="col">
                    {socialMediaIcons.map((icons, index) => {
                      return (
                        <img
                          key={index}
                          src={icons.path}
                          height={35}
                          width="20%"
                        />
                      );
                    })}
                  </div>
                  {/* <button
                    className="btn"
                    style={{
                      width: "20%",
                      padding: "13px",
                      backgroundImage:
                        "linear-gradient(to bottom right, #1F85B2, #69AF74)",
                      fontSize: "12px",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "20px",
                      boxShadow: "3px 3px 8px #5CE3C9",
                    }}
                  >
                    Resume
                  </button> */}
                </div>
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
