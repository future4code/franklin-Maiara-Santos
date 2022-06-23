import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

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
`

function HeaderUser () {
  return (
    <StyleMenu> 
        {/* <Link to="/"><StyleTitle>Labefy</StyleTitle></Link>   */}
      <StyleTitle>Labex</StyleTitle>     
                     
    </StyleMenu>
    )
}

export default HeaderUser;