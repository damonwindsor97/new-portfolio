import { vars } from '../../styles/themes.css'
import { style } from '@vanilla-extract/css'

export const Button = style({
    backgroundColor: `${vars.colors.darkComplentary}`,
    borderStyle: 'none',
    paddingLeft: '10px',
    paddingRight: '10px',
    borderRadius: '5px',
    color: `${vars.colors.primary}`,
    fontFamily: `${vars.fonts.body}`,
    fontSize: `${vars.fontSize['3x']}`,
    margin: '20px',

    ':hover': {
        cursor: 'pointer',
        border: `${vars.colors.primary} solid 1px`
    }
})

export const ButtonContent = style({

})