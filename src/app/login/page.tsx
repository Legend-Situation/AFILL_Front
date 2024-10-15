import React from "react";
import * as s from "./style.css";

const Login = () => {
  return (
    <div className={s.container}>
      <h1 className={s.logo}>AFILL.</h1>
      <p className={s.description}>
        지긋지긋한 자기소개서, 어필로 시작해보세요.
      </p>
      <button className={s.googleButton}>
        <img
          className={s.googleIcon}
          src="/icons/google-icon.svg"
          alt="Google Logo"
        />
        Google로 로그인
      </button>
    </div>
  );
};

export default Login;

