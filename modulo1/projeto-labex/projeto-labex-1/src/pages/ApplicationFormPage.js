import React, {useState} from "react";
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

const [InputName, setInputName] = useState ('')
const [InputAge, setInputAge] = useState ('')
const [InputWhy, setInputWhy] = useState ('')
const [InputProfession, setInputProfession] = useState ('')
const [InputCountry, setInputCountry] = useState ('')
const [InputSelect, setInputSelect] = useState ('')

const handleInputName = (event) => {
    setInputName(event.target.value)
}

const handleInputAge = (event) => {
    setInputAge(event.target.value)
}

const handleInputWhy = (event) => {
    setInputWhy(event.target.value)
}

const handleInputProfession = (event) => {
    setInputProfession(event.target.value)
}

const handleInputCountry = (event) => {
    setInputCountry(event.target.value)
}

const handleInputSelect = (event) => {
    setInputSelect(event.target.value)
}

    return(
        <StyleSection>
           <HeaderUser></HeaderUser> 
           <StyleDivElements>
            <StyleImg src={Astronauta4}/>
            <StyleDivInfos>
                <StyleSubtitle>Se Inscreva para começar</StyleSubtitle>
                <StyleSubtitleInfos>E seja o nosso próximo viajante</StyleSubtitleInfos>
                <StyleDivInputs>
                    <StyleInput onChange={handleInputName} value={InputName} placeholder="Digite seu nome"></StyleInput>
                    <StyleInput onChange={handleInputAge} value={InputAge} placeholder="Digite sua idade"></StyleInput>
                    <StyleInput onChange={handleInputWhy} value={InputWhy} placeholder="Nos fale porque você é um bom candidato"></StyleInput>
                    <StyleInput onChange={handleInputProfession} value={InputProfession} placeholder="Digite sua Profissão"></StyleInput>
                    <StyleInput onChange={handleInputCountry} value={InputCountry} placeholder="Digite seu País"></StyleInput>
                    <StyleParagraphInfos>Selecione a viagem que deseja:</StyleParagraphInfos>
                    <StyleSelect onChange={handleInputSelect} value={InputSelect}>
                        <option value="Teste Mockado"></option>
                        <option value="Teste Mockado2"></option>
                    </StyleSelect>
                </StyleDivInputs>                
                <StyleDivButtons>
                    <StyleButton onClick={''}>Cadastrar</StyleButton>              
                </StyleDivButtons>                 
            </StyleDivInfos>
           </StyleDivElements>
        </StyleSection>
    )
}

export default AplicationFormPage;