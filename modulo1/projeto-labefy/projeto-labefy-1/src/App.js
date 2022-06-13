import React, {useState} from 'react';
import './App.css';
// import Routes from "./routes/routes.js";
import styled from 'styled-components'
import axios from "axios"
import Header from './components/Header'
import { Link } from 'react-router-dom';

const StyleContainerCardPlaylist = styled.div // Estilo do card
`     
    width: 22%;
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
  margin-top: 50px;
  font-size: 28px;
 

`

const StyleInput = styled.input`
  background-color: #fff;
  height: 40px;
  width: 250px;
  display: flex;
  text-align: center;
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  color: #45525b;
  font-weight: 500;
`

const StyleButton1 = styled.button`
  background-color: #45525b;
  color: #fff;
  width: 120px;
  height: 38px;
  font-family: sans-serif;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  margin-bottom: 60px;
  font-size: 14px;
  cursor: pointer;

`
const StyleButton2 = styled.button`
  background-color: #fe7e01;
  color: #fff;
  width: 120px;
  height: 38px;
  font-family: sans-serif;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 14px;
  cursor: pointer;
`
const StyleSection = styled.section`
  background-color: #1A2B56;
  height: 935px;
`

function App() {  

  const [InputNewPlaylist, setNewPlaylist] = useState ('')

const handleInputNewPlaylist = (event) => {
    setNewPlaylist (event.target.value)
    
}

const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

const header = {
  headers: {
    Authorization: "maiara-santos-franklin"
  }
}

const AddPlaylist = () => {
  const body = {
    nome: InputNewPlaylist,
        };
    
  axios.post(linkDaApi,body,header)

  .then((response) => {
    setNewPlaylist(InputNewPlaylist);
    alert('Playlist criada com sucesso!')
})
.catch((erro) => {
    console.log(erro.message)
    alert('Não foi possível criar a playlist')
})

setNewPlaylist(InputNewPlaylist)

}

    return (
        <StyleSection>
          <Header></Header>         
          <StyleContainerCardPlaylist>
              <StyleSubtitle>Criar uma nova Playlist</StyleSubtitle>
              <StyleInput
              value={InputNewPlaylist}
              placeholder='Nome da nova Playlist'
              onChange={handleInputNewPlaylist}
              type="text"
              />                        
              <StyleButton1 onClick={AddPlaylist}>Criar Playlist</StyleButton1>
              <Link to="/playlists"><StyleButton2>Ver Playlists</StyleButton2></Link>
            </StyleContainerCardPlaylist>                    
        </StyleSection>
    
    )

  }

export default App;
