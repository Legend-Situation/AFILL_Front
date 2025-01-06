"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import SortButton from "@/components/sortButton";
import Card from "@/components/experiences/card";
import * as s from "./style.css";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

const SelfIntroduction = () => {
  const router = useRouter();

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
        <div className={s.card}>
          <span>강민지의 자소서 1</span>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroduction;
