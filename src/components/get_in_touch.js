import React from "react";
import DeveloperImage from "../assets/images/development.png";
import {DARk_GREY_COLOR, LIGHT_GREY_COLOR} from "../utils/color_utils"

const GetInTouch = () => {

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container text-center" >
        <div className="row" style={{ padding: "120px 0px", margin:"0px" }}>
          <div className="col-lg-6 pt-5">
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "700",
                color: DARk_GREY_COLOR,
              }}
            >
              Turn Your Idea's
            </h1>
            <h3
              style={{
                fontSize: "32px",
                fontWeight: "700",
                color: LIGHT_GREY_COLOR,
              }}
            >
              Into Reality
            </h3>

            <button
              className="btn"
              style={{
                padding: "20px",
                margin: "35px 0px",
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
          <div className="col-lg-6">
            <img src={DeveloperImage} width="100%" alt="Not Found" style={{margin:"0px", padding:"0px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
