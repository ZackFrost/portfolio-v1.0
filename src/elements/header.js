import React from "react";
import "../index.css";
import UserImage from "../assets/images/ian.png";
import CustomCardWidget from "../components/custom_card_widget";
import { socialMediaIcons } from "../utils/social_utils";
import { LIGHT_GREY_COLOR } from "../utils/color_utils";

const Header = () => {
  return (
    <div>
      <div
        id="header"
        className="container"
        style={{ backgroundColor: "#faf9f7" }}
      >
        <div className="row">
          <h1 id="logo">IP</h1>
        </div>
        <div className="row" style={{margin:"0px", padding:"0px"}}>
          <div className="col-lg-6" >
            <span
              className="row"
              style={{ color: "#989898", paddingTop: "30%" }}
            >
              Flutter Developer
            </span>
            <span className="row" style={{ fontWeight: 700, fontSize: 32 }}>
              Ian Paul
            </span>
            <span className="row" style={{ color: "#bdb9bb", fontSize: "17px" }}>
              I'm a software engineer and a part-time freelancer building mobile
              and web applications. It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.
            </span>
          </div>
          <div className="col-lg-6 d-none d-sm-block" style={{ paddingTop: "7%" }}>
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
                  <div className="col" style={{  }}>
                    {socialMediaIcons.map((icons, index) => {
                      return (
                        <img
                          key={index}
                          src={icons.path}
                          style={{ margin: "0px 25px" }}
                          height={35}
                          width={35}
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
        </div>
      </div>
    </div>
  );
};



export default Header;
