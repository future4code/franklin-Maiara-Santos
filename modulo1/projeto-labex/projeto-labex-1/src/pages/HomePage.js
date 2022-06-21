import React from "react";
import styled from 'styled-components'
import HeaderUser from "../components/HeaderUser";
import Astronauta0 from '../imagens/astronauta-0.jpg';

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
    text-align: center;
       
`
const StyleDivInfos = styled.div`
    width: 400px;
    height: 400px;    
    align-itens: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 50px;
    
`
const StyleSubtitleInfos = styled.h3`
    color: #371A46;
    margin-top: -10px;
`
const StyleButtonWhiteBig = styled.button`
    background-color: #fff;
    border-radius: 25px;
    width: 120px;
    height: 40px;
    border: 3px solid #371A46;
    font-size: 17px;
    font-weight: 700;
    color: #371A46;
`
const StyleButtonYellowBig = styled.button`
    background-color: #FFD922;
    border-radius: 25px;
    width: 120px;
    height: 40px;
    border: 3px solid #371A46;
    font-size: 17px;
    font-weight: 700;
    color: #371A46;
`
const StyleDivButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;

`

function HomePage () {
    return(
        <StyleSection>
           <HeaderUser></HeaderUser> 
           <StyleDivElements>
            <StyleImg src={Astronauta0}/>
            <StyleDivInfos>
                <StyleSubtitle>Sua viagem espacial começa aqui</StyleSubtitle>
                <StyleSubtitleInfos>Confira as opções e agende hoje mesmo</StyleSubtitleInfos>
                <StyleDivButtons>
                    <StyleButtonWhiteBig>Explorar</StyleButtonWhiteBig>
                    <StyleButtonYellowBig>Admin</StyleButtonYellowBig>
                </StyleDivButtons>                
            </StyleDivInfos>
           </StyleDivElements>
        </StyleSection>
    )
}

export default HomePage;