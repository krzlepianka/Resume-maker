import IntroTheme from 'components/theme/IntroTheme/IntroTheme';
import customTheme from './theme/theme'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import './App.css';


const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <IntroTheme></IntroTheme>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
