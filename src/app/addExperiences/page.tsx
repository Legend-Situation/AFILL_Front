"use client";

import React, { useState } from "react";
import * as s from "./style.css";
import InputContainer from "@/components/inputContainer";
import Button from "@/components/button";
import KeywordSelector from "@/components/addExperiences/KeywordSelector";
import ThumbnailUploader from "@/components/addExperiences/ThumbnailUploader";
import { keywordText } from "./constants";

const AddExperience = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const inputSections = [
    { type: "경험" },
    { type: "기간" },
    {
      custom: (
        <KeywordSelector
          selectedKeywords={selectedKeywords}
          setSelectedKeywords={setSelectedKeywords}
          keywordText={keywordText}
        />
      ),
    },
    { type: "역할" },
    { type: "기여도", bigWidth: true },
    { type: "느낀점", bigWidth: true },
    {
      custom: (
        <ThumbnailUploader
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
        />
      ),
    },
  ];

  return (
    <main className={s.Layout}>
      <span className={s.Title}>경험 카드 추가하기</span>
      <span className={s.Subtitle}>
        프로젝트 / 수상 / 자격증 등 직무와 관련된 경험을 작성해주세요.
      </span>
      <div className={s.InputLayout}>
        {inputSections.map((section, index) => (
          <div className={s.InputContainers} key={index}>
            {section.custom ? (
              section.custom
            ) : (
              <InputContainer type={section.type} bigWidth={section.bigWidth} />
            )}
          </div>
        ))}
      </div>
      <Button text="경험카드 등록" color="blue"/>
    </main>
  );
};

export default AddExperience;
