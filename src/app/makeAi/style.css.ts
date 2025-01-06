import { style } from '@vanilla-extract/css';
import { theme } from '@ui/style/theme.css';
import { font } from '@/ui/style';

export const Layout = style({
  display: 'flex',
  gap: '40px',
  margin: '50px 200px',
  width:"100vw"
});

export const cardLayout = style({
  width:"40vw",
  borderRadius:"25px",
  boxShadow: "0px 0px 10px 0px rgba(212, 212, 212, 0.25)",
})

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '50%',
  backgroundColor: theme.primary[100],
  padding:"20px"
});

export const card = style({
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '16px',
});

export const titleContainer = style ({
  display:"flex",
  flexDirection:"column",
  padding:"40px 28px"
})

export const myExperienceCard = style ({
  ...font.H3,
  color: theme.gray.black
})

export const subTitle = style({
  ...font.p2,
  color: theme.gray[500]
})

export const cardDate = style({
  fontSize: '14px',
  color: '#666'
});

export const cardTitle = style({
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '8px 0'
});

export const tagContainer = style({
  display: 'flex',
  gap: '8px'
});

export const tag = style({
  padding: '4px 12px',
  backgroundColor: '#f0f0f0',
  borderRadius: '20px',
  fontSize: '12px'
});

export const rightSection = style({
  width: '50%',
  padding: '20px'
});

export const textContent = style({
  minHeight: '300px',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  marginTop: '20px'
});

export const submitButton = style({
  padding: '12px 24px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '20px'
});
