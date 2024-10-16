import React from 'react';
import * as s from './style.css';

type ButtonProps = {
  text: string;
}

const AddExperienceButton = ({ text }: ButtonProps) => {
  return (
    <button className={s.Button}>
      {text}
    </button>
  );
};

export default AddExperienceButton;