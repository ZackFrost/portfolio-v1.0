import React from "react";
import {
  BACKGROUND_COLOR,
  LIGHT_GREY_COLOR,
  LIGHT_GREY_DESCRIPTION,
} from "../utils/color_utils";
import Android from "../assets/icons/platform/android.svg";

const CustomPlatformWidget = ({ color, text }) => {
  return <h5 style={{ color: color, fontSize: "13px" }}>{text}</h5>;
};

const ProjectSectionCard = ({ title, description, image, platform }) => {
  const styles = {
    cardContainer: {
      border: "0px",
      borderRadius: "10px",
      marginBottom:"70px",
      marginRight:"10px",
      minHeight:"330px"
    },
    cardImage: {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      height: "160px",
      objectFit: "cover",
    },
    cardBody: {
      padding: "25px",
    },
    contentTitle: { fontWeight: "600" },
    contentDescription: {
      fontSize: "14px",
      margin: "10px 0px 30px 0px",
      color: LIGHT_GREY_DESCRIPTION,
    },
    platformCard: { width: "13px", paddingTop: "5px" },
  };

  return (
    <div
      className="card shadow"
      id="card-container"
      style={styles.cardContainer}
    >
      <img
        src={image}
        className="card-img-top"
        alt="..."
        style={styles.cardImage}
      />
      <div className="card-body" style={styles.cardBody}>
        <h5 id="platform-title" style={styles.contentTitle}>
          {title}
        </h5>
        <p id="platform-description" style={styles.contentDescription}>
          {description}
        </p>
        <div id="platform-container" style={{ float: "right" }} className="row">
          {platform.map((platformName, index) => {
            return (
              <div style={{ width: "12px" }}>
                {platformName === "android" ? (
                  <img
                    className="row"
                    key={index}
                    src={Android}
                    style={styles.platformCard}
                  />
                ) : (
                  <span
                    className="row"
                    style={{
                      color: platformName == "ios" ? "grey" : "black",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {platformName}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionCard;
