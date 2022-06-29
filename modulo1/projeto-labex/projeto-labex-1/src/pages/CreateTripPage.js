import React, {useState} from "react";
import styled from 'styled-components';
import HeaderAdmin from "../components/HeaderAdmin";
import Cachorro2 from '../imagens/cachorro-2.jpg';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert'

const StyleSection = styled.section`
    background-color: #3AAAFF;
    height: 935px;
    width: 100%;
    min-height: 930px;
`
const StyleImg = styled.img`
    width: 450px;
    height: 450px;
    margin-bottom: 20px; 
       
`
const StyleDivElements = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 90px;
    gap: 150px;
`
const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #fff;
         
`
const StyleDivInfos = styled.div`
    width: 550px;
    height: 450px;    
    align-itens: center;
    display: flex;
    flex-direction: column;    
    margin-top: 50px;
    text-align: center;
    justify-content: center;  
       
`
const StyleSubtitleInfos = styled.h3`
    color: #371A46;
    margin-top: -10px;
    font-size: 22px;
`
const StyleDivButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

const StyleDivInputs = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyleInput = styled.input`
    width: 300px;
    height: 27px;
    border-radius: 10px;
    border: 1.2px solid #371A46;
    font-weight: 600;
    text-align: center;
    text-align: center;
`
const StyleButton = styled.button`
    background-color: #FFD922;
    border-radius: 25px;
    width: 110px;
    height: 42px;
    border: 3px solid #371A46;
    font-size: 17px;
    font-weight: 700;
    color: #371A46;
    cursor: pointer;
`

const CreateTripPage = () => {

    const [InputNameTrip, setInputNameTrip] = useState ('')
    const [InputPlanet, setInputPlanet] = useState ('')
    const [InputDate, setInputDate] = useState ('')
    const [InputDescription, setInputDescription] = useState ('')
    const [InputDurationTrip, setInputDurationTrip] = useState ('')
    
    
    const handleInputNameTrip = (event) => {
        setInputNameTrip(event.target.value)
        
    }

    const handleInputPlanet = (event) => {
        setInputPlanet(event.target.value)
    }

    const handleInputDate = (event) => {
        setInputDate(event.target.value)
    }

    const handleInputDescription = (event) => {
        setInputDescription(event.target.value)
    }

    const handleInputDurationTrip = (event) => {
        setInputDurationTrip(event.target.value)
    }

    const navigate = useNavigate ()
    
    useEffect (()=> {
        if (!localStorage.getItem('token')){
            navigate ('/')
        }           
    }, [])

    const CriarViagem = () => {
        const body = {
            name: InputNameTrip,
            planet: InputPlanet,
            date: InputDate,
            description: InputDescription,
            durationInDays: InputDurationTrip
        }
    
        axios
          .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maiara-santos-franklin/trips`, body , {
            headers: { auth: localStorage.getItem("token") }
          } )

          .then((response) => {
            swal("Viagem Criada com sucesso!")
            setInputNameTrip("")   
            setInputPlanet("")
            setInputDate("")
            setInputDescription("")
            setInputDurationTrip("")

          })
          .catch((erro) => {
            swal("Deu Ruim")         
          })
      }

        return(
        <StyleSection>
           <HeaderAdmin></HeaderAdmin> 
           <StyleDivElements>
            <StyleImg src={Cachorro2}/>
            <StyleDivInfos>
                <StyleSubtitle>Crie uma nova viagem</StyleSubtitle>
                <StyleSubtitleInfos>E proporcione uma aventura aos seus clientes</StyleSubtitleInfos>
                <StyleDivInputs>
                    <StyleInput value={InputNameTrip} onChange={handleInputNameTrip} placeholder="Nome da Viagem"></StyleInput>
                    <StyleInput value={InputPlanet} onChange={handleInputPlanet} placeholder="Qual o planeta?"></StyleInput>
                    <StyleInput value={InputDate} onChange={handleInputDate} placeholder="Data"></StyleInput>
                    <StyleInput value={InputDescription} onChange={handleInputDescription} placeholder="Descrição da viagem"></StyleInput>
                    <StyleInput value={InputDurationTrip} onChange={handleInputDurationTrip} placeholder="Duração da viagem"></StyleInput>                    
                </StyleDivInputs>                
                <StyleDivButtons>
                    <StyleButton onClick={CriarViagem}>Cadastrar</StyleButton>              
                </StyleDivButtons>                 
            </StyleDivInfos>
           </StyleDivElements>
        </StyleSection>
    )
}

export default CreateTripPage;