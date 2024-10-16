import React from 'react';
import * as s from './style.css';

type SortType = '최신순' | '등록순';

interface SortButtonProps {
  currentSort: SortType;
  onSortChange: (sort: SortType) => void;
}

const SortButton = ({ currentSort, onSortChange }: SortButtonProps) => {
  return (
    <div className={s.SortButtonContainer}>
      <button 
        className={`${s.SortButton} ${currentSort === '최신순' ? s.Selected : ''}`}
        onClick={() => onSortChange('최신순')}
      >
        최신순
      </button>
      <button 
        className={`${s.SortButton} ${currentSort === '등록순' ? s.Selected : ''}`}
        onClick={() => onSortChange('등록순')}
      >
        등록순
      </button>
    </div>
  );
};

export default SortButton;