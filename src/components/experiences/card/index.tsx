"use client";

import React from "react";
import * as S from "./style.css";
import Keyword from "../keyword";

interface CardProps {
    data: {
        date: {
            start: string;
            end: string;
        };
        title: string;
        contents: string;
        keywords: string[];
    };
}

const Card = ({ data }: CardProps) => {
    const maxLength = 45; // 최대 글자 수 설정
    const trimmedContents = data.contents.length > maxLength
        ? `${data.contents.substring(0, maxLength)}...`
        : data.contents;

    return (
        <div className={S.Card}>
            <div className={S.CardContent}>
                <p className={S.DateRange}>
                    {data.date.start} ~ {data.date.end}
                </p>
                <h2 className={S.CardTitle}>{data.title}</h2>
                <p className={S.CardContents}>{trimmedContents}</p>
                <Keyword keywords={data.keywords} />
            </div>
            <div className={S.CardImage}></div>
        </div>
    );
};

export default Card;