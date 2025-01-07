import { style } from '@vanilla-extract/css';
import { theme } from '@ui/style/theme.css';
import { font } from '@/ui/style';

export const Layout = style({
  display: 'flex',
  margin: '40px auto',
  width: '100vw',
  justifyContent: 'center'
});

export const container = style({
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
});

export const leftLayout = style({
  width: '40vw',
  height: '800px',
  borderRadius: '25px',
  boxShadow: '0px 0px 10px 0px rgba(212, 212, 212, 0.25)',
  backgroundColor: 'white',
  overflow: 'hidden'
});

export const leftContainer = style({
  height: '100%',
  width:"100%",
  display:"flex",
});

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '50%',
  height: '100%',
  padding: '20px',
  backgroundColor: theme.primary[100],
  overflow: 'auto'
});

export const card = style({
  backgroundColor: 'white',
  borderRadius: '16px',
  cursor: 'pointer'
});

export const selectedCard = style({
  backgroundColor: 'white',
  borderRadius: '16px',
  cursor: 'pointer',
  border: `1px solid ${theme.primary[500]}`
});

export const detailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  height: '100%',
  padding: '20px',
  overflow: 'auto',
  gap: '10px',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '40px 28px'
});

export const myExperienceCard = style({
  ...font.H3,
  color: theme.gray.black
});

export const subTitle = style({
  ...font.p2,
  color: theme.gray[500]
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
  marginTop: '30px'
});

export const loading = style({
  ...font.p3,
  color: theme.gray.black
});

export const rightLayout = style({
  boxSizing: 'border-box',
  width: '40vw',
  height: '800px',
  borderRadius: '25px',
  boxShadow: '0px 0px 10px 0px rgba(212, 212, 212, 0.25)',
  padding: '20px',
  backgroundColor: 'white'
});


export const textContent = style({
  minHeight: '300px',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  marginTop: '20px',
  border: `1px solid ${theme.gray[200]}`
});

export const emptyLayout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: '20px'
});

export const selectedCardDetail = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: '12px'
});

export const selectedCardTitle = style({
  ...font.H4,
  color: theme.gray.black,
  margin: 0
});

export const selectedCardContent = style({
  ...font.p2,
  color: theme.gray[500],
  margin: '10px 0'
});

export const noSelection = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:"50px",
  color: theme.gray[500]
});

export const titleInput = style({
  ...font.H3,
  width: '100%',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '20px',
  outline: 'none',
  border: 'none'
});
