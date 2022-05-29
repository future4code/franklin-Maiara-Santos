import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
    color:#000;   
    width: 70px;
    height: 25px;
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #90ee90;
    font-family: sans-serif;    
    font-size: 18px;
    align-items: flex-end;
    margin-bottom: 30px;
    font-weight:600;
    margin-left: 10px;
    
    

    
   
`


function Button (){
    return(
        <StyleButton>Enviar</StyleButton>
    );

}

export default Button;