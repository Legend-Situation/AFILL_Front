import { style } from '@vanilla-extract/css';
import { font } from '@ui/style/font.css';
import { theme } from '@ui/style/theme.css';

export const Layout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: theme.background,
  padding: '50px 200px'
});

export const ButtonContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '14px'
});

export const Container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  margin:"0 auto",
  width: '100%'
});

export const Title = style({
  ...font.H1,
  color: theme.gray.black,
  margin: '0 0 40px 0',
  padding: '0',
  alignSelf: 'flex-start',
  width: '100%'
});

export const emptyMessage = style({
    ...font.p1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    textAlign: 'center',
    color:theme.gray[500]
  });
  