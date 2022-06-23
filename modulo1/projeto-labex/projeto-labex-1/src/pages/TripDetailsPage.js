import React from "react";
import styled from "styled-components";
import CardDetails from "../components/CardDetails";
import HeaderAdmin from "../components/HeaderAdmin";

const StyleSection = styled.section`
    background-color: #3AAAFF;
    height: 935px;
    width: 100%;
`

const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #371A46;
    text-align: center;
       
`

function TripDetailsPage () {
    return(
        <StyleSection>
            <HeaderAdmin></HeaderAdmin>
            <StyleSubtitle>Detalhes da Viagem</StyleSubtitle>
            <div>
                <CardDetails></CardDetails>
            </div>
            <StyleSubtitle>Candidatos</StyleSubtitle>
        </StyleSection>
    )
}

export default TripDetailsPage;