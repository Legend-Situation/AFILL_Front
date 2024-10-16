import { style } from "@vanilla-extract/css";
import { font, theme } from "@/ui/style";

export const SortButtonContainer = style({
  display: "flex",
  gap: "5px",
});

export const SortButton = style({
  ...font.btn1,
  color: theme.gray[500],
  padding: "10px",
  cursor: "pointer",
  border: "none",
  background: "none",
  transition: "color 0.3s ease",
  
  ":hover": {
    color: theme.primary[600],
  },
});

export const Selected = style({
  color: theme.primary[600],
});