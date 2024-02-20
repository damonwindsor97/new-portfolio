import { vars } from "../../styles/themes.css";
import { style } from "@vanilla-extract/css";

export const Showcase = style({
    backgroundColor: `${vars.colors.complementary}`,
    minHeight: '26em',
    height: '28vw'
})

export const ShowcaseContent = style({
    fontFamily: `${vars.fonts.showcase}`,
    textTransform: 'uppercase',
    color: `${vars.colors.primary}`,
    paddingTop: '4em'
    
})

export const MainHeading = style({
    fontWeight: `${vars.fontWeight.light}`,
    margin: 'auto 1',
    fontSize: `${vars.fontSize["5x"]}`,
    paddingLeft: '10px'
})

export const SecondaryHeading = style({
    fontWeight: `${vars.fontWeight.light}`,
    width: '45em',
    fontSize: `${vars.fontSize["3x"]}`,
    paddingLeft: '10px',
    marginTop: '20px',
    marginBottom: '20px'
})

