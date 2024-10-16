import React from "react";
import * as s from "./style.css";

type KeywordProps = {
  text: string;
  isSelected: boolean;
  onClick: () => void;
};

const Keyword = ({ text, isSelected, onClick }: KeywordProps) => {
  return (
    <main
      className={`${s.Layout} ${isSelected ? s.Selected : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </main>
  );
};

export default Keyword;