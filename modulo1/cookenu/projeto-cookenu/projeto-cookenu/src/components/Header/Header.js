import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { StyledToolbar } from './styled';
import Button from '@mui/material/Button';
import {goToRecipesList, goToLogin} from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom';


 const Header = ({rightButtonText, setRightButtonText}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem ("token") 

    const logout = () => {
      localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
      if (token) {
        logout()
        setRightButtonText("Login")
        goToLogin(navigate)
      }

      else {
        goToLogin(navigate)
      }
    }

  return (
      <AppBar position="static">
        <StyledToolbar> 
          <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>  
  );
}

export default Header;