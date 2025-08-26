"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Fraunces",
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
