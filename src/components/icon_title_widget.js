import React from "react";
import { DESCRIPTION_COLOR, LIGHT_GREY_COLOR, SECTION_TITLE_COLOR } from "../utils/color_utils";

const IconTitleWidget = ({ path, title, isShowTitle = true }) => {

  const styles= {
    container:{
      marginBottom:"50px",
      display:"block",
    },
    title:{
      fontSize: ".7rem",
      fontWeight:"600",
      color: "#527660",
      textAlign:"center",
      marginTop:"15px",
    },
    image:{
      display:"block",
      margin:"0px auto"
    }
  }

  return (
    <div id="iconTitle" style={styles.container}>
      <div className="row" style={{}}>
        <image id="icon">
          <img src={path} alt="not found" height="45" width="45"  style={styles.image} />
        </image>
        {isShowTitle && (
          <section id="iconTitle" style={styles.title}>
            {title}
          </section>
        )}
      </div>
    </div>
  );
};

export default IconTitleWidget;
