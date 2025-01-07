import { font, theme } from "@/ui/style";
import { style } from "@vanilla-extract/css";

export const CustomContainer = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: '#FFF',
  padding: '40px 50px',
  borderRadius: '20px',
  border: '1px solid #F6F6F8',
  boxShadow: '0px 0px 10px 0px rgba(212, 212, 212, 0.25)',
  gap: '5px'
});

export const CustomTitle = style({
  ...font.H4,
  color: theme.gray.black
});

export const Star = style({
  color: theme.sub.red
});

export const CustomerSubtitle = style({
  ...font.p3,
  color: theme.gray[500],
  paddingBottom: "15px"
});

export const KeywordContainer = style({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  padding: "0 30px",
  flexWrap: "wrap"
});

export const AddKeywordInputContainer = style({
  display: "flex",
  justifyContent: "center",
  paddingTop: "36px",
  gap: "10px"
});

export const AddKeywordInput = style({
  ...font.p2,
  width: "40%",
  border: `1px solid ${theme.gray[100]}`,
  borderRadius: "8px",
  padding: "16px",
  outline: 'none',
  WebkitAppearance: 'none',
  '::placeholder': {
    color: theme.gray[300]
  }
});
