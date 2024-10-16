import React from "react";
import * as s from "./style.css";
import classNames from "classnames"; // classnames 라이브러리 사용

type ButtonProps = {
  text: string;
  color: "gray" | "blue"; // color 속성 추가
};

const Button = ({ text, color }: ButtonProps) => {
  const buttonClass = classNames(s.Button, {
    [s.grayButton]: color === "gray",
    [s.blueButton]: color === "blue",
  });

  return <button className={buttonClass}>{text}</button>;
};

export default Button;
