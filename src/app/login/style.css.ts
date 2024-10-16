import { style } from "@vanilla-extract/css";
import { font } from "@ui/style/font.css";
import { theme } from "@ui/style/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const logo = style({
  ...font.D1, // 개별 속성으로 적용
  color: theme.colors.primary[600],
  marginBottom: "16px",
});

export const description = style({
  color: theme.colors.gray[500],
  marginBottom: "24px",
});

export const googleButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "14px 50px",
  backgroundColor: theme.colors.gray.white,
  borderRadius: "8px",
  gap: "20px",
  cursor: "pointer",
  boxShadow: "0px 2px 12px rgba(171, 190, 209, 0.25)",
});

export const googleButtonText = style({
  textAlign: "center",
  ...font.H2, // 개별 속성으로 적용
  color: theme.colors.gray.black,
});