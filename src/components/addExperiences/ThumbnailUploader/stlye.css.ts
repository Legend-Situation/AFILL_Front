import { font, theme } from "@/ui/style";
import { style } from "@vanilla-extract/css";

export const ThumbnailUpContainer = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFF',
  padding: '40px 50px',
  borderRadius: '20px',
  border: '1px solid #F6F6F8',
  boxShadow: '0px 0px 10px 0px rgba(212, 212, 212, 0.25)',
  gap: '20px',
});

export const ThumbnailUpInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ThumbnailUpTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const ThumbnailUpMainText = style({
  ...font.btn1,
  color: theme.gray.black,
});

export const ThumbnailUpText = style({
  ...font.p2,
  color: theme.gray[400],
});

export const ThumbnailImage = style({
  maxWidth: '300px',
  height: 'auto',
  borderRadius: '8px',
});
