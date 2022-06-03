// Decidi criar o balão de mensagem como componente pois ele foi a única coisa
// que notei que se repetia toda hora na aplicação

import React from "react";
import styled from 'styled-components';

const EstiloMensagemBalao = styled.p`
    display:flex;
    background-color: #FFFAFA;
    width: 58%;
    height: 40px;
    border-radius: 5px;    
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 150px;
    color: #000;
    font-size: 20px;
    margin-bottom: 30px;   

`

function MensagemBalao (props) {
    return(
       <EstiloMensagemBalao><strong>{props.boxName}</strong>{':'}{props.boxText}</EstiloMensagemBalao> 
    )
}

export default MensagemBalao;

