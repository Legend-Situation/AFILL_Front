import React from "react";
import * as s from "./style.css";
import classNames from "classnames";

type ButtonProps = {
  text: string;
  color: "gray" | "blue";
  onClick?: () => void;
};

const Button = ({ text, color, onClick }: ButtonProps) => {
  const buttonClass = classNames(s.Button, {
    [s.grayButton]: color === "gray",
    [s.blueButton]: color === "blue",
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
