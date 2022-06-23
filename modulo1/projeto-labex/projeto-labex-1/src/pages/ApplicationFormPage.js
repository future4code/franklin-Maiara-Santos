import React from "react";
import styled from 'styled-components';
import HeaderUser from "../components/HeaderUser";
import Astronauta4 from '../imagens/astronauta-4.png';

const StyleSection = styled.section`
    background-color: #3AAAFF;
    height: 935px;
    width: 100%;
`
const StyleImg = styled.img`
    width: 450px;
    height: 450px;
    margin-bottom: 20px; 
       
`
const StyleDivElements = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 90px;
    gap: 150px;
`
const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #fff;
         
`
const StyleDivInfos = styled.div`
    width: 550px;
    height: 450px;    
    align-itens: center;
    display: flex;
    flex-direction: column;    
    margin-top: 50px;
    text-align: center;
    justify-content: center;  
       
`
const StyleSubtitleInfos = styled.h3`
    color: #371A46;
    margin-top: -10px;
    font-size: 22px;
`
const StyleDivButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`
const StyleParagraphInfos = styled.p`
    color: #371A46;
    font-size: 18px;
    font-weight: 600;
`

const StyleDivInputs = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyleInput = styled.input`
    width: 300px;
    height: 27px;
    border-radius: 10px;
    border: 1.2px solid #371A46;
    font-weight: 600;
`
const StyleSelect = styled.select`
    width: 308px;
    height: 27px;
    border-radius: 10px;
    border: 1.2px solid #371A46;
    font-weight: 500;
`
const StyleButton = styled.button`
    background-color: #FFD922;
    border-radius: 25px;
    width: 110px;
    height: 42px;
    border: 3px solid #371A46;
    font-size: 17px;
    font-weight: 700;
    color: #371A46;
    cursor: pointer;
`

const AplicationFormPage = () => {
    return(
        <StyleSection>
           <HeaderUser></HeaderUser> 
           <StyleDivElements>
            <StyleImg src={Astronauta4}/>
            <StyleDivInfos>
                <StyleSubtitle>Se Inscreva para começar</StyleSubtitle>
                <StyleSubtitleInfos>E seja o nosso próximo viajante</StyleSubtitleInfos>
                <StyleDivInputs>
                    <StyleInput placeholder="Digite seu nome"></StyleInput>
                    <StyleInput placeholder="Digite sua idade"></StyleInput>
                    <StyleInput placeholder="Nos fale porque você é um bom candidato"></StyleInput>
                    <StyleInput placeholder="Digite sua Profissão"></StyleInput>
                    <StyleInput placeholder="Digite seu País"></StyleInput>
                    <StyleParagraphInfos>Selecione a viagem que deseja:</StyleParagraphInfos>
                    <StyleSelect value="Selecione Sua Viagem">
                        <option value="Teste Mockado"></option>
                        <option value="Teste Mockado2"></option>
                    </StyleSelect>
                </StyleDivInputs>                
                <StyleDivButtons>
                    <StyleButton>Cadastrar</StyleButton>              
                </StyleDivButtons>                 
            </StyleDivInfos>
           </StyleDivElements>
        </StyleSection>
    )
}

export default AplicationFormPage;