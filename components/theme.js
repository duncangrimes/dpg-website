import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7290a1',
            light:  '#b6cedb',
            dark: '#101213'
        },
        secondary: {
            main: '#f5d787'
        },
        background: {
            default: '#7290a1',
        }
    },
    typography: {
        fontFamily: 'Jura',
        textAlign: 'center'
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: '100%',
                }
            }
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    alignItems: 'center',
                    display: 'flex'
                }
            }
        },
    }}
)

export default theme;