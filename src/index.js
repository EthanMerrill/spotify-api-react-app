import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Redirect from './components/Redirect';

//pull in use styles from material u core. Pass in the degailt theme object
//
let theme = createTheme({

  palette: {
    mode: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
     
      main: '#FFFFFF',
      light: '#FFFFF',
      dark: '#FF0000',
      backgroundColor: '#FFFFFF',
      contrastText: '#FFFFFF'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#b3b3b3',
      main: '#b3b3b3',
      dark: '#181818',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#FFFFFF',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
