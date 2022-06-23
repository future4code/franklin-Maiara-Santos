import React from "react";
import styled from "styled-components";
import CardAdmin from "../components/CardAdmin";


const StyleSection = styled.section`
    background-color: #3AAAFF;
    height: 935px;
    width: 100%;
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
    margin-right: 40px;

`

const StyleSubtitle = styled.h2`
    font-size: 35px;
    color: #371A46;
    text-align: center;
       
`

 function AdminHomePage () {

    // const GoToHome = () =>{
    //     const navigate = useNavigate()
    //     navigate ('/')
    //   }
        
    return(
        <StyleSection>
            <StyleMenu>         
                <StyleTitle>Labex</StyleTitle>
                <StyleButton>Criar uma nova viagem</StyleButton>
            </StyleMenu>
            <StyleSubtitle>Lista de viagens</StyleSubtitle>
            <div>
                <CardAdmin></CardAdmin>
            </div>
        </StyleSection>
    )
}

export default AdminHomePage;

