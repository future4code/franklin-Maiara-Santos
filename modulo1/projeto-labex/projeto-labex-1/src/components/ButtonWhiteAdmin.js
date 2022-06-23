import React from "react";
import styled from 'styled-components'

const StyleButtonWhiteLittle = styled.button`
    background-color: #fff;
    border-radius: 25px;
    width: 110px;
    height: 42px;
    border: 3px solid #371A46;
    font-size: 15px;
    font-weight: 700;
    color: #371A46;
`

function ButtonWhite () {
    return(
        <StyleButtonWhiteLittle>Deletar</StyleButtonWhiteLittle>
    )
}

export default ButtonWhite;