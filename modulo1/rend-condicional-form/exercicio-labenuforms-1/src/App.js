import './App.css';
import React, { useState } from 'react';
import Etapa1 from './components/Etapa1.js';
import Etapa2 from './components/Etapa2.js';
import Etapa3 from './components/Etapa3.js';
import Final from './components/Final.js';

function App() {

  const [statePage, setPage] = useState (1)

  const RenderizaPagina = () => {       
    switch (statePage) {
      case 1: 
      return <Etapa1/> 
      break; 
      case 2:
      return <Etapa2/> 
      break;
      case 3:
      return <Etapa3/> 
      break;       
      default:
      return <Final/>
      break;  
    }
}   

  const IrParaProximaEtapa = () => {
    const proximaPagina = statePage + 1;
    setPage (proximaPagina)

  }    
      return (
        <div>
          { RenderizaPagina() }      
          
          {statePage === 4 ? "" : <button onClick={ IrParaProximaEtapa }>Próxima Etapa</button>}    
      </div>
      )        
}


export default App;
