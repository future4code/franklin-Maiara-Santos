import React from 'react'
import styled from 'styled-components'

const StyleMenu = styled.div`
  width: 100%
  height: 300px;
  background-color: #dcdcdc;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;    
  display: flex;
`

function Header () {
  return (
    <StyleMenu>       
       <h1>Labefy</h1>  
        <a href='#'>QUEM SOMOS</a>
        <a href='#'>O PROJETO</a>
        <a href='#'>COMECE AQUI</a>               
    </StyleMenu>
    )
}

export default Header;