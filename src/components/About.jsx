import React from "react";
import Common from "./Common";
import about from "../images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <Common
          text="Grow Your Business With"
          img={about}
          btnText="CONTACT HERE"
          path="/contact"
        />
      </section>
    </>
  );
};

export default About;
