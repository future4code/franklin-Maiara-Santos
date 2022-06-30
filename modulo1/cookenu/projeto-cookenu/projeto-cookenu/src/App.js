import React from "react";
import Router from './routes/router'
import theme from "./constants/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  const token = localStorage.getItem ("token") 
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>      
    </ThemeProvider>
  );
}

export default App;
