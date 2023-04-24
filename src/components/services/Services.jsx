import React from "react";
import "./services.css";
import { FaBullseye, FaCheckSquare } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>Model Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaBullseye className="service_list-icon" />
              <p>I develop ML models and algorithms for various use cases.</p>
            </li>
            <li>
              <FaBullseye className="service_list-icon" />
              <p>I optimize models for accuracy, speed, and scalability.</p>
            </li>
            <li>
              <FaBullseye className="service_list-icon" />
              <p>Collaborate with developers to improve model usability. </p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Data Analysis</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaBullseye className="service_list-icon" />
              <p>Conduct exploratory data analysis to uncover insights and patterns.</p>
            </li>
            <li>
              <FaBullseye className="service_list-icon" />
              <p>Apply domain knowledge to interpret data within business context.</p>
            </li>
            <li>
              <FaBullseye className="service_list-icon" />
              <p>I collaborate with other data professionals to ensure data-driven outcomes.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service_head">
            <h3>Data Visualization</h3>
          </div>
          <ul className="service_list">
            <li>
              <FaBullseye className="service_list-icon" />
              <p> Convey complex data insights effectively and to stakeholders.</p>
            </li>
            <li>
              <FaBullseye className="service_list-icon" />
              <p>Ensure accuracy and clarity of the data being visualized.</p>
            </li>
            <li>
              <FaBullseye className="service_list-icon" />
              <p>Provide visual representations of data trends and patterns.</p>
            </li>
          </ul>
        </article>       
      </div>
    </section>
  );
};

export default Services;
