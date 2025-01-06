import { style } from '@vanilla-extract/css';
import {font, theme} from "@ui/style";


export const Card = style({
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '16px',
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