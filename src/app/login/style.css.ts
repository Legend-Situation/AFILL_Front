import { style } from "@vanilla-extract/css";
import { theme } from "@style/theme";
import { font } from "@style/font";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const logo = style({
  font: font.D1,
  color: theme.colors.primary[600],
  marginBottom: "16px",
});

export const description = style({
  ...font.p2,  // p2 폰트 스타일 적용
  color: theme.colors.gray[500],
  marginBottom: "24px",
});

export const googleButton = style({
  display: "flex",
  alignItems: "center",
  padding: "12px 24px",
  backgroundColor: theme.colors.gray.white,
  border: `1px solid ${theme.colors.gray[300]}`,
  borderRadius: "8px",
  ...font.btn2,  // btn2 폰트 스타일 적용
  color: theme.colors.gray.black,
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  ":hover": {
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
  },
});

export const googleIcon = style({
  marginRight: "8px",
  width: "24px",
  height: "24px",
});
