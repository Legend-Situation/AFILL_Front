import React from "react";
import * as s from "./style.css";

type inputProps = {
  type: string;
  bigWidth?: boolean;
};

const InputContainer = ({ type, bigWidth }: inputProps) => {
  const { title, placeholder } = (() => {
    if (type === "기여도") {
      return {
        title: "나의 기여도",
        placeholder: `기여한 부분을 작성해주세요.
- Design System 구축
- 사용자 흐름 (user flow) 설계
- 디자인 시스템 구축 및 운영
- 전체적인 기획
- 외부 라이브러리 사용`,
      };
    } else if (type === "느낀점") {
      return {
        title: "느낀점 / 배운점",
        placeholder: `이 경험을 통해 얻은 교훈이나 느낀 점을 상세하게 작성해주세요.
예를 들어, 새로운 기술을 배우거나 팀 내에서의 협업을 통해 문제를 해결했던 경험을 구체적으로 서술할 수 있습니다.
또한, 이 경험이 나의 성장에 어떤 영향을 미쳤는지 적어주세요.`,
      };
    } else if (type === "경험") {
      return {
        title: "경험 제목",
        placeholder: "전공동아리 하프 UX/UI 디자이너",
      };
    } else if (type === "역할") {
      return {
        title: "내가 맡았던 역할",
        placeholder: "ex) UX/UI 디자이너",
      };
    } else if (type === "기간") {
      return {
        title: "기간",
        placeholder: "",
      };
    }
    return { title: "", placeholder: "" };
  })();

  return (
    <main className={s.Layout}>
      <span className={s.Title}>
        {title}
        <span className={s.Star}>*</span>
      </span>
      {type === "기간" ? (
        <div className={s.PeriodInputContainer}>
          <input type="number" className={s.InputPeriod} placeholder="YYYY" />
          <input type="number" className={s.InputPeriod} placeholder="MM" />
          <span className={s.GrayText}>~</span>
          <input type="number" className={s.InputPeriod} placeholder="YYYY" />
          <input type="number" className={s.InputPeriod} placeholder="MM" />
        </div>
      ) : (
        <textarea
          className={bigWidth ? s.BigInput : s.Input}
          placeholder={placeholder}
        />
      )}
    </main>
  );
};

export default InputContainer;
