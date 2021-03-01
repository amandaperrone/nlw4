
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import Footer from '../components/Footer';

//import '../styles/globalDark.css';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark'; 
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  return (
    <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Component {...pageProps} /> 
      <Footer toggleTheme={toggleTheme} />
    </div>
      
    </ThemeProvider>
  )
}

export default MyApp
