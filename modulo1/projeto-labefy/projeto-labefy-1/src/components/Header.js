import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyleMenu = styled.div`
  width: 100%
  height: 350px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;    
  display: flex;

`
const StyleLinks = styled.a`
  color: #45525B;
  background-color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;

`

const StyleTitle = styled.h2`
color: #FE7E01;
background-color: #fff;
text-decoration: none;
font-size: 40px;

`

function Header () {
  return (
    <StyleMenu> 
      <Link to="/"><StyleTitle>Labefy</StyleTitle></Link>       
        <StyleLinks href='#'> QUEM SOMOS </StyleLinks>
        <StyleLinks href='#'> O PROJETO </StyleLinks>
        <StyleLinks href='#'> COMECE AQUI </StyleLinks>               
    </StyleMenu>
    )
}

export default Header;