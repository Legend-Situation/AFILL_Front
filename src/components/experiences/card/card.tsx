"use client";

import React from "react";
import * as s from "./style.css";
import Keyword from "../keyword/keyword";

const Card = () => {
  const data = {
    date: {
      start: "2024.10.",
      end: "2024.11.",
    },
    title: "전공동아리 UX/UI 디자이너",
    contents:
      "저는 학교에서 친구들과 하는 프로젝트에서 디자이너 직무에 흥미를 느껴 디자인을 시작하게 되었습니다.ㄴ.저는 학교에서 친구들과 하는 프로젝트에서 디자이너 직무에 흥미를 느껴 디자인을 시작하게 되었습니다, 그리고 현업 경력이 엄청납니다.",
    keywords: ["커뮤니케이션", "커뮤니케이션", "커뮤니케이션"],
  };

  const trimmedContents =
    data.contents.length > 111
      ? `${data.contents.substring(0, 123)}...`
      : data.contents;

  return (
    <div className={s.Card}>
      <p className={s.DateRange}>
        {data.date.start} ~ {data.date.end}
      </p>
      <h2 className={s.CardTitle}>{data.title}</h2>
      <p className={s.CardContents}>{trimmedContents}</p>
      <Keyword keywords={data.keywords} />
      <div className={s.CardImage}></div>
    </div>
  );
};

export default Card;
