import React, { useState } from 'react';
 import styled from 'styled-components';
 import Header from './Header';
 import { linkDaApi , header } from "./CardCreateNewPlaylist"

 function HomePlaylist () {

 const [statePlaylist, setStatePlayslist] = useState ([]);

 const addTrackToPlayList = async (playlistId) => {
  
 }

   return(
     <div>
       
        <h2>Playlists Criadas</h2>
        <div>{''}</div>
        <button></button>
     </div>
   )
 }

 export default HomePlaylist 