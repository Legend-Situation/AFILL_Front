import { style } from "@vanilla-extract/css";
import { font } from "@ui/style/font.css";
import { theme } from "@ui/style/theme.css";

export const Layout = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    background: theme.background,
    padding:"50px 200px"
});
