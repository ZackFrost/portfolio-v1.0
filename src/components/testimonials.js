import "../testimonials.css";
import { BACKGROUND_COLOR, LIGHT_BACKGROUND_COLOR } from "../utils/color_utils";
import { testimonials } from "../utils/testimonials_utils";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-clean">
      <div
        className="container"
        style={{ paddingTop: "60px", paddingBottom: "100px" }}
      >
        <div className="intro">
          <h2 className="text-center">Testimonials </h2>
          {/* <p className="text-center" style={{ color: "rgb(238, 238, 238)" }}>
            Our customers love us! Read what they have to say below. Aliquam sed
            justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
          </p> */}
        </div>
        <section className="row people">
          {testimonials.map((data, index) => {
            return (
              <div key={index} className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description testimonials-description">
                    {data.comment}
                  </p>
                </div>
                <div className="author">
                  <img className="rounded-circle" src="https://unsplash.it/30/30" />
                  <h5 className="name">{data.name}</h5>
                  <p className="title" style={{color: "#fff"}}>{data.designation}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};
