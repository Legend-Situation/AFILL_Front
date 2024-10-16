import React from "react";
import * as s from "./style.css";

type KeywordProps = {
  text: string;
};

const Keyword = ({ text }: KeywordProps) => {
  return (
    <main className={s.Layout}>
      <span>{text}</span>
    </main>
  );
};

export default Keyword;
