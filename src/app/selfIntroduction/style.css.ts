import { style } from '@vanilla-extract/css';
import { font } from '@ui/style/font.css';
import { theme } from '@ui/style/theme.css';

export const Layout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  background: theme.background,
  margin: '50px 200px'
});

export const header = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '32px'
});

export const TitleContainer = style ({
  display:"flex",
  flexDirection:"column"
})

export const title = style({
  ...font.H2,
  color: theme.gray.black
});

export const subTitle = style({
  ...font.p1,
  color: theme.gray[500]
})

export const cardList = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
});

export const card = style({
  padding: '24px',
  borderRadius: '12px',
  border: `2px solid ${theme.gray[100]}`,
  cursor: 'pointer',
  ...font.p1,
  color: theme.gray.black,
  ':hover': {
    border: `2px solid ${theme.primary[600]}`
  }
});
