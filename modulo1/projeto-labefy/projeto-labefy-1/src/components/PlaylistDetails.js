import React, {useEffect, useState} from 'react';
import Header from './Header';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
// import Lixeira from "../imagens/cesto-de-lixo.png"
// import {useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import CardMusic from './CardMusic';


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
    margin-top: 7%;           

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
  cursor: pointer;

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
  cursor: pointer;
`

const StyleSection = styled.section`
  background-color: #1A2B56;
  height: 935px;
`

const StyleContainerButton = styled.button`
 display: flex;
 flex-direction: row;
 width: 350px;
 height: 100px;
 border: none;
 text-align: center;
 justify-content: space-between;
 gap: 5px;
 align-items: center;
 font-family: sans-serif;
 font-size: 16px;
 font-weight: 600;
 border-radius: 15px;
 margin-top: 30px;
`

function PlaylistDetails () { 
      

const [inputMusic, setInputMusic] = useState ('')
const [inputArtist, setInputArtist] = useState ('')
const [inputLinkMusic, setInputLinkMusic] = useState ('')
const [musica, setMusicas] = useState ([])
const [playlists, setPlaylists] = useState ([])

 const handleInputMusic = (event) => {
   setInputMusic(event.target.value)
 }

 const handleInputArtist = (event) => {
   setInputArtist(event.target.value)
 }

  const handleInputLinkMusic = (event) => {
  setInputLinkMusic(event.target.value)
  
}

const pegarPlaylist = () => {
  const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'    
  axios.get(linkDaApi, {
    headers: {
      Authorization: "maiara-santos-franklin"
    }
})

  .then((response) => {   
    setPlaylists(response.data.result.list) 
    
})
.catch((erro) => {    
  swal('Tente Novamente')
})

  }

  useEffect (pegarPlaylist, [])



const pegaMusica = () => {
  const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'  
  axios.get(`${linkDaApi}/${setPlaylists.id}/tracks`, {
    headers: {
      Authorization: "maiara-santos-franklin"
    }
})

  .then((response) => {   
    // pegarPlaylist()
    setMusicas (response.data.result.tracks) 
    
})
  .catch((erro) => {    
 /* swal('Tente de Novo')*/ /*BUG*/ 
  
})
}

useEffect (pegaMusica, [])

const ListOfMusic = musica.map((musica) => {
  return (
      <CardMusic 
      key={musica.id}
      name={musica.name}
      artist={musica.artist}
      url={musica.url}
      musicId={musica.id}
      />
  )
});
  
    return (
        <StyleSection>
            <Header></Header>
            <StyleContainerCard>            
            <StyleSubtitle>Músicas desta Playlist</StyleSubtitle>
              <StyleContainerButton> 
                {ListOfMusic}             
              </StyleContainerButton>          
            <StyleContainerCardMusic>
                <StyleSubtitleMusic>Adicionar Música</StyleSubtitleMusic>
                <StyleInput
                value={inputMusic}
                placeholder='Nome da Música'
                onChange={handleInputMusic}
                />
                <StyleInput
                value={inputArtist}
                placeholder='Nome do Artista'
                onChange={handleInputArtist}
                />
                <StyleInput
                value={inputLinkMusic}
                placeholder='URL da Música'
                onChange={handleInputLinkMusic}
                />
                <StyleButton1>Adicionar a Playlist</StyleButton1>
                <Link to="/"><StyleButton2>Criar uma Playlist</StyleButton2></Link>                
            </StyleContainerCardMusic>
            </StyleContainerCard>
        </StyleSection>
        
    )
}

export default PlaylistDetails;