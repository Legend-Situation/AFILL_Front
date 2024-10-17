"use client";

import React, { useState } from "react";
import * as s from "./style.css";
import InputContainer from "@/components/inputContainer";
import Button from "@/components/button";
import KeywordSelector from "@/components/addExperiences/KeywordSelector";
import ThumbnailUploader from "@/components/addExperiences/ThumbnailUploader";
import { keywordText } from "./constants";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddExperience = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    경험: "",
    기간: { startYear: "", startMonth: "", endYear: "", endMonth: "" },
    역할: "",
    기여도: "",
    느낀점: "",
  });

  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePeriodChange = (subField: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      기간: { ...prev.기간, [subField]: value }
    }));
  };

  const createExperience = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("Access token not found");
        return;
      }

      const { data } = await axios.post(
        "https://afill.legend-situation.kro.kr/cards/",
        {
          cardTitle: formData.경험,
          startDate: `${formData.기간.startYear}.${formData.기간.startMonth}`,
          endDate: `${formData.기간.endYear}.${formData.기간.endMonth}`,
          keyword: selectedKeywords.join(", "),
          role: formData.역할,
          impressions: formData.느낀점,
          imgUrl: thumbnail
        },
        {
          headers: {
            accessToken: accessToken
          }
        }
      );
      router.push(`/experiences`);
      
      console.log("Card created successfully:", data);
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  const inputSections = [
    { type: "경험" as const },
    { type: "기간" as const },
    {
      custom: (
        <KeywordSelector
          selectedKeywords={selectedKeywords}
          setSelectedKeywords={setSelectedKeywords}
          keywordText={keywordText}
        />
      ),
    },
    { type: "역할" as const },
    { type: "기여도" as const, bigWidth: true },
    { type: "느낀점" as const, bigWidth: true },
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
              <InputContainer 
                type={section.type} 
                bigWidth={section.bigWidth}
                onChange={(value) => handleInputChange(section.type, value)}
                onPeriodChange={section.type === "기간" ? handlePeriodChange : undefined}
              />
            )}
          </div>
        ))}
      </div>
      <Button text="경험카드 등록" color="blue" onClick={createExperience}/>
    </main>
  );
};

export default AddExperience;
