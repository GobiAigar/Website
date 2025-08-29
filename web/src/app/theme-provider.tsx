"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: `Nunito, Montserrat,sans-serif`,
  },
  palette: {
    primary: {
      main: "#F5BF03",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#ffffff",
    },
    grey: grey,
  },
});

export default function AppThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
