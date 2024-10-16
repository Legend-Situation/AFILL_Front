'use client';

import React from "react";
import * as s from "./style.css";
import { Logo } from "@ui/src/assets";
import { Google } from "@ui/src/icons";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "https://afill.legend-situation.kro.kr/auth/google";
  };

  return (
    <div className={s.Container}>
      <Logo />
      <p className={s.Description}>
        지긋지긋한 자기소개서, 어필로 시작해보세요.
      </p>
      <button className={s.GoogleButton} onClick={handleLogin}>
        <Google />
        <span className={s.GoogleButtonText}>Google로 로그인</span>
      </button>
    </div>
  );
};

export default Login;