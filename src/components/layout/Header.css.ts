import { vars } from "../../styles/themes.css";
import { style } from "@vanilla-extract/css";

export const Header = style({
    backgroundColor: `${vars.colors.complementary}`,
    color: `${vars.colors.primary}`,
    fontFamily: `${vars.fonts.body}`,
    width: '100%',
    height: '5em'
})

export const NavMenu = style({
    display: 'inline-block',
    float: 'right',
    marginRight: '5em'
})

export const NavItem = style({
    display: 'inline-block',
    marginRight: '1.5em',
    fontSize: `${vars.fontSize["4x"]}`,
    textDecoration: 'none',
    cursor: 'pointer',
    ':hover': {
        color: `${vars.colors.darkComplentary}`
    }
})

export const NavLink = style({
    ':hover': {
        color: `${vars.colors.darkComplentary}`
    }
})