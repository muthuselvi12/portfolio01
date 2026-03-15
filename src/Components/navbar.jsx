// import React from "react";
import Styled from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <>
      <div className={Styled.bgclr}>
        <nav className={Styled.Navbar}>
          <div>
            <h1>MS</h1>
          </div>

          <div>
            <input type="checkbox" id="menu" className={Styled.check} />
            <label htmlFor="menu" className={Styled.checking}>
              <FontAwesomeIcon icon={faBars} style={{fontSize:'30px'}} />
            </label>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#skill">Skill</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>

            
                <li>
                  <a href="#contact">Contact</a>
                </li>
          
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default navbar;
