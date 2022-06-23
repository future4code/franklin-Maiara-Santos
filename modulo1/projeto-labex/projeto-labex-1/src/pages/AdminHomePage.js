import React from "react";
import styled from "styled-components";
import CardAdmin from "../components/CardAdmin";
import HeaderAdmin from "../components/HeaderAdmin";

const StyleSection = styled.section`
    background-color: #FFEDCE;
    height: 935px;
    width: 100%;
`

const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #fff;
    text-align: center;
       
`

function AdminHomePage () {
    return(
        <StyleSection>
            <HeaderAdmin></HeaderAdmin>
            <StyleSubtitle>Lista de viagens</StyleSubtitle>
            <div>
                <CardAdmin></CardAdmin>
            </div>
        </StyleSection>
    )
}

export default AdminHomePage ;