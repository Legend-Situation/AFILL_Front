import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
    primary: {
      600: '#046DFF',
      500: '#4392FF',
      400: '#81B6FF',
      300: '#9BC5FF',
      200: '#B3D3FF',
      100: '#E5F0FF',
    },
    gray: {
      black: '#1F1E23',
      500: '#787878',
      400: '#9C9C9C',
      300: '#CCCCCC',
      200: '#D9D9D9',
      100: '#E6E6E6',
      50: '#F6F6F8',
      white: '#FFFFFF',
    },
    sub: {
      red: '#FF3F3F',
      subText: '#F1F1F4',
    },
  },
);