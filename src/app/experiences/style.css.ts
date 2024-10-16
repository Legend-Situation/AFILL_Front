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

export const ButtonContainer = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "14px",
});

export const Container = style({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "1120px",
    width: "100%",
});

export const Title = style({
    ...font.H1,
    color: theme.gray.black,
    margin: '0 0 40px 0',
    padding: '0',
    alignSelf: 'flex-start',
    width: '100%',
})
