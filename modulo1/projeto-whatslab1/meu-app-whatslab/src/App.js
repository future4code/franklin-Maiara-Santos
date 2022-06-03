import React, {useState} from "react";
import styled from 'styled-components';
import MensagemBalao from "./components/MensagemBalao";

const EstiloSecao = styled.section`
  background-color: #F5F5F5;
  width: 100%;
  height: 910px;
`

const EstiloTela = styled.div`
  background-color: #f5f5dc;          
  text-align: center;    
  display: flex;  
  align-items: flex-end;
  width: 650px;
  height: 100%;
  margin-left: 600px;
  border: 1px solid #000;
  flex-direction: column;
  justify-content: flex-end;
   
  
`

const EstiloContainerMensagem = styled.div`
  display: flex;
  background-color: #f5f5dc;
  align-items: center;
  justify-content: center;
  width: 650px;
  height: 90px;
  margin-left: 60px;
  margin-top: 50px;
  position: fixed;
  
  
`

const EstiloInputMensagem = styled.input`
  background-color: #fff;
  border-radius:3px;
  border: 2px solid #000;        
  text-align: center;    
  color: #000;
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  font-size: 18px; 
`

const EstiloInputNome = styled.input`
  background-color: #fff;
  border-radius:3px;
  border: 2px solid #000;   
  text-align: center;
  color: #000;
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
  font-size: 18px;
  margin-right: 10px;
`

const EstiloBotao = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color:#2E8B57;
  margin: 10px;
  margin-bottom: 30px;

`

function App ()
{   
  const [stateMessage, setStateMessage] = useState ([]);

  const [stateInputName, setStateInputName] = useState ("")
  const [stateInputText, setStateInputText] = useState ("")

    console.log (stateInputName);
    console.log (stateInputText);
   
   

  const InsertNewMessage = () => {
    
    const newMessage = {
      boxName: stateInputName,
      boxText: stateInputText   
    }
    console.log (newMessage);

    const newListOfMessage = [...stateMessage, newMessage];
     newListOfMessage.push(newMessage); /* Colocando a mensagem por último no array, para as antigas ficarem no topo. Sem o push não tava dando certo */
    setStateMessage (newListOfMessage);
    setStateInputName ("");
    setStateInputText ("");

    
    
    console.log(newMessage);
    console.log (newListOfMessage);
  }

  

   const onChangestateInputName = (event) => {
   setStateInputName (event.target.value)
 }

 const onChangestateInputText = (event) => {
  setStateInputText (event.target.value)
}

const ListofMessage = stateMessage.map((mensagem) => {
  return (
    <MensagemBalao 
      key={mensagem}     
     
      boxName={mensagem.boxName}           
      boxText={mensagem.boxText}           
    
    />
  )});


  return (
  <EstiloSecao>
    <EstiloTela>   
      <EstiloContainerMensagem>
          <EstiloInputNome placeholder="Nome" value={stateInputName} onChange={onChangestateInputName}            
          />                      
          <EstiloInputMensagem  placeholder="Mensagem"  value={stateInputText} onChange={onChangestateInputText} 
          />
          <EstiloBotao
           onClick={InsertNewMessage}>
             Mandar
             </EstiloBotao>          
          </EstiloContainerMensagem>
          {ListofMessage}
    </EstiloTela>
  </EstiloSecao>
    
  )

}

export default App;