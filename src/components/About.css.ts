import { vars } from "../styles/themes.css";
import { style } from "@vanilla-extract/css";

export const AboutSection = style({
    marginTop: '2em',
    marginBottom: '6em',

    '@media': {
        'screen and (max-width: 768px)': {
            marginTop: '0em',
            marginBottom: '0em'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const InfoSection = style({
    width: '60%',
    display: 'inline-block',
    fontFamily: `${vars.fonts.body}`,
    fontSize: `${vars.fontSize["4x"]}`,

    '@media': {
        'screen and (max-width: 768px)': {
            fontSize: '12px',
            width: '40%'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const Info = style({
    transform: 'translate(2%, 40%)',

    '@media': {
        'screen and (max-width: 768px)': {
            transform: 'translate(0%, 10%)',
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const PhotoSection = style({
    width: '35%',
    display: 'inline-block',
    marginLeft: '1em',

    '@media': {
        'screen and (max-width: 768px)': {
            width: '60%',
            transform: 'translate(10%, -80%)',
            marginLeft: '0em',
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const Photo = style({
    borderRadius: '200px',

    '@media': {
        'screen and (max-width: 768px)': {
            width: '150px'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const ComplementaryText = style({
    color: `${vars.colors.complementary}`
})