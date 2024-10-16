import React from 'react';
import { Logo } from '@/ui/src/assets';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <Logo width={80} />
        <span className="logo-text">AFILL.</span>
      </div>
      <div className="menu">
        <a href="#" className="menu-item active">경험카드</a>
        <a href="#" className="menu-item">자기소개서</a>
      </div>
      <div className="profile">
        <span>강민지님</span>
        <div className="profile-icon"></div>
      </div>
    </div>
  );
};

export default Header;