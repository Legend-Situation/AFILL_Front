import { font, theme } from "@/ui/style";
import { style } from "@vanilla-extract/css";

export const Layout = style({
  padding: "8px 16px",
  backgroundColor: theme.sub.subText,
  ...font.btn1,
  color: theme.gray[300],
  width: "fit-content",
  borderRadius: "8px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.primary[600],
    color: theme.gray.white,
  },
});
