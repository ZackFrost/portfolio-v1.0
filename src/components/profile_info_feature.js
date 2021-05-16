import { DESCRIPTION_COLOR, TITLE_COLOR } from "../utils/color_utils";
import { info } from "../utils/info_utils";

export const ProjectInfoFeature = () => {
  const Styles = {
    infoCount:{
      fontSize:".82rem",
      fontWeight:"700",
      color:"#527660"
    },
    infoTitle:{
      fontSize:".54rem",
      marginTop:"5px",
      color: DESCRIPTION_COLOR,
      letterSpacing:".2px",
      fontFamily:"sans-serif"
    }
  }
  return (
    <section
      id="features"
      className="row"
      style={{ textAlign: "center"}}
    >
      {info.map((inf, index) => (
        <section key={index} className="col col-md-4 col-lg-2 mb-4">
          <section>
            <span style={Styles.infoCount}>{inf.total}</span>
            <span style={Styles.infoTag}>{inf.tag}</span>
          </section>
          <section style={Styles.infoTitle}>{inf.title}</section>
        </section>
      ))}
    </section>
  );
};
