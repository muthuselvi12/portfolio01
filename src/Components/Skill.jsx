import React from "react";
import Skilled from "./Skill.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skill = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Github", level: 90 },
    { name: "Git", level: 90 },
    { name: "Vercel", level: 95 },
    { name: "Netify", level: 95 },
    { name: "Vscode", level: 95 },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section className={Skilled.sectioned} id="skill">
        <p data-aos="fade-up" data-aos-anchor-placement="top">
          <b>Here's what I'm good at</b>
        </p>
        <div className={Skilled.back} data-aos="fade-up">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className={Skilled.title}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className={Skilled.progressbar}>
                <div
                  className={Skilled.progress}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;
