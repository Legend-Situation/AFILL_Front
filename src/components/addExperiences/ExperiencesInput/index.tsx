import React from 'react';
import * as s from './style.css';

interface DateValue {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
}

interface OwnProps {
  title: string;
  placeholder: string;
  provider: 'text' | 'textarea' | 'date';
  value: string | DateValue;
  max: number;
  star: boolean;
  onChangeMethod: (value: any) => void;
}

const ExperiencesInput = ({
  title,
  placeholder,
  provider,
  value,
  max,
  star,
  onChangeMethod
}: OwnProps) => {
  const handleNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof DateValue
  ) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');

    if (field.includes('Year')) {
      if (inputValue.length <= 4) {
        const newValue = { ...(value as DateValue), [field]: inputValue };
        onChangeMethod(newValue);
      }
    } else if (field.includes('Month')) {
      let monthValue = inputValue;
      if (monthValue !== '') {
        const monthNum = parseInt(monthValue);
        if (monthNum > 12) monthValue = '12';
        if (monthNum < 1) monthValue = '1';
      }
      const newValue = { ...(value as DateValue), [field]: monthValue };
      onChangeMethod(newValue);
    }
  };

  return (
    <div className={s.inputLayout}>
      <span className={s.inputTitle}>
        {title}
        {star ? <span className={s.inputStar}>*</span> : ''}
      </span>
      {provider === 'text' ? (
        <>
          <input
            type="text"
            className={s.input}
            maxLength={max}
            value={value as string}
            placeholder={placeholder}
            onChange={(e) => onChangeMethod(e.target.value)}
          />
          <div className={s.counter}>
            {String(value).length}/{max}
          </div>
        </>
      ) : provider === 'date' ? (
        <div className={s.periodInputContainer}>
          <input
            type="text"
            className={s.yearInput}
            placeholder="YYYY"
            value={(value as DateValue).startYear}
            onChange={(e) => handleNumberInput(e, 'startYear')}
          />
          <input
            type="text"
            className={s.monthInput}
            placeholder="MM"
            value={(value as DateValue).startMonth}
            onChange={(e) => handleNumberInput(e, 'startMonth')}
          />
          <span className={s.separator}>~</span>
          <input
            type="text"
            className={s.yearInput}
            placeholder="YYYY"
            value={(value as DateValue).endYear}
            onChange={(e) => handleNumberInput(e, 'endYear')}
          />
          <input
            type="text"
            className={s.monthInput}
            placeholder="MM"
            value={(value as DateValue).endMonth}
            onChange={(e) => handleNumberInput(e, 'endMonth')}
          />
        </div>
      ) : (
        <>
          <textarea
            className={s.bigInput}
            maxLength={max}
            value={value as string}
            placeholder={placeholder}
            onChange={(e) => onChangeMethod(e.target.value)}
          />
          <div className={s.counter}>
            {String(value).length}/{max}
          </div>
        </>
      )}
    </div>
  );
};

export default ExperiencesInput;
