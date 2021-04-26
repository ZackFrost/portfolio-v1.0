import React from "react";
import { BACKGROUND_COLOR } from "../utils/color_utils";
import { servicesMap } from "../utils/service_utils";
import ServiceSectionCard from "./service_section_card";

const Services = () => {
  return (
    <section style={{backgroundColor:"white"}}>
      <div id="services_section" className="container">
        <div className="row" style={{ padding: "100px 0px 150px 0px" }}>
          <h1
            style={{
              fontWeight: 700,
              fontSize: "48px",
              paddingBottom: "100px",
              textAlign: "center",
            }}
          >
            Services
          </h1>
          {servicesMap.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 gx-4">
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
