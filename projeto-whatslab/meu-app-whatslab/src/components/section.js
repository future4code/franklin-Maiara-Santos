import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './button';

const StyleSection = styled.section`
    background-color: #dcdcdc;
    width: 100%;
    height: 950px;
    
    
`

const StyleDiv = styled.div`
    background-color: #f5f5dc;          
    text-align: center;    
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 800px;
    height: 700px;
    margin-left: 560px;
    

`

const StyleTitle = styled.h1`
    color: #000
    font-family: sans-serif;
    font-size: 35px;     
    text-align: center;    
    padding-top: 50px;
   

`

const StyleInputNome = styled.input`
    background-color: #fff;
    border-radius:3px;
    border-width: 2px;
    border-style: solid;
    border-color: #000;       
    text-align: center;    
    display: flex;
    justify-content: center;
    align-itens: center;
    width: 100px;
    height: 40px;
    margin-bottom: 20px;
    font-size: 18px;
    margin-right: 10px;
  

`

const StyleInputMensagem = styled.input`
    background-color: #fff;
    border-radius:3px;
    border-width: 2px;
    border-style: solid;
    border-color: #000;       
    text-align: center;    
    display: flex;
    justify-content: center;
    align-itens: center;
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
    font-size: 18px;
  

`

const StyleLabel = styled.label`
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
    margin-right:10px
    
    
    
`



function SectionChat (){
    const [nome, setNome ] = useState("")
    const [mensagem, setMensagem] = useState("")

    function handleClick(){
        return <p>{mensagem}</p>
    }

    return(
        <StyleSection>
            <StyleTitle>Protótipo do WhatsLab</StyleTitle> 
            <StyleDiv>
                <StyleLabel>Nome</StyleLabel>
                <StyleInputNome type='text' />
                <StyleLabel>Mensagem</StyleLabel>   
                <StyleInputMensagem onChange={event => setMensagem(event.target.value)} type='text'/>
                   
                  <Button onClink={()=> handleClick()}/> 
            </StyleDiv>
            
                    
        </StyleSection>
        
    );

}


export default SectionChat;