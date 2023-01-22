import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import router from 'configuration/router';
import customTheme from './theme/theme'
import {
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { store } from 'store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <ThemeProvider theme={customTheme}>
            <Provider store={store}>
              <RouterProvider router={router} />
            </Provider>
          </ThemeProvider>
        </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
