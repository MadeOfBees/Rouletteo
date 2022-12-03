// import home page
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div>
      <CssBaseline />
      <Router>
        <div className="Central">
          <Routes className="Central">
            <Route
              path="/Rouletteo"
              element={<Home />}
            />
            <Route
              path="/AboutUs"
              element={<AboutUs />}
            />
          </Routes>
        </div>
        <BottomNavigation showLabels className='DownNav'>
          <BottomNavigationAction as={Link} to="/AboutUs" label="About the creators" icon={<ContactPageIcon />} />
          <BottomNavigationAction as={Link} to="/Rouletteo" label="Rouletteo" icon={<HomeIcon />} />
          <BottomNavigationAction onClick={colorMode.toggleColorMode} label="Toggle Darkmode" icon={<ToggleOnIcon />} />
        </BottomNavigation>
      </Router>
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
