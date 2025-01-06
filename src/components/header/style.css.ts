import { style } from '@vanilla-extract/css';
import { theme } from '@ui/style/theme.css';
import { font } from '@ui/style/font.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderBottom: `1px solid ${theme.gray[50]}`,
  padding: '0 200px',
  height: '76px'
});


export const menu = style({
  display: 'flex',
  gap: '50px'
});

export const menuItem = style({
  ...font.p1,
  color: theme.gray.black,
  textDecoration: 'none',
  height: '76px', // 컨테이너 높이와 동일하게 설정
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  padding: '0 12px' // 좌우 여백 추가
});

export const active = style({
  color: theme.primary[600],
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-1px', // 헤더의 borderBottom과 정확히 일치하도록 조정
    left: 0,
    width: '100%',
    height: '3px',
    backgroundColor: theme.primary[600]
  }
});


export const profile = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
});

export const profileName = style({
  ...font.btn1,
  color: theme.gray.black
});

export const profileIcon = style({
  width: '44px',
  height: '44px',
  backgroundColor: '#eaeaea',
  borderRadius: '100%'
});
