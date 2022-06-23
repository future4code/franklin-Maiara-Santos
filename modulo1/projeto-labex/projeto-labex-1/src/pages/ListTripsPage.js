import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import HeaderUser from "../components/HeaderUser";

const StyleSection = styled.section`
    background-color: #3AAAFF;
    height: 935px;
    width: 100%;
`

const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #fff;
    text-align: center;
       
`

function ListTripPage () {
    return(
        <StyleSection>
            <HeaderUser></HeaderUser>
            <StyleSubtitle>Lista de viagens</StyleSubtitle>
            <div>
                <Card></Card>
            </div>
        </StyleSection>
    )
}

export default ListTripPage;