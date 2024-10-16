import { style } from '@vanilla-extract/css';
import {theme} from "@ui/style";


export const card = style({
    display: 'flex',
    padding: '30px 25px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // gap: '12px',

    width: '368px',
    height: '422px',

    borderRadius: '20px',
    background: theme.primary["100"],
    boxShadow: '0px 0px 10px 0px rgba(212, 212, 212, 0.50)'
});

export const dateRange = style({
    alignSelf: 'stretch',

    color: '#787878',

    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '160%',

    padding: '0',
    margin: '0',

    height: '22px',
})

export const cardTitle = style({
    alignSelf: 'stretch',
    color: '#1F1E23',

    fontFamily: 'Pretendard',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '160%',

    padding: '0',
    margin: '0',
})

export const cardContents = style({
    alignSelf: 'stretch',

    color: '#1F1E23',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '160%',

    padding: '0',
    margin: '0',

    height: '104px',
})

export const cardImage = style({
    backgroundColor: 'black',

    width: '368px',
    height: '207px',

    borderRadius: '10px',
})