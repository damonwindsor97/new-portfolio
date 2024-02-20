import { createGlobalTheme } from "@vanilla-extract/css";


export const root = createGlobalTheme(':root', {
    fonts: {
        showcase: 'DM Mono',
        body: 'Dongle'
    },

    fontWeight: {
        light: "300",
        normal: "500",
        bold: "600",
        bolder: "700",
    },

    fontSize: {
        '2x': '16px',
        '3x': '24px',
        '4x': '32px',
        '5x': '38px'
    },

    colors: {
        primary: '#FFF',
        secondary: '#000',
        complementary: '#00C4EF',
        darkComplentary: '#00B9E2'
    },

    space: {
        none: '0',
        '1x': '8px',
        '2x': '12x',
        '3x': '16px',
        '4x': '28px',
        '5x': '42px'
    }
})

export const vars = { ...root };