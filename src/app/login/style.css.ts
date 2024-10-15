import { style } from "@vanilla-extract/css";
import { theme } from "@style";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const logo = style({
  fontSize: "72px",
  fontWeight: "bold",
  color: theme.colors.primary[600],
  marginBottom: "16px",
});

export const description = style({
  fontSize: "16px",
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
  fontSize: "16px",
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