import { style } from "@vanilla-extract/css";
import { font } from "@ui/style/font.css";
import { theme } from "@ui/style/theme.css";

export const Layout = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    background: theme.background,
    padding:"80px 200px"
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
    margin: '0 0 40px 0', // 제목과 그리드 사이에 간격 추가
    padding: '0',
    alignSelf: 'flex-start', // 제목을 왼쪽으로 정렬
    width: '100%',
})
