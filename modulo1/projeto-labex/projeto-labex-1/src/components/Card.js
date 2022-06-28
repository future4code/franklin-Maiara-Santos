import React from "react";
import styled from 'styled-components'
import ButtonWhite from "./ButtonWhite";
import { useNavigate } from 'react-router-dom';


const StyleDiv = styled.div`
    display: flex;
    height: 430px;
    width: 340px;
    border-radius: 55px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyleDivButtonsElements = styled.div`
    display: flex;
    gap: 15px;      

`
const StyleTitleCard = styled.h3`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: #371A46;

`

const StyleInfos = styled.p`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #371A46;
    width: 80%;

`

const StyleButtonWhite = styled.button`
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


function Card (props) {  
    
    const navigate = useNavigate()

    const GoToApplication = (id) =>{    
      navigate (`/trips/application/${id}`)
    }


    return(
        <StyleDiv>
            <StyleTitleCard>{props.viagem.name}</StyleTitleCard> 
            <StyleInfos>{props.viagem.planet}</StyleInfos>
            <StyleInfos>{props.viagem.date}</StyleInfos>
            <StyleInfos>{props.viagem.description}</StyleInfos>
            <StyleDivButtonsElements>
                <StyleButtonWhite onClick={()=> {GoToApplication(props.viagem.id)}}>Inscrever</StyleButtonWhite>             
            </StyleDivButtonsElements>            
        </StyleDiv>
    )
}

export default Card;