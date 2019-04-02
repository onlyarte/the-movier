import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GreyPalette from '@material-ui/core/colors/grey';
import BluePalette from '@material-ui/core/colors/blue';
import PinkPalette from '@material-ui/core/colors/pink';
import RedPalette from '@material-ui/core/colors/red';
import BlueGrey from '@material-ui/core/colors/blueGrey';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import configureStore from './config-store';
import './index.css';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    grey: GreyPalette,
    blue: BluePalette,
    pink: PinkPalette,
    red: RedPalette,
    blueGrey: BlueGrey,
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
  },
});

ReactDOM.render(
  <StoreProvider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
