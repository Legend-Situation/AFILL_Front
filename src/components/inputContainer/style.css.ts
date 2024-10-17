import { font, theme } from "@/ui/style";
import { globalStyle, style } from "@vanilla-extract/css";

export const Layout = style({
  display: "flex",
  flexDirection: "column",
});

export const Title = style({
  ...font.H4,
  color: theme.gray.black,
  paddingBottom: "8px",
});

export const Star = style({
  paddingLeft: "2px",
  color: theme.sub.red,
});

export const Input = style({
  padding: "14px 20px",
  border: `1px solid ${theme.gray[100]}`,
  borderRadius: "8px",
  resize: "none",
  outline: "none",
});

export const BigInput = style([
  Input,
  {
    height: "160px",
  },
]);

export const PeriodInputContainer = style({
  display: "flex",
  gap: "5px",
  alignItems: "center",
});

export const InputPeriod = style({
  padding: "14px 16px",
  border: `1px solid ${theme.gray[100]}`,
  marginRight: "8px",
  borderRadius: "4px",
  maxWidth: "10%",
  width: "auto",
});

export const GrayText = style({
  color: theme.gray[300],
  padding: "0 15px 0 8px",
});

globalStyle("input", {
  ...font.p2,
});

globalStyle("textarea", {
  ...font.p2,
});
