"use client"; // Fixed typo

import React, { useState } from "react";
import * as s from "./style.css";
import InputContainer from "@/components/inputContainer";
import Keyword from "@/components/keyword";
import Button from "@/components/button";

const AddExperience = () => {
  const keywordText = [
    { id: 1, text: "인내심" },
    { id: 2, text: "책임감" },
    { id: 3, text: "협력" },
    { id: 4, text: "창의력" },
    { id: 5, text: "리더십" },
    { id: 6, text: "문제 해결" },
    { id: 7, text: "의사소통" },
    { id: 8, text: "적응력" },
    { id: 9, text: "끈기" },
    { id: 10, text: "신속함" },
    { id: 11, text: "기획력" },
    { id: 12, text: "논리적 사고" },
    { id: 13, text: "친화력" },
    { id: 14, text: "감각적" },
    { id: 15, text: "섬세함" },
    { id: 16, text: "정확성" },
    { id: 17, text: "설득력" },
    { id: 18, text: "주도적" },
    { id: 19, text: "꼼꼼함" },
    { id: 20, text: "유연함" },
    { id: 22, text: "열정" },
    { id: 23, text: "시간 관리" },
  ];

  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [newKeyword, setNewKeyword] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleKeywordClick = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const handleAddKeyword = () => {
    if (newKeyword && !selectedKeywords.includes(newKeyword)) {
      setSelectedKeywords([...selectedKeywords, newKeyword]);
      setNewKeyword("");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  const inputSections = [
    { type: "경험" },
    { type: "기간" },
    {
      custom: (
        <div className={s.CustomContainer}>
          <span className={s.CustomTitle}>
            역량 키워드 <span className={s.Star}>*</span>
          </span>
          <span className={s.CustomerSubtitle}>최대 4개 선택가능</span>
          <div className={s.KeywordContainer}>
            {keywordText.map((keyword) => (
              <Keyword
                text={keyword.text}
                key={keyword.id}
                isSelected={selectedKeywords.includes(keyword.text)}
                onClick={() => handleKeywordClick(keyword.text)}
              />
            ))}
            {selectedKeywords.map((keyword, index) => (
              <Keyword
                text={keyword}
                key={`custom-${index}`}
                isSelected={true}
                onClick={() => handleKeywordClick(keyword)}
              />
            ))}
          </div>
          <div className={s.AddKeywordInputContainer}>
            <input
              placeholder="키워드 직접 추가하기 ex)겸손함"
              className={s.AddKeywordInput}
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
            />
            <Button
              text="추가"
              color={newKeyword.length > 0 ? "blue" : "gray"}
              onClick={handleAddKeyword}
            />
          </div>
        </div>
      ),
    },

    { type: "역할" },
    { type: "기여도", bigWidth: true },
    { type: "느낀점", bigWidth: true },
    {
      custom: (
        <div className={s.ThumbnailUp}>
          <div className={s.ThumbnailUpTextContainer}>
            <span className={s.ThumbnailUpMainText}>썸네일 업로드</span>
            <span className={s.ThumbnailUpText}>
              경험과 관련있는 이미지 파일을 업로드해주세요.
            </span>
          </div>
          <div className={s.UpBtn}>
            <Button
              text="파일 업로드"
              color="blue"
              onClick={() => document.getElementById("fileInput")?.click()} // Only one button click trigger
            />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className={s.FileInput}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
          {thumbnail && (
            <div className={s.ThumbnailPreviewContainer}>
              <img
                src={thumbnail}
                alt="미리보기"
                className={s.ThumbnailImage}
              />
            </div>
          )}
        </div>
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
    </main>
  );
};

export default AddExperience;
