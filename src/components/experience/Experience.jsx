import React from "react";
import "./experience.css";
import css3 from "../../assets/css3.png";
import html from "../../assets/html-5.png";
import js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import bs from "../../assets/bootstrap.png";
import three from "../../assets/threejs.png";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          {/* <h3>Frontend Development</h3> */}
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css3} className="experience_details-icon" alt="css" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js" />
              <div>
                <h4>Tableau</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={react}
                className="experience_details-icon"
                alt="react"
              />
              <div>
                <h4>Power BI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={bs} className="experience_details-icon" alt="bs" />
              <div>
                <h4>HTML-5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img
                src={three}
                className="experience_details-icon"
                alt="threejs"
              />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <div className="experience_content"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
