import React from "react";
import * as s from "./style.css";
import { Logo } from "@ui/src/assets";
import { Google } from "@ui/src/icons";

const Login = () => {
  return (
    <div className={s.container}>
      <h1 className={s.logo}>
        <Logo />
      </h1>
      <p className={s.description}>
        지긋지긋한 자기소개서, 어필로 시작해보세요.
      </p>
      <button className={s.googleButton}>
        <Google />
        Google로 로그인
      </button>
    </div>
  );
};

export default Login;
