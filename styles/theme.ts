
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
            main: '#8EADD5',
            dark: '#F6F6F6',
            light: '#F6F6F6',
            contrastText: '#272D38',
        },
        secondary:{
            main:'#E15C19',
        },
        text:{
            primary: '#272D38',
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