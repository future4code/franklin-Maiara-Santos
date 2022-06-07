import React, {useState } from 'react';


function Etapa1 () {

   
    const [stateName, setStateName] = useState ('')
    const [stateAge, setStateAge] = useState ('')
    const [stateEmail, setStateEmail] = useState ('')
   

    const handleInputName = (event) => {
        setStateName (event.target.value)
    }

    const handleInputAge= (event) => {
        setStateAge (event.target.value)
    }

    const handleInputEmail= (event) => {
        setStateEmail (event.target.value)
    }

        return (
        <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <h2>1. Qual o seu nome?</h2>
            <input value={stateName} onChange={handleInputName} placeholder='Nome Completo'/>
            <h2>2. Qual sua idade?</h2>
            <input value={stateAge} onChange={handleInputAge} placeholder='Idade'/>
            <h2>3. Qual seu email?</h2>
            <input value={stateEmail} onChange={handleInputEmail} placeholder='Email'/>
            <h2>4. Qual a sua escolaridade?</h2>
            <select>
                <option value="EnsinoMedioIncompleto">Ensino Médio Incompleto</option>
                <option value="EnsinoMedioCompleto">Ensino Medio Completo</option>
                <option value="EnsinoSuperiorIncompleto">Ensino Superior Incompleto</option>
                <option value="EnsinoSuperiorCompleto">Ensino Superior Completo</option>
            </select>            
        </div>
    )
}

export default Etapa1;
