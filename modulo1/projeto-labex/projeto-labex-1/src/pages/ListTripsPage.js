import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import HeaderUser from "../components/HeaderUser";
import axios from "axios";
import { useEffect } from "react";

const StyleSection = styled.section`
    background-color: #3AAAFF;
    height: auto;
    width: 100%;
    padding-bottom: 20px;
`

const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #fff;
    text-align: center;
       
`
const StyleListTrips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    align-items: center;
    justify-content: center;
`

function ListTripPage () {

    const [viagens, setViagens] = useState([])

    const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips'
    
    const pegaViagens = () => {
        axios.get (linkDaApi)
        .then((response) => {
            setViagens(response.data.trips)
        })
        .catch((error) => {            
        })
    }    
    
    const listaDeViagens = viagens.map ((viagem) => {
        return <Card viagem={viagem} />
    })

    useEffect (pegaViagens, [])

        return(
        <StyleSection>
            <HeaderUser></HeaderUser>
            <StyleSubtitle>Lista de viagens</StyleSubtitle>
              <StyleListTrips>{listaDeViagens}</StyleListTrips>                         
        </StyleSection>
    )
}

export default ListTripPage;