'use client';

import React, { useState } from 'react';
import * as s from './style.css';
import Button from '@/components/button';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ExperiencesInput from '@/components/addExperiences/ExperiencesInput';
import KeywordSelector from '@/components/addExperiences/KeywordSelector';
import { keywordTexts } from './constants';
import ThumbnailUploader from '../../components/addExperiences/ThumbnailUploader';

interface DateValue {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
}

const AddExperience = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    제목: '',
    기간: {
      startYear: '',
      startMonth: '',
      endYear: '',
      endMonth: ''
    },
    역할: '',
    기여도: '',
    느낀점: ''
  });

  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [keywordText, setKeywordText] =
    useState<{ id: number; text: string }[]>(keywordTexts);

  console.log(selectedKeywords);

  const createExperience = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        alert('Access token이 없습니다. 로그인 후 다시 시도해주세요.');
        return;
      }

      const { 제목, 역할, 기여도, 느낀점 } = formData;
      const regex = /.+/;

      if (
        !regex.test(제목) ||
        !regex.test(역할) ||
        !regex.test(기여도) ||
        !regex.test(느낀점)
      ) {
        alert('모든 필드를 채워주세요.');
        return;
      }

      const formatDate = (year: string, month: string) => {
        if (!year || !month) return '';
        return `${year}.${month.padStart(2, '0')}`;
      };

      const { data } = await axios.post(
        'https://afill-back.hash-squad.kro.kr/cards/',
        {
          cardTitle: formData.제목,
          startDate: formatDate(
            formData.기간.startYear,
            formData.기간.startMonth
          ),
          endDate: formatDate(formData.기간.endYear, formData.기간.endMonth),
          keyword: selectedKeywords.join(', '),
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
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  const handleDateChange = (dateValue: DateValue) => {
    setFormData((prev) => ({
      ...prev,
      기간: dateValue
    }));
  };

  const handleThumbnailUpload = (url: string) => {
    setThumbnail(url);
  };

  return (
    <main className={s.Layout}>
      <span className={s.Title}>경험 카드 추가하기</span>
      <span className={s.Subtitle}>
        프로젝트 / 수상 / 자격증 등 직무와 관련된 경험을 작성해주세요.
      </span>
      <div className={s.InputLayout}>
        <ExperiencesInput
          title="경험제목"
          placeholder="전공동아리 하프 UX/UI 디자이너"
          provider="text"
          star
          max={30}
          value={formData.제목}
          onChangeMethod={(value: string) => {
            setFormData((prev) => ({ ...prev, 제목: value }));
          }}
        />

        <ExperiencesInput
          title="기간"
          placeholder=""
          provider="date"
          star
          max={10}
          value={formData.기간}
          onChangeMethod={handleDateChange}
        />

        <KeywordSelector
          selectedKeywords={selectedKeywords}
          setSelectedKeywords={setSelectedKeywords}
          keywordText={keywordText}
          setKeywordText={setKeywordText}
        />

        <ExperiencesInput
          title="내가 맡았던 역할"
          placeholder="ex) UX/UI 디자이너"
          provider="text"
          star
          max={10}
          value={formData.역할}
          onChangeMethod={(value: string) => {
            setFormData((prev) => ({ ...prev, 역할: value }));
          }}
        />

        <ExperiencesInput
          title="나의 기여도"
          placeholder={`기여한 부분을 작성해주세요.
            · Design System 구축
            · 사용자 흐름 (user flow) 설계
            · 디자인 시스템 구축 및 운영
            · 전체적인 기획
            · 외부 라이브러리 사용`}
          provider="textarea"
          star
          max={150}
          value={formData.기여도}
          onChangeMethod={(value: string) => {
            setFormData((prev) => ({ ...prev, 기여도: value }));
          }}
        />

        <ExperiencesInput
          title="느낀점 / 배운점"
          placeholder={`이 경험을 통해 얻은 교훈이나 느낀 점을 상세하게 작성해주세요.
예를 들어, 새로운 기술을 배우거나 팀 내에서의 협업을 통해 문제를 해결했던 경험을 구체적으로 서술할 수 있습니다.
또한, 이 경험이 나의 성장에 어떤 영향을 미쳤는지 적어주세요.`}
          provider="textarea"
          star
          max={150}
          value={formData.느낀점}
          onChangeMethod={(value: string) => {
            setFormData((prev) => ({ ...prev, 느낀점: value }));
          }}
        />

        <ThumbnailUploader
          setThumbnail={setThumbnail}
          thumbnail={thumbnail}
          onUploadComplete={handleThumbnailUpload}
        />
      </div>
      <Button
        text="경험카드 추가하기"
        color="gray"
        onClick={createExperience}
      />
    </main>
  );
};

export default AddExperience;
