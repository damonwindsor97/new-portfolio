import { style } from "@vanilla-extract/css";
import { vars } from '../styles/themes.css'

export const ProjectsSection = style({
    marginTop: '2em'
})

export const ProjectBox = style({
    width: '75%',
    margin: 'auto',
    marginBottom: '1em'
})

export const ProjectOne = style({
    
})

export const ProjectTitle = style({
    textAlign: 'left',
    marginTop: '10px',
    fontSize: `${vars.fontSize["5x"]}`
})

export const ProjectTech = style({
    margin: '10px 0px 10px 0',
    fontWeight: `${vars.fontWeight.light}`,
    fontSize: `${vars.fontSize['2x']}`
})

export const ProjectDescription = style({
    fontSize: `${vars.fontSize["3x"]}`,
    width: '75%'
})

export const ImageSection = style({
    margin: 'auto',
    width: '100%',

})

export const ImageDiv = style({
    display: 'inline-block',
    textAlign: 'center',
    width: '50%',
    marginBottom: '2em'
})

export const ProjectImage = style({
    width: '350px',
    height: '250px',
    borderRadius: '5px',
    transition: 'ease-in-out 0.2s',

    ':hover': {
        transform: 'translateY(-10px)',
        transition: 'ease-in-out 0.2s'
    }
})