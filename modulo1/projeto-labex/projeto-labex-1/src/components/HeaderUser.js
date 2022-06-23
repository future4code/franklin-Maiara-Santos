import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const StyleMenu = styled.div`
  width: 100%
  height: auto;
  background-color: #3AAAFF;
  align-items: center;    
  display: flex;
 
`

const StyleTitle = styled.h1`
color: #371A46;
background-color: none;
text-decoration: none;
font-size: 45px;
margin-left: 40px;
cursor: pointer;
`

function HeaderUser () {

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

export default HeaderUser;