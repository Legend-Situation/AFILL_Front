import { style } from '@vanilla-extract/css';
import { font } from '@ui/style/font.css';
import { theme } from '@ui/style/theme.css';

export const Layout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  background: theme.background,
  padding: '50px 200px'
});

export const header = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '32px'
});

export const title = style({
  ...font.h,
  color: theme.gray.black
});

export const cardList = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
});

export const card = style({
  width: '100%',
  padding: '24px',
  background: theme.white,
  borderRadius: '8px',
  border: `1px solid ${theme.gray[50]}`,
  cursor: 'pointer',
  ...font.p1,
  color: theme.gray.black,
  ':hover': {
    border: `1px solid ${theme.primary[600]}`
  }
});
