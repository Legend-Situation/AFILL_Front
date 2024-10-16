import { font, theme } from "@/ui/style";
import { style } from "@vanilla-extract/css";

export const Layout = style({
  backgroundColor:theme.background,
  width: "100vw",
  padding: "54px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Title = style({
  ...font.H1,
  color: theme.gray.black,
});

export const Subtitle = style({
  paddingTop: "3px",
  ...font.p1,
  color: theme.gray[500],
});

export const InputLayout = style({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  width: "60%",
  padding: "40px 50px",
});

export const InputContainers = style({
  backgroundColor: theme.gray.white,
  padding: "40px 50px",
  borderRadius: "20px",
});

export const CustomContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const CustomTitle = style({
  ...font.H4,
  color: theme.gray.black,
  paddingBottom: "3px",
});

export const Star = style({
  paddingLeft: "2px",
  color: theme.sub.red,
});

export const CustomerSubtitle = style({
  ...font.p3,
  color: theme.gray[500],
  paddingBottom: "9px",
});

export const KeywordContainer = style({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  padding: "0 30px",
  flexWrap: "wrap",
});

export const AddKeywordInputContainer = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: "36px",
  gap: "10px",
});

export const AddKeywordInput = style({
  ...font.p2,
  width: "40%",
  border: `1px solid ${theme.gray[100]}`,
  borderRadius: "8px",
  padding: "13px 16px",
  outline: "none",
});

export const ThumbnailUp = style({
  display: "flex",
  flexDirection: "column",
});

export const ThumbnailUpContainer = style({
  display: 'flex',
  flexDirection: 'column',
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
  color: theme.gray[500],
});



export const ThumbnailImage = style({
  maxWidth: '300px',
  height: 'auto',
  borderRadius: '8px',
});
