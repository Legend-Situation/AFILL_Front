import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#fff",
});

export const logo = style({
  fontSize: "72px",
  fontWeight: "bold",
  color: "#046DFF",
  marginBottom: "16px",
});

export const description = style({
  fontSize: "16px",
  color: "#787878",
  marginBottom: "24px",
});

export const googleButton = style({
  display: "flex",
  alignItems: "center",
  padding: "12px 24px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "16px",
  color: "#000",
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
