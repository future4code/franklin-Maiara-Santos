import React, { useEffect } from "react";
import styled from "styled-components";
import CardDetails from "../components/CardDetails";
import HeaderAdmin from "../components/HeaderAdmin";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const StyleSection = styled.section`
    background-color: #FFEDCE;
    height: 935px;
    width: 100%;
`

const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #371A46;
    text-align: center;
       
`

function TripDetailsPage () {

// Usando useEffect para fazer a requisição assim que a página recarregar. Pois recarregar a página está FORA do escopo da requisição em si

const {id} = useParams()
const [viagens, setViagens] = useState([])

    const PegarDetalhes = () => {
        const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/'
        const token = localStorage.getItem('token')
        axios.get (`${linkDaApi}${id}/apply`, {
            headers: {
                auth: token
            } 
        })
        .then((response) => {
            console.log('Deu certo:', response.data)
        })
        .catch((error) => {
            console.log('Deu errado:', error.response)
        })    
    }
        
    useEffect (PegarDetalhes, [])

    const navigate = useNavigate ()

    useEffect (()=> {
        if (!localStorage.getItem('token')){
            navigate ('/')
        }           
    }, [])    

    const listaDeViagens = viagens.map ((viagem) => {
        return <CardDetails viagem={viagem} />
    })


    return(
        <StyleSection>
            <HeaderAdmin></HeaderAdmin>
            <StyleSubtitle>Detalhes da Viagem</StyleSubtitle>
            {listaDeViagens}
            <StyleSubtitle>Candidatos</StyleSubtitle>
        </StyleSection>
    )
}

export default TripDetailsPage;