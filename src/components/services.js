import React from "react";
import { BACKGROUND_COLOR } from "../utils/color_utils";
import { servicesMap } from "../utils/service_utils";
import ServiceSectionCard from "./service_section_card";

const Services = () => {
  const Styles = {
    header:{
      padding: "90px 0px 150px 0px"
    },
    sectionTitle:{
      fontWeight: 700,
      fontSize: "43px",
      paddingBottom: "15px",
      textAlign: "center",
      color:"#008b74"
    }
  }
  return (
    <section>
      <div id="services_section" className="container">
        <div className="row" style={Styles.header}>
          <h1
            style={Styles.sectionTitle}
          >
            Services
          </h1>
          {servicesMap.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 gx-5 gy-5">
              <ServiceSectionCard
                title={service.title}
                description={service.descritpion}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
