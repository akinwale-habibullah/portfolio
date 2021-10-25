import React from 'react'
import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles';
import {
  CssBaseline,
} from '@mui/material'
import Nav from '../components/Nav'
import Profile from '../components/Profile'

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffff6e',
      main: '#ccdc39',
      dark: '#98aa00',
      contrastText: '#000000',
    }
  },
});

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Nav />
      <Profile />
    </ThemeProvider>
  );
}

export default IndexPage
