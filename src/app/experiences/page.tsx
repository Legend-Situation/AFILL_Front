"use client"

import React, { useState } from 'react';
import SortButton from '@/components/sortButton';
import Card from "@/components/experiences/card";
import * as s from "./style.css";
import Button from '@/components/button';

type SortType = '최신순' | '등록순';

const Experiences = () => {
    const [currentSort, setCurrentSort] = useState<SortType>('최신순');
    const cardsData = [
        {
            date: { start: "2024.10.", end: "2024.11." },
            title: "전공동아리 UX/UI 디자이너",
            contents: "저는 학교에서 친구들과 하는 프로젝트에서 디자이너 직무에 흥미를 느껴 디자인을 시작하게 되었습니다ㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
            keywords: ["커뮤니케이션", "디자인", "팀워크"],
        },
        {
            date: { start: "2025.01.", end: "2025.03." },
            title: "인턴십 프로그램 참여",
            contents: "대학교 3학년 때 참여한 인턴십 프로그램에서 실무 경험을 대학교 3학년 때 참여한 인턴십 프로그램에서 실무 경험을 쌓았습니다대학교 3학년 때 참여한 인턴십 프로그램에서 실무 경험을 쌓았습니다대학교 3학년 때 참여한 인턴십 프로그램에서 실무 경험을 쌓았습니다",
            keywords: ["실무경험", "프로젝트 관리", "협업"],
        },
        {
            date: { start: "2025.01.", end: "2025.03." },
            title: "인턴십 프로그램 참여합니다람쥐렁이니얼굴",
            contents: "대학교 3학년 때 참여한 인턴십 프로그램에서 실무 경험을 대학교 3학년 때 참여한 인턴십 프로그램에서 실무 경험을 쌓았습니다대학교 3학년 때 참여한 인턴십 프로그램에서 실무 경험을 쌓았습니다대학교 3학년 때 참여한 인턴십 프로그램에서 실무 경험을 쌓았습니다",
            keywords: ["실무경험", "프로젝트 관리", "협업"],
        }
    ];

    return (
        <div className={s.Layout}>
            <div className={s.ButtonContainer}>
                <SortButton currentSort={currentSort} onSortChange={setCurrentSort} />
                <Button text="경험카드 등록" color="blue" />
            </div>
            <div className={s.Container}>
                {cardsData.map((cardData, index) => (
                    <Card key={index} data={cardData} />
                ))}
            </div>
        </div>
    );
};

export default Experiences;
