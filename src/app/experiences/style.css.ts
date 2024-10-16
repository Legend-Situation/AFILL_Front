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