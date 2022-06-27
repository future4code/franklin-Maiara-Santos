import React, {useState} from "react";
import styled from 'styled-components';
import HeaderUser from "../components/HeaderUser";
import Cachorro1 from '../imagens/cachorro-1.jpg';
import axios from "axios";
import { useNavigate} from 'react-router-dom'


const StyleSection = styled.section`
    background-color: #3AAAFF;
    height: 935px;
    width: 100%;
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
    margin-top: 60px;
    gap: 150px;
`
const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #371A46;
         
`
const StyleDivInfos = styled.div`
    width: 550px;
    height: 450px;    
    align-itens: center;
    display: flex;
    flex-direction: column;    
    margin-top: 40px;
    text-align: center;
    justify-content: center;  
       
`
const StyleSubtitleInfos = styled.h3`
    color: #fff;
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
    height: 30px;
    border-radius: 10px;
    border: 1.2px solid #371A46;
    font-weight: 600;
    font-size: 16px;
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

function LoginPage () {

    const [InputEmail, setInputEmail] = useState ('')
    const [InputSenha, setInputSenha] = useState ('')   

    const navigate = useNavigate ()
    

    const handleInputName = (event) => {
        setInputEmail(event.target.value)
    }
    
    const handleInputAge = (event) => {
        setInputSenha(event.target.value)
    }

    console.log (InputEmail)
    console.log (InputSenha)

    // Criando a requisição que faz o login
    const SubmitLogin = () => {        
        const body = {
            email: InputEmail,
            password: InputSenha
        }

        axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login', body)
        .then ((response) => {
            // console.log('Deu certo:', response.data);      
            localStorage.setItem('token', response.data.token);
            navigate ('/admin/trips/list');
            // alert('Deu certo');  
                     
        })
        .catch ((error) => {
            console.log('Deu errado:', error.data)
            alert('Deu Ruim') 
        })
    }

       return(
        <StyleSection>
           <HeaderUser></HeaderUser> 
           <StyleDivElements>
            <StyleImg src={Cachorro1}/>
            <StyleDivInfos>
                <StyleSubtitle>Faça login para começar</StyleSubtitle>
                <StyleSubtitleInfos>E editar suas viagens</StyleSubtitleInfos>
                <StyleDivInputs>
                    <StyleInput value={InputEmail} onChange={handleInputName} placeholder="Digite seu e-mail"></StyleInput>
                    <StyleInput type='password' value={InputSenha} onChange={handleInputAge} placeholder="Digite sua senha"></StyleInput>                
                </StyleDivInputs>                
                <StyleDivButtons>
                    <StyleButton onClick={SubmitLogin}>Entrar</StyleButton>              
                </StyleDivButtons>                 
            </StyleDivInfos>
           </StyleDivElements>
        </StyleSection>
    )
}
//

export default LoginPage;