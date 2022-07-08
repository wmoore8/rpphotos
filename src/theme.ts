import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#181A18'
        },
        secondary: {
            main: '#d5ba70'
        },
        error: {
            main: '#FF2442'
        },
        info: {
            main: '#FFEDDA'
        }
    }
})

export default theme