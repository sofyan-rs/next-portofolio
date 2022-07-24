import '../styles/style.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
}

export default MyApp;