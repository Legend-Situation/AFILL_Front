import { style } from '@vanilla-extract/css';
import { theme } from "@ui/style/theme.css";
import { font } from "@ui/style/font.css";

export const Button = style({
  ...font.btn1,
  backgroundColor: theme.primary[600],
  color: theme.gray.white,
  border: 'none',
  borderRadius: '12px',
  padding: '12px 20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease', // 호버 시 부드러운 전환
});