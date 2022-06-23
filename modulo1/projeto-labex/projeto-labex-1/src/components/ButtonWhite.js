import React from "react";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const StyleButtonWhiteLittle = styled.button`
    background-color: #FFD922; 
    border-radius: 25px;
    width: 110px;
    height: 42px;
    border: 3px solid #371A46;
    font-size: 15px;
    font-weight: 700;
    color: #371A46;
    cursor: pointer;
`

function ButtonWhite () {

    const navigate = useNavigate()

    const GoToApplication = () =>{    
      navigate ('/trips/application')
    }

    return(
        <StyleButtonWhiteLittle onClick={GoToApplication}>Inscrever</StyleButtonWhiteLittle>
    )
}

export default ButtonWhite;