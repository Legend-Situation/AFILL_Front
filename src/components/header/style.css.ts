import { style } from '@vanilla-extract/css';
import { theme } from "@ui/style/theme.css";
import { font } from "@ui/style/font.css";


export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  borderBottom: `1px solid ${theme.gray[50]}`,
  padding: '0 200px',
  height: '76px',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
});

export const menu = style({
  display: 'flex',
  gap: '50px',
  marginRight: '300px',
});

export const menuItem = style({
  ...font.H4,
  color: theme.gray.black,
  textDecoration: 'none',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

export const active = style({
  color: theme.primary[600],
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    right: 0,
    height: '3px',
    backgroundColor: theme.primary[600],
  },
});

export const profile = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

export const profileName = style({
  ...font.btn1,
  color: theme.gray.black,
});

export const profileIcon = style({
  width: '42px',
  height: '42px',
  backgroundColor: '#eaeaea',
  borderRadius: '100%',
});
