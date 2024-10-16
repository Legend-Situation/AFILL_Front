"use client";

import React from "react";
import * as s from "./style.css";
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
    const maxLength = 45;
    const trimmedContents = data.contents.length > maxLength
        ? `${data.contents.substring(0, maxLength)}...`
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