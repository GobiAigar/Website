"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // You can change this hex to your preferred primary color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
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
