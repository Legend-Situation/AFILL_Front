"use client";

import * as s from "./style.css";

interface Props {
    keywords: string[];
}

const Keyword = ({ keywords }: Props) => {
    return (
        <div className={s.keywords}>
            {keywords.map((keyword, index) => (
                <p key={index} className={s.keyword}>
                    {keyword}
                </p>
            ))}
        </div>
    );
};

export default Keyword;