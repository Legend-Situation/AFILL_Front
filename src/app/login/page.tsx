import React from "react";
import * as s from "./style.css";
import { Logo } from "@ui/src/assets";
import { Google } from "@ui/src/icons";

const Login = () => {
  const onGoogleLogin = () => {
    window.location.href = "https://afill.legend-situation.kro.kr/api/auth/google";
  };
  return (
    <div className={s.Container}>
      <p className={s.Description}>
        지긋지긋한 자기소개서, 어필로 시작해보세요.
      </p>
      <button className={s.GoogleButton} onClick={onGoogleLogin}>
        <Google />
        <span className={s.GoogleButtonText}>Google로 로그인</span>
      </button>
    </div>
  );
};

export default Login;
