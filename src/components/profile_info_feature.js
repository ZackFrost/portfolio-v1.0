import { info } from "../utils/info_utils";

export const ProjectInfoFeature = () => {
  return (
    <section
      id="features"
      className="row"
      style={{ textAlign: "center"}}
    >
      {info.map((inf, index) => (
        <section key={index} className="col-2">
          <section>
            <span style={styles.infoCount}>{inf.total}</span>{" "}
            <span style={styles.infoTag}>{inf.tag}</span>
          </section>
          <section style={styles.infoTitle}>{inf.title}</section>
        </section>
      ))}
    </section>
  );
};
