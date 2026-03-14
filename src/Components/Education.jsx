import React from "react";
import style from "./Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import png from '../assets/education.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Education = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);

  return (
    <>
      <section className={style.hole} id="education" >
        <p className={style.edutant}   data-aos="fade-up"
        data-aos-anchor-placement="top" > <b>EDUCATION</b></p>
        <div className={style.whole}>
          <div className={style.ed} data-aos="flip-left">
            
              <img src={png} alt=""/>
            
          </div>

          <div className={style.education}>
            <div className={style.divs}>
              <p className={style.date}>
                <FontAwesomeIcon icon={faCalendar} style={{ color: "white" }} />{" "}
                2022-2026
              </p>
              <p>BTECH | GCPA-8.5</p>
              <p className={style.clg}>
                ARUNACHALA COLLEGE OF ENGINEERING FOR WOMEN
              </p>
            </div>
            <div className={style.divs}>
              <p className={style.date}>
                <FontAwesomeIcon icon={faCalendar} style={{ color: "white" }} />{" "}
                2022
              </p>
              <p>HSC-82%</p>
              <p className={style.clg}>
                S.N.M.HINDU VIDYALAYA MATRIC.HR.SEC. SCHOOL
              </p>
            </div>
            <div className={style.divs}>
              <p className={style.date}>
                <FontAwesomeIcon icon={faCalendar} style={{ color: "white" }} />{" "}
                2020
              </p>
              <p>SSLC-63.8%</p>
              <p className={style.clg}>
                S.N.M.HINDU VIDYALAYA MATRIC.HR.SEC. SCHOOL
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
