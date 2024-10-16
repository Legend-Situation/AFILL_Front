import { style } from '@vanilla-extract/css';
import { theme } from "@ui/style/theme.css";
import { font } from "@ui/style/font.css";


export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderBottom: `1px solid ${theme.gray[50]}`,
  padding: '0 200px',
  height: '80px',
});


export const menu = style({
  display: 'flex',
  gap: '50px',
});

export const menuItem = style({
  ...font.H4,
  color: theme.gray.black,
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      color: '',
    },
  },
});

export const active = style({
  color: theme.primary[600],
  fontWeight: 'bold',
  borderBottom: `3px solid ${theme.primary[600]}`,
  paddingBottom: '0px',
});

export const profile = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

export const profileIcon = style({
  width: '42px',
  height: '42px',
  backgroundColor: '#eaeaea',
  borderRadius: '100%',
});