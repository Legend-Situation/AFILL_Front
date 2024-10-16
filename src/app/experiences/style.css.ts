import { style } from "@vanilla-extract/css";
import { font } from "@ui/style/font.css";
import { theme } from "@ui/style/theme.css";

export const Layout = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh)",
    background: theme.background,
    padding: "0 200px",
});

export const Container = style({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "1120px",
    width: "100%",
});

export const Title = style({
    ...font.H1,
    color: theme.gray.black,
    margin: '0',
    padding: '0',
})
