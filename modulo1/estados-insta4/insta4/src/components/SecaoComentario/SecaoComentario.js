import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export function SecaoComentario(props) {
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={''}
				onChange={props.onChangeComentario}
				
			/>
			<button onClick={props.aoEnviar && mostrarCampo}>Enviar</button>
		</CommentContainer>
	)
}

let campoInput = <InputComentario/>;
const mostrarCampo = () => {
	console.log (campoInput)
}

