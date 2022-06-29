import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { StyledToolbar } from './styled';
import Button from '@mui/material/Button';
import {goToRecipesList, goToLogin} from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom';

 const Header = () => {
    const navigate = useNavigate()
  return (
      <AppBar position="static">
        <StyledToolbar> 
          <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
          <Button onClick={()=> goToLogin(navigate)}color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>  
  );
}

export default Header;