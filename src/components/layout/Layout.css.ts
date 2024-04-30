import { vars } from '../../styles/themes.css'
import { style } from '@vanilla-extract/css'

export const app = style({
    display: 'flex', 
    flexDirection: 'column',
    minHeight: '100vh'
})

export const appContent = style({
    flex: 1,
    fontFamily: `${vars.fonts.body}`
})