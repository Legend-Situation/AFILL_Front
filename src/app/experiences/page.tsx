"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import SortButton from "@/components/sortButton";
import Card from "@/components/experiences/card";
import * as s from "./style.css";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

type SortType = "최신순" | "등록순";

interface CardData {
  cardId: number;
  cardTitle: string;
  startDate: string;
  endDate: string;
  keyword: string;
  role: string;
  impressions: string;
  imgUrl: string | null;
}

interface axiosResponse {
  status: number;
  success: boolean;
  message: string;
  data: CardData[];
}

const Experiences = () => {
  const [currentSort, setCurrentSort] = useState<SortType>("최신순");
  const [cards, setCards] = useState<CardData[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("Access token not found");
        return;
      }

      const response = await axios.get<ApiResponse>(
        "https://afill.legend-situation.kro.kr/cards/",
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
      console.error("Cards is not an array:", cards);
      return [];
    }
    return [...cards].sort((a, b) => {
      if (currentSort === "최신순") {
        return (
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
      } else {
        return (
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );
      }
    });
  };

  const handleAddExperience = () => {
    router.push("/addExperiences");
  };

  const sortedCards = sortCards(cards);

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
        {sortedCards.map((cardData) => (
          <Card
            key={cardData.cardId}
            data={{
              date: { start: cardData.startDate, end: cardData.endDate },
              title: cardData.cardTitle,
              contents: cardData.impressions,
              keywords: cardData.keyword.split(", "),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
