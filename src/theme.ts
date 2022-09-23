import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#181A18'
        },
        secondary: {
            main: '#c2c2cc'
        },
        error: {
            main: '#FF2442'
        },
        info: {
            main: '#FFEDDA'
        }
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 350,
            md: 650,
            lg: 900,
            xl: 1200
        }
    }
})

export default theme