import { vars } from "../../styles/themes.css";
import { style } from "@vanilla-extract/css";

export const Footer = style({
    height: '4em',
    textAlign: 'center',
    borderTop: 'black solid 1px',
    width: '75%',
    margin: 'auto',


    '@media': {
        'screen and (max-width: 768px)': {
            width: '75%',
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const Content = style({
    padding: '1em'
})