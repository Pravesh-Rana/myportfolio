import React from "react";
import "./project.css";
import IMG1 from "../../assets/somarven.png";
import IMG2 from "../../assets/Breaking bad.png";
import IMG3 from "../../assets/Covid.jpeg";
import IMG4 from "../../assets/recipeapp.jpeg";
import IMG5 from "../../assets/Space travel.png";
import IMG6 from "../../assets/awesomebooks.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Tesla Stock Price Prediction",
    github: "https://github.com/Pravesh-Rana",
    // demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "Credit Card Fraud Detection",
    github: "https://github.com/Pravesh-Rana",
    // demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Imdb Movie Data Analysis",
    github: "https://github.com/Pravesh-Rana",
    // demo: "",
  },
  {
    id: 4,
    image: IMG4,
    title: "Lead Scoring",
    github: "https://github.com/Pravesh-Rana",
    // demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "Customer Segmentation",
    github: "https://github.com/Pravesh-Rana",
    // demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Books Rental Website",
    github: "https://github.com/Pravesh-Rana",
    // demo: "",
  },
];
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                {/* <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
