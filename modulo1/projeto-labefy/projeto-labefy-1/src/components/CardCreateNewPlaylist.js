import React , {useState} from 'react';

function CardCreateNewPlaylist () {

const [InputNewPlaylist, setNewPlaylist] = useState ('')
const [ListOfPlaylist, setListaDePlaylist] = useState ('')

const handleInputNewPlaylist = (event) => {
    setNewPlaylist (event.target.value)
    
}

const StateAddNewPlaylist = (stopRefresh) => {
    stopRefresh.preventDefault ()
    const NewPlaylist = {
        name: InputNewPlaylist
    }

    const NewStateListOfPlaylists = [...ListOfPlaylist, NewPlaylist]
        setListaDePlaylist (NewStateListOfPlaylists);
        setNewPlaylist ('')
 }

// const NewPlaylistOnList = ListOfPlaylist.map ((playlist)=>{
//     return (
//         <div>
//             <p>{playlist.name}</p>
//         </div>
//     )});

    return (
        <div>
            <p>Criar uma nova Playlist</p>
            <input
            value={InputNewPlaylist}
            placeholder='Digite o nome da nova Playlist'
            onChange={handleInputNewPlaylist}
            type="text"
            />
            <button onClick={StateAddNewPlaylist}>Criar Playlist</button>
            <button>Ver Playlists</button> 
            {/* {NewPlaylistOnList}                  */}
        </div>
    )
}

export default CardCreateNewPlaylist;