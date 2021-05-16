import "../project_card.css";

const ProjectCard = ({ image, title, description, platform }) => {
  return (
    <section
      id="card-container"
      className="card shadow-lg"
      style={{
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "200px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius:"12px",
        border:"0px",
      }}
    >
      <figure>
        {/* <img
          className="project-thumb"
          src={image}
        /> */}
        <figcaption style={{ display: "none" }}>
          <h1 className="title is-size-5 is-size-4-widescreen">
            High-end, custom residential renovaters serving Fraser Valley
            homeowners.
          </h1>
        </figcaption>
        <div className="overlay"></div>
      </figure>
    </section>
  );
};

export default ProjectCard;
