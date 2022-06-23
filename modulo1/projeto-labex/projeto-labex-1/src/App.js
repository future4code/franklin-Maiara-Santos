
import './App.css';
import HeaderUser from './components/HeaderUser';
import HeaderAdmin from './components/HeaderAdmin';
import axios from 'axios';
import styled from 'styled-components'
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage.js'

function App() {
  return (
    <div>
       {/* <HomePage></HomePage> */}
       <ListTripsPage></ListTripsPage>
    </div>
  );
}

export default App;
