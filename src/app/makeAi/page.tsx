'use client';

import React from 'react';
import * as s from './style.css';
import Keyword from '@/components/keyword';

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

const MakeAi = () => {
  return (
    <div className={s.Layout}>
      <div className={s.cardLayout}>
        <div className={s.titleContainer}>
          <div className={s.myExperienceCard}>나의 경험카드 💭</div>
          <div className={s.subTitle}>
            내가 만든 경험카드로 AI가 자기소개서를 첨삭해줘요! (최대 3개
            선택가능)
          </div>
        </div>
      <div className={s.cardContainer}>

        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={s.card}>
              <div className={s.cardDate}>2024.10. ~ 2024.11.</div>
              <div className={s.cardTitle}>전공동아리 UX/UI 디자이너</div>
              <div className={s.tagContainer}>
                <Keyword></Keyword>
                <span className={s.tag}>#비대면진행</span>
                <span className={s.tag}>#비대면진행</span>
              </div>
            </div>
          ))}
      </div>
          </div>

      <div className={s.rightSection}>
        <h3>제목을 입력해주세요</h3>
        <div className={s.textContent}>AI가 자기소개서를 첨삭중입니다...</div>
        <button className={s.submitButton}>자기소개서 만들기</button>
      </div>
    </div>
  );
};

export default MakeAi;
