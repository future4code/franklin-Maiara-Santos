import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/200/300'}
            fotoPost={'https://picsum.photos/200'}
          />
           <Post
            nomeUsuario={'laurinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
           <Post
            nomeUsuario={'rafinha'}
            fotoUsuario={'https://picsum.photos/seed/picsum/200/300'}
            fotoPost={'https://picsum.photos/300/200'}
          />
        </MainContainer>
)

}


export default App;
