import { font, theme } from "@/ui/style";
import { style } from "@vanilla-extract/css";

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
  color: theme.gray[400],
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
