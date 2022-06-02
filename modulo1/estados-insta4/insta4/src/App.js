import React, {useState} from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const EstiloBotao = styled.button`
  background-color: #dcdcdc;
  border:none;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


const EstiloInput = styled.input`  
  border-radius: 4px;
`

const EstiloForm = styled.form`
  border-radius: 5px;
`

function App() {
  
  const [estadoPost, setEstadoPost] = useState([
    
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/200/300',
        feedUsuario: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'laurinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        feedUsuario: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'rafinha',
        fotoUsuario: 'https://picsum.photos/seed/picsum/200/300',
        feedUsuario: 'https://picsum.photos/300/200'
      }
     ],
   );
    
   const [valorInputNome, setValorInputNome] = useState ("");
   const [valorInputFoto, setValorInputFoto] = useState ("");
   const [valorInputFeed, setValorInputFeed] = useState ("");

   const adicionaNovoPost = (pararRefreshdaPagina) => {
    pararRefreshdaPagina.preventDefault()
     const novoPostParaAdicionar = {
      nomeUsuario: valorInputNome,
      fotoUsuario: valorInputFoto,      
      feedUsuario: valorInputFeed
    }

    const novaListaPost = [...estadoPost,novoPostParaAdicionar];
    setEstadoPost(novaListaPost);
    setValorInputNome("");
    setValorInputFoto("");
    setValorInputFeed("");

     }

     const handlevalorInputNome = (event) => {
       setValorInputNome (event.target.value);
     }

     const handlevalorInputFoto = (event) => {
      setValorInputFoto (event.target.value);
    }

    const handlevalorInputFeed = (event) => {
      setValorInputFeed (event.target.value);
    }

    const novaListadePost = estadoPost.map ((post) =>{
      return (
                 
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            feedUsuario={post.feedUsuario}
            />
     )
    })
    

    return (
      <MainContainer>
        <EstiloForm>
            <EstiloInput 
            value={valorInputNome} 
            onChange={handlevalorInputNome} 
            placeholder="Nome do Usuário"/>

            <EstiloInput 
            value={valorInputFoto} 
            onChange={handlevalorInputFoto} 
            placeholder="Link foto selfie"/>
            
            <EstiloInput 
            value={valorInputFeed} 
            onChange={handlevalorInputFeed} 
            placeholder="Link foto do post"/>
            <EstiloBotao onClick={adicionaNovoPost}>Enviar Post</EstiloBotao>
        </EstiloForm>
        {novaListadePost}
      </MainContainer>
    )
  
  }
export default App;
