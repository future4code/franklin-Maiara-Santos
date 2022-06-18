import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [tarefas, setTarefa] = useState([

    {
      id: Math.random(), // Explicação abaixo
      texto: 'esta tarefa está pendente',
      completa: false // Indica se a tarefa está completa (true ou false)
    },

    {
      id: Date.now(), // Explicação abaixo
      texto: 'esta tarefa está concluída',
      completa: true // Indica se a tarefa está completa (true ou false)
    },

  ]);

  const [inputValue, setInputValue] = useState('')
  const [filtro, setFiltro] = useState('')


  // const salvarTarefa = (ev) => {
  //   if (ev) {
  //     ev.preventDefault();
  //   }

  //   if (tarefas) {
  //     localStorage.setItem("tarefas", tarefas);
  //   }
    
  // };

  // useEffect(() => {
  //   console.log("Dados lidos");

  //   const storeTarefas = localStorage.getItem("tarefas");    

  //   setTarefa (storeTarefas);
    
  // }, []);
    
  // useEffect (() => {
  //   () => {},[]});

  // useEffect(() => {
  //   () => {},[]});

 
  const criaTarefa = () => {
    const novaTarefa = 
      {
        id: Date.now(), // aqui, pode deixar o valor Date.now() para todas as tarefas as serem criadas
        texto: inputValue,// aqui, o texto da tarefa virá do input controlado guardado no estado
        completa: false // aqui, pode deixar o valor false para todas as tarefas as serem criadas, pq a tarefa sempre vai começar como não completa.
      }
    
    const copiaDoEstado = [...tarefas]
    copiaDoEstado.push (novaTarefa)    
    setTarefa (copiaDoEstado);
    setInputValue ('')
  }
   

  const selectTarefa = (id) => {
    const novaListaDeTarefas = tarefas.map ((tarefa)=>{
      if (id == tarefa.id) {
        const novoStatusTarefas = {...tarefa, completa: !tarefa.completa,}
        
        return novoStatusTarefas
      } else {
        return tarefa;
      }
    })
    setTarefa (novaListaDeTarefas);
  }

  const onChangeFilter = (event) => {
    setFiltro (event.target.value)
  }

   const onChangeInput = (event) => {
    setInputValue(event.target.value)
 }
 
    const listaFiltrada = tarefas.filter(tarefa => {
      switch (filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true;
      }
    });

    
    

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={inputValue} onChange={onChangeInput}/>
          <button onClick={criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={filtro} onChange={onChangeFilter}>
            <option value="">Geral</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                
              </Tarefa>
            )
          
          })}
        </TarefaList>
      </div>
    )
  }


export default App
