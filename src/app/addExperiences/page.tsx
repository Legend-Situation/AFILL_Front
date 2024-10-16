import React from "react";
import * as s from "./style.css";

const page = () => {
  return (
    <main className={s.Layout}>
      <span className={s.Title}>경험 카드 추가하기</span>
      <span className={s.Subtitle}>
        프로젝트 / 수상 / 자격증 등 직무와 관련된 경험을 작성해주세요.
      </span>
      <figure className={s.InputContainer}>
        <div className={s.InputContainerBox}>
          <span className={s.InputTitle}>
            경험 <span className={s.Star}>*</span>
          </span>
          <input className={s.E}
        </div>
      </figure>
    </main>
  );
};

export default page;
