import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePlaylist from './components/HomePlaylist';
import PlaylistDetails from './components/PlaylistDetails';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element = { <App/> } exact path="/" />
      <Route element = { <HomePlaylist/> }  path="playlists" />
      <Route element = { <PlaylistDetails/> }  path="playlist-details" />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

