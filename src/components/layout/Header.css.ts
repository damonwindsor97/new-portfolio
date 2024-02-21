import { vars } from "../../styles/themes.css";
import { style } from "@vanilla-extract/css";

export const Header = style({
    backgroundColor: `${vars.colors.complementary}`,
    color: `${vars.colors.primary}`,
    fontFamily: `${vars.fonts.body}`,
    width: '100%',
    height: '5em',


    '@media': {
        'screen and (max-width: 768px)': {
            height: '2em'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const NavMenu = style({
    display: 'inline-block',
    float: 'right',
    marginRight: '5em',

    '@media': {
        'screen and (max-width: 768px)': {
            marginRight: '2em'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const NavItem = style({
    display: 'inline-block',
    marginRight: '1.5em',
    fontSize: `${vars.fontSize["4x"]}`,
    textDecoration: 'none',
    cursor: 'pointer',
    ':hover': {
        color: `${vars.colors.darkComplentary}`
    },


    '@media': {
        'screen and (max-width: 768px)': {
            marginRight: '0.5em',
            fontSize: `${vars.fontSize["3x"]}`,
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        }
    }
})

export const NavLink = style({
    ':hover': {
        color: `${vars.colors.darkComplentary}`
    }
})

// Media Queries
const myStyle = style({
    
  });