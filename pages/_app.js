import Layout from "../components/Layout";
import { StyledEngineProvider } from '@mui/material/styles';
import '../styles.css';
import '@fontsource/jura';
import '@fontsource/onest'

function MyApp({ Component, pageProps }) {
  return (<StyledEngineProvider injectFirst>
      <Layout>
             <Component {...pageProps} />
        </Layout>
      </StyledEngineProvider>
  )
}

export default MyApp