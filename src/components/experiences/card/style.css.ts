import { style } from '@vanilla-extract/css';
import {font, theme} from "@ui/style";


export const Card = style({
    display: 'flex',
    height: '320px',
    padding: '25px 25px',
    margin: '0',
    flexDirection: 'column',
    borderRadius: '20px',
    background: theme.gray.white,
    boxShadow: '0px 0px 10px 0px rgba(212, 212, 212, 0.50)',
});

export const DateRange = style({
    ...font.p3,
    color: theme.gray[500],
    padding: '0',
    margin: '0',
})

export const CardTitle = style({
    ...font.H4,
    color: theme.gray.black,
    margin: '0',
    padding: '0',
})

export const CardContents = style({
    ...font.p2,
    color: theme.gray.black,
    margin: '0',
    padding: '0',
    maxHeight: '80px',
})