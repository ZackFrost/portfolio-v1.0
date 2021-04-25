import EncryptChat from "../assets/images/encrypt-chat.jpg";

const CustomProjectCard = ({}) => {
  return (
    <section
      id="card-head"
      className="card shadow-lg container"
      style={{
        maxWidth: "500px",
        height: "300px",
        borderRadius: "25px",
        border: "none",
        margin: "auto",
        marginBottom:"50px"
      }}
    >
      <section
        style={{
          display: "flex",
          boxSizing: "content-box",
          position: "relative",
          alignItems: "center",
        }}
      >
        <section
          style={{
            maxWidth: "200px",
            height: "200px",
            borderRadius: "20px",
            border: "none",
            flexShrink: "0",
            transform: "translateX(-65px)",
            overflow: "hidden",
            borderStyle: "none",
            lineHeight: "1.15",
            marginTop: "35px",
          }}
        >
          <img
            style={{
              height: "100%",
              objectFit: "contain",
              display: "block",
              boxSizing: "border-box",
            }}
            src={EncryptChat}
          />
        </section>
        <section style={{ paddingRight: "25px" }}>
          <span
            style={{
              color: "#7b7992",
              marginBottom: "15px",
              display: "block",
              fontWeight: "500",
            }}
          >
            26 December 2019
          </span>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#0d0925",
              marginBottom: "20px",
            }}
          >
            Lorem Ipsum Dolor
          </span>
          <div
            style={{
              color: "#4e4a67",
              marginBottom: "30px",
              lineHeight: "1.5em",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            voluptate repellendus magni illo ea animi?
          </div>
          <a
            href="#"
            class="blog-slider__button"
            style={{
              display: "inline-flex",
              backgroundImage:
                "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
              padding: "15px 35px",
              borderRadius: "50px",
              color: "#fff",
              boxShadow: "0px 14px 80px rgba(252, 56, 56, 0.4)",
              textDecoration: "none",
              fontWeight: "500",
              justifyContent: "center",
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            READ MORE
          </a>
        </section>
      </section>
    </section>
  );
};

export default CustomProjectCard;
