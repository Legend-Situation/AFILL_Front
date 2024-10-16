import { globalFontFace, globalStyle } from "@vanilla-extract/css";

globalFontFace('Pretendard', {
  src: 'url("/PretendardVariable.woff2") format("woff2")',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});
globalStyle('body', {
  fontFamily: 'Pretendard, sans-serif',
});

export const font = {
  D1: {
    fontSize: '72px',
    lineHeight: '130%',
    fontWeight: 'bold',
    letterSpacing: '-1.5px',
  },
  D2: {
    fontSize: '60px',
    lineHeight: '130%',
    fontWeight: 'bold',
    letterSpacing: '-0.5px',
  },
  D3: {
    fontSize: '48px',
    lineHeight: '130%',
    fontWeight: 'bold',
    letterSpacing: '0',
  },
  H1: {
    fontSize: '36px',
    lineHeight: '140%',
    fontWeight: 'bold',
    letterSpacing: '0.25px',
  },
  H2: {
    fontSize: '28px',
    lineHeight: '140%',
    fontWeight: 'bold',
    letterSpacing: '0',
  },
  H3: {
    fontSize: '24px',
    lineHeight: '140%',
    fontWeight: 600,
    letterSpacing: '0.15px',
  },
  H4: {
    fontSize: '20px',
    lineHeight: '140%',
    fontWeight: 600,
    letterSpacing: '0.15px',
  },
  H5: {
    fontSize: '18px',
    lineHeight: '140%',
    fontWeight: 600,
    letterSpacing: '0.15px',
  },
  p1: {
    fontSize: '18px',
    lineHeight: '160%',
    fontWeight: 'normal',
    letterSpacing: '-0.15px',
  },
  p2: {
    fontSize: '16px',
    lineHeight: '160%',
    fontWeight: 'normal',
    letterSpacing: '-0.15px',
  },
  p3: {
    fontSize: '14px',
    lineHeight: '160%',
    fontWeight: 'normal',
    letterSpacing: '-0.1px',
  },
  context: {
    fontSize: '16px',
    lineHeight: '130%',
    fontWeight: 500,
    letterSpacing: '0',
  },
  caption: {
    fontSize: '12px',
    lineHeight: '140%',
    fontWeight: 'normal',
    letterSpacing: '0',
  },
  code: {
    fontSize: '16px',
    lineHeight: '130%',
    fontWeight: 'normal',
    letterSpacing: '0',
  },
  btn1: {
    fontSize: '18px',
    lineHeight: '130%',
    fontWeight: 600,
    letterSpacing: '0',
  },
  btn2: {
    fontSize: '16px',
    lineHeight: '130%',
    fontWeight: 500,
    letterSpacing: '0',
  },
  btn3: {
    fontSize: '14px',
    lineHeight: '130%',
    fontWeight: 500,
    letterSpacing: '0',
  },
};
