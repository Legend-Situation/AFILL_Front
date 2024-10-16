import { style } from '@vanilla-extract/css';
import {font, theme} from "@ui/style";

export const keywords = style({
    width: '100%',
    display: 'flex',
    gap: '6px',
})

export const keyword = style({
    ...font.caption,
    backgroundColor: theme.primary["100"],
    padding: "5px 8px",
    borderRadius: "5px",
    border: `solid 1px ${theme.primary["300"]}`,
    color: theme.primary["600"],
    textAlign: 'center',
    margin: '6px 0 12px 0',
})