
import { createTheme } from '@mui/material/styles';

import "@fontsource/Inter"

const theme = createTheme({
    palette: {
        common:{
          black:'#000000',
          white:'#ffffff',
        },
        mode: 'light',
        primary: {
            main: '#F8FCFF',
            dark: '#222223',
            light: '#52C0FF',
            contrastText: '#222223',
        },
        secondary:{
            main:'#E15C19',
        },
        text:{
            primary: '#222223',
            secondary: '#535354'
        },
        background:{
            default:'#FDFCFC',
            paper:'#000',
        }
    },
    typography:{
        fontFamily:'Inter',
    },
});
export default theme