import { vars } from "../styles/themes.css";
import { style } from "@vanilla-extract/css";

export const AboutSection = style({
    marginTop: '2em',
    marginBottom: '6em'
})

export const InfoSection = style({
    width: '60%',
    display: 'inline-block',
    fontFamily: `${vars.fonts.body}`,
    fontSize: `${vars.fontSize["4x"]}`
})

export const Info = style({
    transform: 'translate(2%, 40%)',
})

export const PhotoSection = style({
    width: '35%',
    display: 'inline-block',
    marginLeft: '1em'
})

export const Photo = style({
    borderRadius: '200px'
})

export const ComplementaryText = style({
    color: `${vars.colors.complementary}`
})