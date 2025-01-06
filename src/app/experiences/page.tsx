"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import SortButton from "@/components/sortButton";
import Card from "@/components/experiences/card";
import * as s from "./style.css";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

type SortType = "최신순" | "등록순";

type CardData = {
  cardId: number;
  cardTitle: string;
  startDate: string;
  endDate: string;
  keyword: string;
  role: string;
  impressions: string;
  imgUrl: string | null;
};

type ApiResponse = {
  status: number;
  success: boolean;
  message: string;
  data: CardData[];
};

const Experiences = () => {
  const [currentSort, setCurrentSort] = useState<SortType>("최신순");
  const [cards, setCards] = useState<CardData[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    const sortedCards = sortCards(cards);
    setCards(sortedCards);
  }, [currentSort]);

  const fetchCards = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("Access token not found");
        return;
      }

      const response = await axios.get<ApiResponse>(
        "https://afill-back.hash-squad.kro.kr/cards/",
        {
          headers: {
            accessToken: accessToken,
          },
        }
      );
      
      setCards(response.data.data);
    } catch (error) {
      console.error("카드 가져오기 오류:", error);
    }
  };

  const sortCards = (cards: CardData[]): CardData[] => {
    if (!Array.isArray(cards)) {
      console.error("카드가 배열이 아닙니다:", cards);
      return [];
    }
    return [...cards].sort((a, b) => {
      const dateA = new Date(a.startDate.replace(".", "-"));
      const dateB = new Date(b.startDate.replace(".", "-"));
      if (currentSort === "최신순") {
        return dateB.getTime() - dateA.getTime();
      } else {
        return dateA.getTime() - dateB.getTime();
      }
    });
  };

  const handleAddExperience = () => {
    router.push("/addExperiences");
  };

  return (
    <div className={s.Layout}>
      <div className={s.ButtonContainer}>
        <SortButton currentSort={currentSort} onSortChange={setCurrentSort} />
        <Button
          text="경험카드 등록"
          color="blue"
          onClick={handleAddExperience}
        />
      </div>
      <div className={s.Container}>
        {cards.map((cardData) => (
          <Card
            key={cardData.cardId}
            data={{
              date: { start: cardData.startDate, end: cardData.endDate },
              title: cardData.cardTitle,
              contents: cardData.impressions,
              keywords: cardData.keyword.split(", "),
              imgUrl: cardData.imgUrl || "",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
