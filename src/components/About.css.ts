import { vars } from "../styles/themes.css";
import { style } from "@vanilla-extract/css";

export const AboutSection = style({
    marginBottom: '6em',
    marginTop: '6em',

    '@media': {
        'screen and (max-width: 768px)': {
            marginTop: '0em',
            marginBottom: '0em'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        },

        'screen and (max-width: 1000px) and (min-width: 769px)': {

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
            fontSize: '16px',
            width: '100%'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        },

        'screen and (max-width: 1000px) and (min-width: 769px)': {
            width: '100%'
        }
    }
})

export const Info = style({


    '@media': {
        'screen and (max-width: 768px)': {
            transform: 'none',
            margin: '10px'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        },

        'screen and (max-width: 1000px) and (min-width: 769px)': {
            transform: 'none',
            margin: '10px'
        }
    }
})

export const PhotoSection = style({
    width: '35%',
    display: 'flex',
float: 'right',

    '@media': {
        'screen and (max-width: 768px)': {
            width: '100%',
            margin: "auto",
            display: 'flex',
            justifyContent: 'center'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        },

        'screen and (max-width: 1000px) and (min-width: 769px)': {
            width: '100%',
            margin: "auto",
            display: 'flex',
            justifyContent: 'center'
        }
    }
})

export const Photo = style({
    borderRadius: '200px',

    '@media': {
        'screen and (max-width: 768px)': {
            width: '150px',
            margin: '20px'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        },

        'screen and (max-width: 1000px) and (min-width: 769px)': {
            
        }
    }
})

export const ComplementaryText = style({
    color: `${vars.colors.complementary}`
})
export const DarkComplementaryText = style({
    color: `${vars.colors.darkComplentary}`
})