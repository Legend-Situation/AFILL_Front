import React from "react";
import * as s from "./style.css";
import classNames from "classnames";

type ButtonProps = {
  text: string;
  color: "gray" | "blue";
};

const Button = ({ text, color }: ButtonProps) => {
  const buttonClass = classNames(s.Button, {
    [s.grayButton]: color === "gray",
    [s.blueButton]: color === "blue",
  });

  return <button className={buttonClass}>{text}</button>;
};

export default Button;
