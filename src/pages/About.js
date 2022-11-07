import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import construction from "../img/Under construction-pana.svg";
import "../App.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <img
          src={construction}
          alt="construction"
          className="img-construction"
        />
        <h6 className="text-base text-center">Website is under construction</h6>
      </div>
    </>
  );
};
export default About;
