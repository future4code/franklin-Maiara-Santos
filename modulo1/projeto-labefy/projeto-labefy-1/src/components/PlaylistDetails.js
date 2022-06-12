import React from 'react';
import Header from './Header';
import styled from 'styled-components'

const StyleContainerCard = styled.div // Estilo do card
`     
    width: 40%;
    height: 760px;
    align-items: center;
    background-color: #dcdcdc;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;     
    border-radius: 6px;
    margin: auto;
    margin-top: 2%;           

`

const StyleSubtitle = styled.h2`
  font-family: sans-serif;
  color: #000;
  background-color: #dcdcdc;   
  font-size: 28px;
  margin-bottom: -20px;
  
`

const StyleContainerCardMusic = styled.div // Estilo do card
`     
    width: 70%;
    height: 500px;
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;      
    border-radius: 6px;
    margin: auto;
    margin-top: 20%;           

`
const StyleSubtitleMusic = styled.h2`
  font-family: sans-serif;
  color: #000;
  background-color: #fff;   
  font-size: 22px;
  margin-bottom: -20px;
  
`
const StyleInput = styled.input`
  background-color: #dcdcdc;
  height: 38px;
  width: 250px;
  display: flex;
  text-align: center;
  border: none;
  border-radius: 10px;  
  font-size: 17px;
  color: #45525b;
  font-weight: 600;
`
const StyleButton1 = styled.button`
  background-color: #45525b;
  color: #fff;
  width: 180px;
  height: 38px;
  font-family: sans-serif;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  margin-bottom: 40px;
  font-size: 14px;

`
const StyleButton2 = styled.button`
  background-color: #fe7e01;
  color: #fff;
  width: 180px;
  height: 38px;
  font-family: sans-serif;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 14px;
`


function PlaylistDetails () {
    return (
        <div>
            <Header></Header>
            <StyleContainerCard>            
            <StyleSubtitle>Músicas desta Playlist</StyleSubtitle>
            <StyleContainerCardMusic>
                <StyleSubtitleMusic>Adicionar Música</StyleSubtitleMusic>
                <StyleInput
                value={''}
                placeholder='Nome da Música'
                onChange={''}
                />
                <StyleInput
                value={''}
                placeholder='Nome do Artista'
                onChange={''}
                />
                <StyleInput
                value={''}
                placeholder='URL da Música'
                onChange={''}
                />
                <StyleButton1>Adicionar a Playlist</StyleButton1>
                <StyleButton2>Criar uma Playlist</StyleButton2>
            </StyleContainerCardMusic>
        </StyleContainerCard>
        </div>
        
    )
}

export default PlaylistDetails;