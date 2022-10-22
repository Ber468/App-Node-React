import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import  Router  from './routes/router';

const App = () => {
  const theme = createTheme({
    palette: {
			mode: 'dark',
      primary: {
        main: '#04bf8a',
        light: '#41CAA3',
        dark: '#038C65',
        contrastText: '#fffefc',
      },
      background: {
        default: '#172632',
        paper: '#1D2D44',
      },
    },
  });

  return (
		<StyledEngineProvider injectFirst>    
			<ThemeProvider theme={theme}>
	      <Router />
	    </ThemeProvider>
		</StyledEngineProvider>
  );
};

export default App;
