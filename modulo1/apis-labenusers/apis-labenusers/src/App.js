import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import swal from 'sweetalert';
import './App.css'
import Lixeira from './imagens/cesto-de-lixo.png';

const EstiloBotao = styled.button`
  background-color: #04387D;
  border:none;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  font-weight: 600;
  font-size: 15px;
  color: #fff;
`
const EstiloBotao1 = styled.button`
  background-color: #dcdcdc;
  border:none;
  border-radius: 10px;
  
`
const ContainerCadastro = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
const EstiloInput = styled.input`  
  border-radius: 4px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  
`
const ContainerCadastroDetails = styled.div`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
`
const EstiloImagem = styled.img`
  width: 20px;
  height: 20px;
`

function App() {
  
  const [stateUsers, setStateUsers] = useState([])
  const [statePages, setStatePages] = useState(true)
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
    

  const newUser = () => {
    const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
      axios.post(linkDaApi, {
      name: inputName,
      email: inputEmail
    }, {
      headers: {
        Authorization: "maiara-santos-franklin"
      }
    })

    .then(() => {
      swal("Cadastro criado com sucesso")
      setInputName('')
      setInputEmail('')
    })

    .catch(() => {
      swal("Deu ruim. Tente novamente")
    })
  }
  
  const pegarCadastro = () => {
    const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios.get(linkDaApi, {
      headers: {
        Authorization: "maiara-santos-franklin"
      }
    })

    .then((response) => {
      setStateUsers(response.data)
    })

    .catch((erro) => {
      
    })
  }

  const deletarCadastro = (idCdastro) => {
    const linkDaApi = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios.delete(`${linkDaApi}/${idCdastro}`, {
      headers: {
        Authorization: "maiara-santos-franklin"
      }
    })

    .then(() => {
      swal("Cadastro removido com sucesso")
    })

    .catch(() => {
      swal("Deu ruim. Tente de Novo")
    })
  }

  useEffect(pegarCadastro, [stateUsers])

  const newListOfUsers = stateUsers.map((cadastro) => {
    return (
      <ContainerCadastro>
        <ContainerCadastroDetails 
        key={cadastro.id}>{cadastro.name}<EstiloBotao1 onClick={() => deletarCadastro(cadastro.id)}>
          <EstiloImagem src={Lixeira}/>
          </EstiloBotao1></ContainerCadastroDetails>
      </ContainerCadastro>
    )
  })
  
  function mudarPagina () {
    setStatePages(!statePages)
  }

  const handleInputName = (event) => {
    setInputName(event.target.value)
  }

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value)
  }

 var mudarDePaginaAoClicar

  if(statePages) {
    mudarDePaginaAoClicar = 
      <ContainerCadastro>
        <h1>Comece seu Cadastro preenchendo os campos abaixo</h1>
        <EstiloInput placeholder="Digite seu Nome" value={inputName} onChange={handleInputName}></EstiloInput>
        <EstiloInput placeholder="Digite seu E-mail" value={inputEmail} onChange={handleInputEmail}></EstiloInput>
        <EstiloBotao onClick={newUser}>Criar</EstiloBotao>
      </ContainerCadastro>
  } 
  
  else {
    
     mudarDePaginaAoClicar = 
     <ContainerCadastro>
      <h1>Cadastros Realizados</h1>
      {newListOfUsers}
      </ContainerCadastro>
  }  
  
  return (
    <ContainerCadastro>      
      {mudarDePaginaAoClicar}
      <EstiloBotao onClick={mudarPagina}>Mudar de Pagina</EstiloBotao>
    </ContainerCadastro>
  );
}

export default App;