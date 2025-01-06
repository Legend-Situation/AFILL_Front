"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import SortButton from "@/components/sortButton";
import Card from "@/components/experiences/card";
import * as s from "./style.css";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

const selfIntroduction = () => {
  const router = useRouter();

  return (
    <div className={s.Layout}>
      <div className={s.header}>
        <h1 className={s.title}>내가 작성한 자기소개서</h1>
        <Button 
          text="새로운 Ai 자기소개서 작성"
          color="blue"
          onClick={() => router.push('/self-introduction/new')} 
        />
      </div>
      <div className={s.cardList}>
        <div className={s.card}>
          <span>2023 카카오 인턴십 지원</span>
        </div>
      </div>
    </div>
  );
};

export default selfIntroduction;
