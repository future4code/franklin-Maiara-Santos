import React from "react";
import styled from 'styled-components'
import ButtonWhite from "./ButtonWhite";


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

const StyleInfos = styled.h3`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #371A46;
    width: 80%;

`

function Card (props) {
    

    return(
        <StyleDiv>
            <StyleTitleCard>{'Surfando em Saturno'}</StyleTitleCard> 
            <StyleInfos>{'Saturno'}</StyleInfos>
            <StyleInfos>{'21/06/2022'}</StyleInfos>
            <StyleInfos>{'Nenhum viajante galático pode ficar de fora dessa!'}</StyleInfos>
            <StyleDivButtonsElements>
                <ButtonWhite></ButtonWhite>                
            </StyleDivButtonsElements>            
        </StyleDiv>
    )
}

export default Card;