import React, { useState } from 'react';


function Etapa2 () {

    const [stateCourse, setCourse] = useState ("")
    const [stateAge, setAge] = useState ("")


    const handleInputCourse = (event) => {
        setCourse (event.target.value)
    }

    const handleInputAge = (event) => {
        setAge (event.target.value)
    }

   
    return (
    <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <h2>1. Qual o curso?</h2>
        <input value={stateCourse} onChange={handleInputCourse} placeholder='Nome Completo'/>
        <h2>2. Qual a unidade de ensino?</h2>
        <input value={stateAge} onChange={handleInputAge} placeholder='Idade'/> 
        
    </div>
        
    )
}

export default Etapa2;