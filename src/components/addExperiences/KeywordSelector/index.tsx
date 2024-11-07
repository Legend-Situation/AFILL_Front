import React, { useState, KeyboardEvent } from 'react';
import * as s from './style.css';
import Keyword from '@/components/keyword';
import Button from '@/components/button';

interface KeywordSelectorProps {
  selectedKeywords: string[];
  setSelectedKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  keywordText: { id: number; text: string }[];
  setKeywordText: React.Dispatch<
    React.SetStateAction<{ id: number; text: string }[]>
  >;
}

const KeywordSelector = ({
  selectedKeywords,
  setSelectedKeywords,
  keywordText,
  setKeywordText
}: KeywordSelectorProps) => {
  const [newKeyword, setNewKeyword] = useState<string>('');

  const handleKeywordClick = (keyword: string) => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    } else if (selectedKeywords.length < 4) {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const handleAddKeyword = () => {
    if (newKeyword && selectedKeywords.length < 4) {
      if (selectedKeywords.includes(newKeyword)) {
        alert('이미 선택된 키워드입니다.');
        return;
      }
      if (!keywordText.some((k) => k.text === newKeyword)) {
        const newId =
          keywordText.length > 0
            ? Math.max(...keywordText.map((k) => k.id)) + 1
            : 1;
        if (selectedKeywords.length >= 4) {
          const updatedKeywords = selectedKeywords.slice(1);
          setSelectedKeywords([...updatedKeywords, newKeyword]);
        } else {
          setSelectedKeywords([...selectedKeywords, newKeyword]);
        }
        setKeywordText([...keywordText, { id: newId, text: newKeyword }]);
        setNewKeyword('');
      }
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddKeyword();
    }
  };

  return (
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
      </div>
      <div className={s.AddKeywordInputContainer}>
        <input
          placeholder="키워드 직접 추가하기 ex)겸손함"
          className={s.AddKeywordInput}
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          text="추가"
          color={
            newKeyword.length > 0 && selectedKeywords.length < 5
              ? 'blue'
              : 'gray'
          }
          onClick={handleAddKeyword}
        />
      </div>
    </div>
  );
};

export default KeywordSelector;
