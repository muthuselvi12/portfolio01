import React from "react";
// import styling from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <a href={props.link}>
        <button className={props.className}>{props.value}</button>
      </a>
    </>
  );
};

export default Button;
