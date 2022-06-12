import React, { useState } from 'react';
 import styled from 'styled-components';
 import Header from './Header';
 import { linkDaApi , header } from "./CardCreateNewPlaylist"

 const StyleContainerCard = styled.div // Estilo do card
`     
    width: 28%;
    height: 390px;
    align-items: center;
    background-color: #dcdcdc;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;     
    border-radius: 6px;
    margin: auto;
    margin-top: 13%;           

`

 const StyleSubtitle = styled.h2`
  font-family: sans-serif;
  color: #000;
  background-color: #dcdcdc;
  font-size: 28px;

`

 const StyleButton = styled.button`
  background-color: #fe7e01;
  color: #fff;
  width: 200px;
  height: 38px;
  font-family: sans-serif;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 14px;
`


const StyleButtonMini = styled.button`
  background-color: #fe7e01;
  color: #fff;
  width: 200px;
  height: 38px;
  font-family: sans-serif;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 14px;
`

 function HomePlaylist () {

 const [statePlaylist, setStatePlayslist] = useState ([]);

 const addTrackToPlayList = async (playlistId) => {
  
 }

   return(
    <div>
       <Header></Header>
       <StyleContainerCard>              
        <StyleSubtitle>Playlists Criadas</StyleSubtitle>
        <div>
          <StyleButtonMini></StyleButtonMini>
          {''}
          <StyleButtonMini></StyleButtonMini>
        </div>
        <StyleButton>Criar nova Playlist</StyleButton>
     </StyleContainerCard>
    </div>     
   )
 }

 export default HomePlaylist 