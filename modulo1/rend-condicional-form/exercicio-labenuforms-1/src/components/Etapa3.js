import React, { useState } from 'react';


function Etapa3 () {

    const [stateInputGraduacao, setGraduacao] = useState ("")
    const [stateComplementar, setComplementar] = useState ("")

    const handlestateInputTecnico = (event) => {
    setGraduacao (event.target.value)
}

    const handlestateInputComplementar = (event) => {
    setComplementar (event.target.value)
}
    return (
        <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <h2>7. Porque não terminou um curso de graduação?</h2>
            <input value={stateInputGraduacao} placeholder='Curso' onChange={handlestateInputTecnico}/>
            <h2>8. Você fez algum curso complementar? </h2>
            <input value={stateComplementar} placeholder='Complementar' onChange={handlestateInputComplementar}/>
            <select>
                <option value="CursoTecnico">Curso Técnico</option>
                <option value="CursoDeIngles">Curso de Inglês</option>
            </select>
            
        </div>
    )
}

export default Etapa3;