'use client';

import React from 'react';
import * as s from './style.css';
import Keyword from '../keyword';
import Image from 'next/image';

interface CardProps {
  data: {
    date: {
      start: string;
      end: string;
    };
    title: string;
    contents?: string;
    keywords?: string[];
    imgUrl: string;
  };
}

const Card = ({ data }: CardProps) => {
  const maxContentLength = 45;
  const maxTitleLength = 16;

  const trimText = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  const trimmedTitle = trimText(data.title, maxTitleLength);
  const trimmedContents = data.contents
    ? trimText(data.contents, maxContentLength)
    : '';

  return (
    <div className={s.Card}>
      <p className={s.DateRange}>
        {data.date.start} ~ {data.date.end}
      </p>
      <h2 className={s.CardTitle} title={data.title}>
        {trimmedTitle}
      </h2>
      <p className={s.CardContents}>{trimmedContents}</p>
      {data.keywords && <Keyword keywords={data.keywords} />}
      {data.imgUrl && (
        <Image
          src={data.imgUrl}
          alt={data.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '10px'
          }}
          unoptimized
        />
      )}
    </div>
  );
};

export default Card;
