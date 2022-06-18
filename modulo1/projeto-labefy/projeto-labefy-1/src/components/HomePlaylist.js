import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Lixeira from "../imagens/cesto-de-lixo.png"
import swal from "sweetalert";

 const StyleContainerCard = styled.div // Estilo do card
`     
    width: 28%;
    height: auto;
    align-items: center;
    background-color: #dcdcdc;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;     
    border-radius: 6px;
    margin: auto;
    margin-top: 10%;
    padding-bottom: 30px;           

`

 const StyleSubtitle = styled.h2`
  font-family: sans-serif;
  color: #fe7e01;
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
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;
`


const StyleButtonMini = styled.button`
  background-color: #fe7e01;
  color: #fff;
  width: 40px;
  height: 40px;
  font-family: sans-serif;
  border: none;
  border-radius: 15px;
  font-weight: 700; 
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
 height: auto;
 border: none;
 text-align: center;
 justify-content: space-between;
 gap: 5px;
 align-items: center;
 font-family: sans-serif;
 font-size: 16px;
 font-weight: 600;
 border-radius: 15px;
`
const StyleImage = styled.img`
width: 20px;
height: 20px;

`

function HomePlaylist () {

const [playlists, setPlaylists] = useState ([])

const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
  
const pegarPlaylist = () => {
    
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

  useEffect (pegarPlaylist, []);


  const deletaPlaylist = (playlistId) => {
    
    axios.delete(`${linkDaApi}/${playlistId}`, {
      headers: {
        Authorization: "maiara-santos-franklin"
      }
  })
  
    .then((response) => {   
      swal('Sua playlist foi deletada!') 
      pegarPlaylist();
  })
    .catch((erro) => {    
   /* swal('Tente de Novo')*/ /*BUG*/ 
    
  })
  
    }  
   
  
   return(
    <StyleSection>
       <Header></Header>
       <StyleContainerCard>              
        <StyleSubtitle>Playlists Criadas</StyleSubtitle>        
          {playlists.map((playlist) => {
            return (
              <StyleContainerButton key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}><StyleButtonMini title='Ver Playlist'>Ver</StyleButtonMini></Link>  
                <div key={playlist.id}>{playlist.name}</div>
                <StyleButtonMini onClick={() => deletaPlaylist(playlist.id)}><StyleImage src={Lixeira} alt="Excluir" title='Excluir Playlist'/></StyleButtonMini>
              </StyleContainerButton>
              )
          })}          
        <Link to="/"> <StyleButton>Criar nova Playlist</StyleButton></Link>       
     </StyleContainerCard>
    </StyleSection>     
   )
 }

 export default HomePlaylist 