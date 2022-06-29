import React from "react";
// import { ThemeProvider } from "styled-components";
import AddRecipesPage from './pages/AddRecipesPage/AddRecipesPage'
import Router from './routes/router'
import theme from "./constants/theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router></Router>
      </ThemeProvider>
  );
}

export default App;
