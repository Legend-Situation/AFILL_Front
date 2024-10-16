import { style } from "@vanilla-extract/css";
import { font } from "@ui/style/font.css";
import { theme } from "@ui/style/theme.css";

export const Container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const Description = style({
  ...font.p1,
  color: theme.gray[500],
  margin: "25px 0px",
});

export const GoogleButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "14px 70px",
  backgroundColor: theme.gray.white,
  borderRadius: "8px",
  gap: "20px",
  cursor: "pointer",
  border: "none",
  boxShadow: "0px 2px 12px 0px rgba(171, 190, 209, 0.25)",
});

export const GoogleButtonText = style({
  textAlign: "center",
  ...font.btn2,
  color: theme.gray.black,
});