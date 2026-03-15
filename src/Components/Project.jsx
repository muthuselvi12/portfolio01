import React from "react";
import project from "./Project.module.css";
import but from "./Button.module.css";
import Ecommerce from "../assets/ecommerce.png";
import Tourist from "../assets/tourist.png";
import Portfolio from "../assets/port.png";
import Weather from "../assets/weather.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "./Button";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section className={project.background} id="project">
        <p
          className={project.sub}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <b>Things I've Built</b>
        </p>
        <div className={project.flex}>
          <div className={project.image} data-aos="zoom-in">
            <div className={project.png}>
              <img className={project.jpg} src={Ecommerce} alt="" />
            </div>
            <div className={project.cont}>
              <p>
                A responsive e-commerce website built using HTML, CSS and
                JavaScript,featuring product listings, shopping cart
                functionality, and a modern user interface for a seamless online
                shopping experience.
              </p>
              <Button
                link="https://ecommercewebsite25.netlify.app/"
                className={but.btn}
                value={"view"}
              />
            </div>
          </div>

          <div className={project.image} data-aos="zoom-in">
            <div className={project.png}>
              <img className={project.jpg} src={Tourist} alt="" />
            </div>
            <div className={project.cont}>
              <p>
                A tourism website showcasing the beauty and attractions of
                Kanyakumari, developed using HTML, CSS, and JavaScript with
                responsive design and informative sections for travelers.
              </p>
              <Button
                link="https://hometown02.netlify.app/"
                className={but.btn}
                value={"view"}
              />
            </div>
          </div>

          <div className={project.image} data-aos="zoom-in">
            <div className={project.png}>
              <img className={project.jpg} src={Portfolio} alt="" />
            </div>
            <div className={project.cont}>
              <p>
                A personal portfolio website designed to showcase my skills,
                projects, and experience as a frontend developer. Built using
                React, HTML, CSS, and JavaScript with a modern and responsive
                design.
              </p>
              <Button link="https://portfolio01-kohl-three.vercel.app/" className={but.btn} value={"view"} />
            </div>
          </div>

          <div className={project.image} data-aos="zoom-in">
            <div className={project.png}>
              <img className={project.jpg} src={Weather} alt="" />
            </div>
            <div className={project.cont}>
              <p>
                A weather application built using JavaScript and API integration
                that displays real-time weather information for different cities
                with a clean and user-friendly interface.
              </p>
              <Button
                link="https://react-weather-app-eta-sandy.vercel.app/"
                className={but.btn}
                value={"view"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
