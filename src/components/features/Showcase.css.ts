import { vars } from "../../styles/themes.css";
import { style } from "@vanilla-extract/css";

export const Showcase = style({
    backgroundColor: `${vars.colors.complementary}`,
    minHeight: '26em',
    height: '28vw',
    maxHeight: '28em',

    '@media': {
        'screen and (max-width: 768px)': {
            minHeight: '20em',
            height: '20vw',
   
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const ShowcaseContent = style({
    fontFamily: `${vars.fonts.showcase}`,
    textTransform: 'uppercase',
    color: `${vars.colors.primary}`,
    paddingTop: '4em',

    
    '@media': {
        'screen and (max-width: 768px)': {
            paddingTop: '3em'
   
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const MainHeading = style({
    fontWeight: `${vars.fontWeight.light}`,
    margin: 'auto 1',
    fontSize: `${vars.fontSize["5x"]}`,
    paddingLeft: '10px',

    '@media': {
        'screen and (max-width: 768px)': {
            marginRight: '0',
            fontSize: `${vars.fontSize["2x"]}`,
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const SecondaryHeading = style({
    fontWeight: `${vars.fontWeight.light}`,
    width: '45em',
    fontSize: `${vars.fontSize["3x"]}`,
    paddingLeft: '10px',
    marginTop: '20px',
    marginBottom: '20px',

    '@media': {
        'screen and (max-width: 768px)': {
            marginRight: '0.5em',
            fontSize: `${vars.fontSize["2x"]}`,
            width: '20em',
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

