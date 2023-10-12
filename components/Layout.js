import Navbar from "./Navbar";
import Footer from "./Footer";
import {Box} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import '@fontsource/jura';


const theme = createTheme({
    palette: {
        mode: 'dark',
        main: '#3b5257',
        background: {
            default: '#7290a1',
        }
    },
    typography: {
        fontFamily: 'Jura'
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: '100%',
                }
            }
        }
    }}
)
const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
        <div className="content"
             style={{ display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Box sx={{height: "86vh", backgroundColor: 'background.default'}}>
                {children}
            </Box>
            <Footer />
        </div>
        </ThemeProvider>
    )
}

export default Layout;