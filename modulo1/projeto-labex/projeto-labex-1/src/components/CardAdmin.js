import React from "react";
import styled from 'styled-components'
import ButtonWhiteAdmin from "./ButtonWhiteAdmin";
import ButtonYellow from "./ButtonYellow";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
const StyleButtonWhiteLittle = styled.button`
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
const StyleButtonYellowLittle = styled.button`
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


function CardAdmin (props) {


    const [viagens, setViagens] = useState([])
    const navigate = useNavigate ()

    const GoToTripDetails = (id) =>{   
        
        navigate (`/admin/trips/create/${id}`)
        }

        const pegaViagens = () => {
            const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips'
            axios.get (linkDaApi)
            .then((response) => {
                setViagens(response.data.trips)
            })
            .catch((error) => {            
            })
        }  

        useEffect (pegaViagens, [])
        
    const deletarViagem = async (id) => {
    const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips'
    const token = localStorage.getItem('token')
        
    axios.delete(`${linkDaApi}/${id}`, {
        headers: {
            auth: token
        }})
          
            .then((response) => {   
              swal('Viagem Deletada com Sucesso') 
              setViagens(response.data.trips)
              pegaViagens();
          })
            .catch((erro) => {    

          })
          
            }  
           

    return(
        <StyleDiv>
            <StyleTitleCard>{props.viagem.name}</StyleTitleCard> 
            <StyleInfos>{props.viagem.planet}</StyleInfos>
            <StyleInfos>{props.viagem.date}</StyleInfos>
            <StyleInfos>{props.viagem.description}</StyleInfos>
            <StyleDivButtonsElements>
                <StyleButtonWhiteLittle onClick={()=> { deletarViagem (props.viagem.id) }}>Deletar</StyleButtonWhiteLittle>
                <StyleButtonYellowLittle onClick={() => {GoToTripDetails(props.viagem.id)}}>Detalhes</StyleButtonYellowLittle>
            </StyleDivButtonsElements>            
        </StyleDiv>
    )
}

export default CardAdmin;