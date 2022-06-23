import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyleMenu = styled.div`
  width: 100%
  height: auto;
  background-color: #FFEDCE;
  align-items: center;    
  display: flex;
 
`

const StyleTitle = styled.h2`
color: #371A46;
background-color: none;
text-decoration: none;
font-size: 45px;
margin-left: 40px;
`

function HeaderAdmin () {

  const navigate = useNavigate()

  const GoToHome = () =>{    
    navigate ('/')
  }

  return (
    <StyleMenu>         
      <StyleTitle onClick={GoToHome}>Labex</StyleTitle>                          
    </StyleMenu>
    )
}

export default HeaderAdmin;