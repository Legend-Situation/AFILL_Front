"use client";

import React, { useState } from "react";
import * as s from "./style.css";

type KeywordProps = {
  text: string;
};

const Keyword = ({ text }: KeywordProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <main
      className={`${s.Layout} ${isSelected ? s.Selected : ""}`}
      onClick={handleClick}
    >
      <span>{text}</span>
    </main>
  );
};

export default Keyword;
