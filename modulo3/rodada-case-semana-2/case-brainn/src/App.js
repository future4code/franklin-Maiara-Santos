import './App.css';
import { Router } from './routes/router';
import axios from "axios"
import OptionSelect from './components/OptionSelect';
import React, { useEffect, useState } from "react"
import { BASE_URL } from "./constants/urls"

function App() {

  const [concursos, setConcursos] = useState([])

  const getConcursos = () => {
    axios
      .get(`${BASE_URL}/loterias`)

      .then((res) => {
        setConcursos(res.listadeloterias)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getConcursos()
  }, [])

  return (
    <div>
      <OptionSelect listadeloterias={concursos}></OptionSelect>
      <Router/>
    </div>
  );
}

export default App;
