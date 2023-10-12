import Navbar from "./Navbar";
import Footer from "./Footer";
import {Box} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import '@fontsource/jura';
import theme from './theme.js';

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
        <div className="content"
             style={{ display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Box sx={{backgroundColor: 'primary.main'}}>
                {children}
            </Box>
            <Footer />
        </div>
        </ThemeProvider>
    )
}

export default Layout;