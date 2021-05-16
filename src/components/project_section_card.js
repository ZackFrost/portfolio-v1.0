import React from "react";
import {
  BACKGROUND_COLOR,
  DESCRIPTION_COLOR,
  LIGHT_BACKGROUND_COLOR,
  LIGHT_GREY_COLOR,
  LIGHT_GREY_DESCRIPTION,
} from "../utils/color_utils";
import Android from "../assets/icons/platform/android.svg";

const ProjectSectionCard = ({ title, description, image, platform, link }) => {
  const styles = {
    cardContainer: {
      border: "0px",
      borderRadius: "6px",
      marginBottom: "50px",
      maxWidth: "250px",
      minHeight: "350px",
      marginRight:"auto",
      marginLeft:"auto"
    },
    cardImage: {
      borderTopLeftRadius: "6px",
      borderTopRightRadius: "6px",
      height: "138px",
      objectFit: "cover",
      borderBottom: `1px solid ${LIGHT_BACKGROUND_COLOR}`,
    },
    cardBody: {
      marginTop: "10px",
    },
    contentTitle: { fontWeight: "600", color: "#53586c" },
    contentDescription: {
      textAlign:"justify",
      fontSize: ".88rem",
      padding: "10px 0px 10px 0px",
      color: DESCRIPTION_COLOR,
    },
    platformCard: { width: "13px", paddingTop: "5px" },
    linkStyle: {
      fontSize: ".8rem",
    },
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
        <div id="platform-container" className="row">
          <section id="card-links" className="col-8">
            {link ? (
              <a href={link} target="_blank" style={styles.linkStyle}>
                View
              </a>
            ) : null}
          </section>
          <section id="card-links" className="col-4 ">
            <section className="row" style={{ float: "right" }}>
              {/* {platform.map((platformName, index) => {
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
                      fontSize: "11px",
                      fontWeight: "600",
                      marginRight:"15px"
                    }}
                  >
                    {platformName}
                  </span>
                )}
              </div>
            );
          })} */}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectSectionCard;
