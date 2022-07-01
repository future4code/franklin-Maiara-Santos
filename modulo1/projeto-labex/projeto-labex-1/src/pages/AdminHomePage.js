import React from "react";
import styled from "styled-components";
import CardAdmin from "../components/CardAdmin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


const StyleSection = styled.section`
    background-color: #3AAAFF;
    height: auto;
    width: 100%;
    padding-bottom: 20px;
    min-height: 930px;
`

const StyleMenu = styled.div`
  width: 100%
  height: auto;
  background-color: #FFEDCE;
  align-items: center;    
  display: flex;
  justify-content: space-between;
 
`

const StyleTitle = styled.h2`
    color: #371A46;
    background-color: none;
    text-decoration: none;
    font-size: 45px;
    margin-left: 40px;
    cursor: pointer;
`
const StyleButton = styled.button`
    width: 280px;
    height: 45px;
    border-radius: 35px;
    background-color: #FFD922;
    font-size: 18px;
    font-weight: 600;
    color: #371A46;
    border-radius: 1px solid #371A46;
    margin-left: 900px;
    cursor: pointer;

`

const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #371A46;
    text-align: center;
       
`
const StyleListTrips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    align-items: center;
    justify-content: center;
`

const StyleButtonLogout = styled.button`
    width: 180px;
    height: 45px;
    border-radius: 35px;
    background-color: #FFD922;
    font-size: 18px;
    font-weight: 600;
    color: #371A46;
    border-radius: 1px solid #371A46;
    margin-right: 40px;
    cursor: pointer;

`

 function AdminHomePage () {

   const [viagens, setViagens] = useState([])

   const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/maiara-santos-franklin/trips'

   const navigate = useNavigate ()
   const goToCreateTrip = () => {
    navigate ('/admin/trips/:id')
   }

   const pegaViagens = () => {
    axios.get (linkDaApi)
    .then((response) => {
        setViagens(response.data.trips)
    })
    .catch((error) => {            
    })
}    

const listaDeViagens = viagens.map ((viagem) => {
    return <CardAdmin viagem={viagem} />
})
    
    useEffect (pegaViagens, [])

    useEffect (()=> {
        if (!localStorage.getItem('token')){
            navigate ('/')
        }           
    }, [])

    const GoToHome = () =>{    
    navigate ('/')
    }

    const Logout = () => {
        const token = localStorage.removeItem('token')
        navigate ('/login')
    }

    return(
        <StyleSection>
            <StyleMenu>         
                <StyleTitle onClick={GoToHome}>Labex</StyleTitle>
                <StyleButton onClick={goToCreateTrip}>Criar uma nova viagem</StyleButton>
                <StyleButtonLogout onClick={Logout}>Logout</StyleButtonLogout>
            </StyleMenu>
            <StyleSubtitle>Lista de viagens</StyleSubtitle>
            <StyleListTrips>
                {listaDeViagens}
            </StyleListTrips>
        </StyleSection>
    )
}

export default AdminHomePage;

