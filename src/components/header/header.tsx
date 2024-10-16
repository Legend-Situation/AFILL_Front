import React from 'react';
import { Logo } from '@/ui/src/assets';
import * as s from './style.css';

const Header = () => {
  return (
    <header className={s.container}>
        <Logo width={96} />
      <div className={s.menu}>
        <a href="#" className={`${s.menuItem} ${s.active}`}>경험카드</a>
        <a href="#" className={s.menuItem}>자기소개서</a>
      </div>
      <div className={s.profile}>
        <span>강민지님</span>
        <div className={s.profileIcon}></div>
      </div>
    </header>
  );
};

export default Header;