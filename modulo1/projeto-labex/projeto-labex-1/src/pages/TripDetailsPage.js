import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderAdmin from "../components/HeaderAdmin";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";


const StyleSection = styled.section` 
    background-color: #FFEDCE;
    min-height: 930px;
    height: auto; 
    width: 100%;
`

const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #371A46;
    text-align: center;
       
`
const StyleDiv = styled.div`
    display: flex;
    height: auto;
    min-height: 400px;
    width: 340px;
    border-radius: 55px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;
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

const StyleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    margin: 10px;
    
`

const StyleDivButtons = styled.div`
    display: flex;
    gap: 15px;      

`

const StyleButtonWhite = styled.button`
    background-color: #fff;
    border-radius: 25px;
    width: 110px;
    height: 42px;
    border: 3px solid #371A46;
    font-size: 15px;
    font-weight: 700;
    color: #371A46;
    cursor: pointer;
`

const StyleButtonYellow = styled.button`
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

function TripDetailsPage () {

// Usando useEffect para fazer a requisição assim que a página recarregar. Pois recarregar a página está FORA do escopo da requisição em si

const {id} = useParams()

    const [viagensDetalhe, setViagensDetalhe] = useState({})
    const [candidates, setCandidates]= useState([]);
    const [approved, setApproved]= useState([]);

    const navigate = useNavigate ()

    useEffect (()=> {
        if (!localStorage.getItem('token')){
            navigate ('/')
        }           
    }, [])  

    const pegaDetalhes = () => {
        const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/maiara-santos-franklin/trip/'
        const token = localStorage.getItem('token')
        axios.get (`${linkDaApi}${id}`, {
            headers: {
                auth: token
            } 
        })
        .then((response) => {
            setViagensDetalhe(response.data.trip)
            setCandidates(response.data.trip.candidates)
            setApproved(response.data.trip.approved)
            console.log('setViagensDetalhe:', response.data.trip)     
            console.log('setCandidates:', response.data.trip.candidates)
            console.log('setApproved:', response.data.trip.approved)                               
        })
        .catch((erro) => {
           
        })   
    }   
    
    useEffect(pegaDetalhes, [])
        
    const aceitarCandidato = (candidateId, approve) => {
        const haveToken = {
            headers: { auth: localStorage.getItem("token") }
        }
        const body = {
            approve: approve
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maiara-santos-franklin/trips/${id}/candidates/${candidateId}/decide`, body, haveToken)
            .then((response) => {             
              if(approve){
                swal("Aprovado")
              }else{
                swal("Deletado com Sucesso")
              }
              pegaDetalhes()
                console.log ("Aprovados", response.data)
            })
            .catch((erro) => {                
            }) 
      }
    
    const listaDeCandidatos = candidates.map((candidate)=>{
        return(
             <StyleContainer>
                <StyleDiv key={candidate.id}>
                     <StyleTitleCard>Nome: {candidate.name}</StyleTitleCard> 
                     <StyleInfos>Idade: {candidate.age}</StyleInfos>
                     <StyleInfos>País: {candidate.country}</StyleInfos>
                     <StyleInfos>Profissão: {candidate.profession}</StyleInfos>
                     <StyleInfos>{candidate.applicationText}</StyleInfos>
                     <StyleDivButtons>
                        <StyleButtonWhite onClick={()=>{aceitarCandidato(candidate.id,true)}}>Aprovar</StyleButtonWhite>
                        <StyleButtonYellow onClick={()=>{aceitarCandidato(candidate.id,false)}}>Descartar</StyleButtonYellow>
                     </StyleDivButtons>
                </StyleDiv>         
             </StyleContainer>
        )
    })        
    
     const listaDeAprovados = approved.map((candidate) => {
        return(
                       
        <StyleDiv key={candidate.id}>
            <StyleTitleCard>Nome: {candidate.name}</StyleTitleCard> 
            <StyleInfos>Idade: {candidate.age}</StyleInfos>
            <StyleInfos>País: {candidate.country}</StyleInfos>
            <StyleInfos>Profissão: {candidate.profession}</StyleInfos>
            <StyleInfos>{candidate.applicationText}</StyleInfos>
        </StyleDiv> 
       
        )
     })

    return(
        <StyleSection>
            <HeaderAdmin></HeaderAdmin>
            <StyleSubtitle>Detalhes da Viagem</StyleSubtitle>
                {viagensDetalhe ? (
                <StyleContainer>
                    <StyleDiv>
                        <StyleTitleCard>{viagensDetalhe.name}</StyleTitleCard> 
                        <StyleInfos>Data: {viagensDetalhe.date}</StyleInfos>
                        <StyleInfos>Duração: {viagensDetalhe.durationInDays}</StyleInfos>
                        <StyleInfos>Planeta: {viagensDetalhe.planet}</StyleInfos>
                        <StyleInfos>{viagensDetalhe.description}</StyleInfos>
                    </StyleDiv>
                </StyleContainer>) : ('')}               

            <StyleSubtitle>Candidatos Pendentes</StyleSubtitle>
            <StyleContainer>{listaDeCandidatos}</StyleContainer>             
            <StyleSubtitle>Candidatos Aprovados</StyleSubtitle>
            <StyleContainer>{listaDeAprovados}</StyleContainer>
        </StyleSection>
    )
}

export default TripDetailsPage;