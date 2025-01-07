import { font, theme } from '@/ui/style';
import { style } from '@vanilla-extract/css';

export const inputLayout = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFF',
  padding: '40px 50px',
  borderRadius: '20px',
  border: '1px solid #F6F6F8',
  boxShadow: '0px 0px 10px 0px rgba(212, 212, 212, 0.25)',
  gap: '5px'
});

export const inputTitle = style({
  ...font.H4,
  color: theme.gray.black,
  paddingBottom: '8px'
});

export const inputStar = style({
  paddingLeft: '2px',
  color: theme.sub.red
});

export const periodInputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

export const baseInput = style({
  height: '32px',
  padding: '12px',
  border: `1px solid ${theme.gray[100]}`,
  borderRadius: '8px',
  fontSize: '16px',
  color: '#333333',
  backgroundColor: '#FFFFFF',
  outline: 'none',
  WebkitAppearance: 'none',
  '::placeholder': {
    color: '#CCCCCC'
  },
});

export const yearInput = style([
  baseInput,
  {
    width: '120px'
  }
]);

export const monthInput = style([
  baseInput,
  {
    width: '80px'
  }
]);

export const separator = style({
  color: '#999999',
  margin: '0 4px'
});

export const input = style([
  baseInput,
  {
    width: '98%'
  }
]);

export const bigInput = style([
  baseInput,
  {
    width: '98%',
    height: '180px',
    resize: 'none',
    '::placeholder': {
      color: '#CCC',
      fontSize: '14px',
      lineHeight: '25.6px'
    }
  }
]);

export const counter = style({
  alignSelf: 'flex-end',
  fontSize: '14px',
  color: '#999999'
});
