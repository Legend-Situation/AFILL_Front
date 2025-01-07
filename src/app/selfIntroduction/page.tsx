'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import * as s from "./style.css";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

interface Introduction {
  introductionId: number;
  title: string;
  des: string;
  cards: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
}

interface ApiResponse {
  status: number;
  success: boolean;
  message: string;
  data: Introduction[];
}

const SelfIntroduction = () => {
  const router = useRouter();
  const [introductions, setIntroductions] = useState<Introduction[]>([]);

  useEffect(() => {
    fetchIntroductions();
  }, []);

  const fetchIntroductions = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found');
        return;
      }

      const response = await axios.get<ApiResponse>(
        'https://afill-back.hash-squad.kro.kr/introduction',
        {
          headers: {
            accessToken: accessToken
          }
        }
      );

      if (response.data.success) {
        setIntroductions(response.data.data);
      }
    } catch (error) {
      console.error('자기소개서 조회 오류:', error);
    }
  };

  return (
    <div className={s.Layout}>
      <div className={s.header}>
        <div className={s.TitleContainer}>
          <div className={s.title}>내가 작성한 자기소개서</div>
          <div className={s.subTitle}>AI로 쉽고 정밀한 자기소개서를 작성해보세요!</div>
        </div>
        <Button 
          text="새로운 Ai 자기소개서 작성"
          color="blue"
          onClick={() => router.push('/makeAi')} 
        />
      </div>
      <div className={s.cardList}>
        {introductions.length === 0 ? (
          <div className={s.emptyMessage}>작성된 자기소개서가 없습니다</div>
        ) : (
          introductions.map((intro) => (
            <div key={intro.introductionId} className={s.card}>
              <div>{intro.title}</div>
              <p className={s.date}>{new Date(intro.createdAt).toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SelfIntroduction;
