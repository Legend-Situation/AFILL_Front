import React from "react";
import * as s from "./style.css";

type InputProps = {
  type: "기여도" | "느낀점" | "경험" | "역할" | "기간";
  bigWidth?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

const InputContainer = ({ type, bigWidth, value, onChange }: InputProps) => {
  const inputConfig = {
    기여도: {
      title: "나의 기여도",
      placeholder: `기여한 부분을 작성해주세요.
- Design System 구축
- 사용자 흐름 (user flow) 설계
- 디자인 시스템 구축 및 운영
- 전체적인 기획
- 외부 라이브러리 사용`,
      isTextArea: true,
    },
    느낀점: {
      title: "느낀점 / 배운점",
      placeholder: `이 경험을 통해 얻은 교훈이나 느낀 점을 상세하게 작성해주세요.
예를 들어, 새로운 기술을 배우거나 팀 내에서의 협업을 통해 문제를 해결했던 경험을 구체적으로 서술할 수 있습니다.
또한, 이 경험이 나의 성장에 어떤 영향을 미쳤는지 적어주세요.`,
      isTextArea: true,
    },
    경험: {
      title: "경험 제목",
      placeholder: "전공동아리 하프 UX/UI 디자이너",
      isTextArea: false,
    },
    역할: {
      title: "내가 맡았던 역할",
      placeholder: "ex) UX/UI 디자이너",
      isTextArea: false,
    },
    기간: {
      title: "기간",
      placeholder: "",
      isTextArea: false,
    },
  };

  const { title, placeholder, isTextArea } = inputConfig[type];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <main className={s.Layout}>
      <span className={s.Title}>
        {title}
        <span className={s.Star}>*</span>
      </span>
      {type === "기간" ? (
        <div className={s.PeriodInputContainer}>
          <input type="number" className={s.InputPeriod} placeholder="YYYY" onChange={handleChange} />
          <input type="number" className={s.InputPeriod} placeholder="MM" onChange={handleChange} />
          <span className={s.GrayText}>~</span>
          <input type="number" className={s.InputPeriod} placeholder="YYYY" onChange={handleChange} />
          <input type="number" className={s.InputPeriod} placeholder="MM" onChange={handleChange} />
        </div>
      ) : isTextArea ? (
        <textarea
          className={bigWidth ? s.BigInput : s.Input}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type="text"
          className={s.Input}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
    </main>
  );
};

export default InputContainer;