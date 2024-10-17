import { style } from "@vanilla-extract/css";
import { theme } from "@ui/style/theme.css";
import { font } from "@ui/style/font.css";

export const Button = style({
  ...font.btn1,
  border: "none",
  borderRadius: "12px",
  padding: "12px 20px",
  textAlign: "center",
  cursor: "pointer",
  width: "fit-content",
});

export const grayButton = style({
  backgroundColor: theme.sub.subText,
  color: theme.gray[500],
});

export const blueButton = style({
  backgroundColor: theme.primary[600],
  color: theme.gray.white,
});
