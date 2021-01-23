import React from "react";
import Common from "./Common";
import home from "../images/home.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="home">
        <Common
          text="Welcome to our"
          img={home}
          btnText="CLICK HERE"
          path="/about"
        />
      </section>
    </>
  );
};

export default Home;
