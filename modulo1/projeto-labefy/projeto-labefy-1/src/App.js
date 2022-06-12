
import './App.css';
import CardCreateNewPlaylist from './components/CardCreateNewPlaylist';
import Header from './components/Header.js'
import axios from "axios"
import HomePlaylist from './components/HomePlaylist';
import PlaylistDetails from './components/PlaylistDetails';


function App() {  

  return (
    <div className="App">
      
      {/* <CardCreateNewPlaylist></CardCreateNewPlaylist> */}
      {/* <HomePlaylist/>    */}
      <PlaylistDetails/>
    </div>
  );
}

export default App;
