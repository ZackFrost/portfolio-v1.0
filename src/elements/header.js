import React from "react";
import "../index.css";
import UserImage from "../assets/images/paul.png";
import CustomCardWidget from "../components/custom_card_widget";
import { socialMediaIcons } from "../utils/social_utils";

const Header = () => {
  return (
    <div>
      <div
        id="header"
        className="container" style={{ backgroundColor: "#faf9f7" }}
      >
        <div className="row">
          <h1 id="logo">IP</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="row"
              style={{ color: "#989898", paddingTop: "25%" }}
            >
              Flutter Developer
            </div>
            <div className="row" style={{ fontWeight: 700, fontSize: 32 }}>
              Ian Paul
            </div>
            <div className="row" style={{ color: "#bdb9bb", fontSize: "17px" }}>
              I'm a software engineer and a part-time freelancer building mobile
              and web applications. It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
            </div>
          </div>
          <div className="col-lg-6">
            <img src={UserImage} width="100%" className="pt-5" />
            {/* <CustomCardWidget
            borderRadius={25}
            border="1px solid white"
            widget={
              <div className="row">
                <div className="col-9" style={{marginLeft: "15px"}}>
                  {socialMediaIcons.map((icons, index) => {
                    return (
                      <img
                        key={index}
                        src={icons.path}
                        style={{ marginRight: "50px" }}
                        height={35}
                        width={35}
                      />
                    );
                  })}
                </div>
                <button
                  className="btn"
                  style={{
                    width:"20%",
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
                </button>
              </div>
            }
          /> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
