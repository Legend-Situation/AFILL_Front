'use client';

import React, { useEffect, useState } from 'react';
import * as s from './style.css';
import Keyword from '@/components/keyword';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Card from '@/components/experiences/card';
import MiniCard from '@/components/makeAi/miniCard';
import Button from '@/components/button';

type ApiResponse = {
  status: number;
  success: boolean;
  message: string;
  data: CardData[];
};

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

const MakeAi = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [selectedCardContent, setSelectedCardContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        console.error('Access token not found');
        return;
      }

      const response = await axios.get<ApiResponse>(
        'https://afill-back.hash-squad.kro.kr/cards/',
        {
          headers: {
            accessToken: accessToken
          }
        }
      );

      setCards(response.data.data);
    } catch (error) {
      console.error('카드 가져오기 오류:', error);
    }
  };

  const handleCardClick = (cardId: number) => {
    setSelectedCards((prev) => {
      if (prev.includes(cardId)) {
        return prev.filter((id) => id !== cardId);
      }
      if (prev.length >= 3) return prev;
      return [...prev, cardId];
    });

    const selectedCard = cards.find((card) => card.cardId === cardId);
    if (selectedCard) {
      setSelectedCardContent(selectedCard.impressions);
    }
  };

  const handleGenerateIntroduction = async () => {
    try {
      setIsLoading(true);
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken || selectedCards.length === 0 || !title) {
        alert('카드를 선택하고 제목을 입력해주세요.');
        return;
      }
  
      const response = await axios.post(
        'https://afill-back.hash-squad.kro.kr/introduction',
        {
          title: title,
          cards: selectedCards       
        },
        {
          headers: {
            accessToken: accessToken
          }
        }
      );
  
      if (response.data.success) {
        setGeneratedContent(response.data.data.content);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('자기소개서 생성 오류:', error.response?.data || error.message);
        alert('자기소개서 생성 중 오류가 발생했습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };
  

  if (cards.length === 0) {
    return (
      <div className={s.emptyLayout}>
        <p>아직 경험카드를 만들지 않았어요</p>
        <Button
          text="경험카드 만들기"
          color="blue"
          onClick={() => router.push('/addExperiences')}
        />
      </div>
    );
  }

  return (
    <div className={s.Layout}>
      <div className={s.container}>
        <div className={s.leftLayout}>
          <div className={s.titleContainer}>
            <div className={s.myExperienceCard}>나의 경험카드 💭</div>
            <div className={s.subTitle}>
              내가 만든 경험카드로 AI가 자기소개서를 첨삭해줘요! (최대 3개
              선택가능)
            </div>
          </div>
          <div className={s.leftContainer}>
            <div className={s.cardContainer}>
              {cards.map((cardData) => (
                <div
                  key={cardData.cardId}
                  className={
                    selectedCards.includes(cardData.cardId)
                      ? s.selectedCard
                      : s.card
                  }
                  onClick={() => handleCardClick(cardData.cardId)}
                >
                  <MiniCard
                    data={{
                      date: {
                        start: cardData.startDate,
                        end: cardData.endDate
                      },
                      title: cardData.cardTitle,
                      keywords: cardData.keyword.split(', ')
                    }}
                  />
                </div>
              ))}
            </div>
            <div className={s.detailContainer}>
              {selectedCards.length === 0 ? (
                <div className={s.noSelection}>카드를 선택해주세요</div>
              ) : (
                selectedCards.map((selectedId) => {
                  const card = cards.find((c) => c.cardId === selectedId);
                  if (!card) return null;
                  return (
                    <div key={card.cardId} className={s.selectedCardDetail}>
                      <h4 className={s.selectedCardTitle}>{card.cardTitle}</h4>
                      <p className={s.selectedCardContent}>
                        {card.impressions}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className={s.rightLayout}>
          <input
            type="text"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={s.titleInput}
          />
          <div className={s.textContent}>{generatedContent}</div>
        <div className={s.buttonContainer}>
          {isLoading && (
            <div className={s.loading}>자기소개서를 첨삭중입니다...</div>
          )}
          <Button
            text="자기소개서 만들기"
            onClick={handleGenerateIntroduction}
            color={
              selectedCards.length === 0 || !title || isLoading
                ? 'gray'
                : 'blue'
            }
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAi;
