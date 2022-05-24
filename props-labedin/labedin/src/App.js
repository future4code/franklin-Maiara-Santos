import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import selfie from './imagens/foto.jpeg';
import educacao from './imagens/educacao.jpg';
import CardPequeno from './components/CardPequeno';
import iconeEmail from './imagens/icone-email.png';
import iconeEndereco from './imagens/icone-endereco.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={selfie}
          nome="Maiara Cruz" 
          descricao="Oi, eu sou a Maiara. Engenheira por formação e apaixonada por marketing e tecnologia."
        />
        
        <h2>Outras informações</h2>

      <CardPequeno
          imagemIcone={iconeEmail}
          descricao="Meu Email: Meuemailaqui@hotmail.com"
        />

      <CardPequeno
          imagemIcone={iconeEndereco}
          descricao="Meu Endereço: Rua da Liberdade = 2308 - Coração Valente - SP"
        />

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Educação" 
          descricao=" - Engenheira de Produção  /  - Formação FullStack na Labenu" 
        />
        
        <CardGrande 
          imagem={educacao}
          nome="Empregos" 
          descricao="Analista de SEO - SouSmile / Development I - Grupo Boticário" 
        />
      </div>

      <div className="page-section-container">      

        <h2>Minhas redes sociais</h2>
        
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
