import HomePlaylist from './HomePlaylist'
import React , {useState} from 'react'
import styled from 'styled-components'
import axios from "axios"


// import swal from "sweetalert";


const StyleContainerCardPlaylist = styled.div // Estilo do card
`     
    width: 22%;
    height: 350px;
    align-items: center;
    background-color: #dcdcdc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;     
    border-radius: 6px;
    margin: auto;
    margin-top: 15%;       

`

function CardCreateNewPlaylist () {

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
    
  const response = axios.post(linkDaApi,body,header)

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
        <StyleContainerCardPlaylist>
            <p>Criar uma nova Playlist</p>
            <input
            value={InputNewPlaylist}
            placeholder='Nome da nova Playlist'
            onChange={handleInputNewPlaylist}
            type="text"
            />
            <button onClick={AddPlaylist}>Criar Playlist</button>
            <button onClick={''}>Ver Playlists</button>               
        </StyleContainerCardPlaylist>
    )
}

export default CardCreateNewPlaylist;