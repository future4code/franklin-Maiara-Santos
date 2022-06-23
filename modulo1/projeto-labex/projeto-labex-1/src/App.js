
import './App.css';
import HeaderUser from './components/HeaderUser';
import HeaderAdmin from './components/HeaderAdmin';
import axios from 'axios';
import styled from 'styled-components'
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPage.js'
import AplicationFormPage from './pages/ApplicationFormPage';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';

function App() {
  return (
    <div>
       {/* <HomePage></HomePage> */}
       {/* <HomePage></HomePage> */}
       {/* <AplicationFormPage></AplicationFormPage> */}
       {/* <LoginPage></LoginPage> */}
       <AdminHomePage></AdminHomePage>
    </div>
  );
}

export default App;
