import React from 'react'
import Lixeira from "../imagens/cesto-de-lixo.png"
import styled from 'styled-components'

const StyleImage = styled.img`
width: 20px;
height: 20px;

`
function CardMusic (props) {
    return (
        <div key={props.musicId}>
            <div>
                <div>
                    <p><strong>Título: </strong>{props.name}</p>
                    <p><strong>Artista: </strong>{props.artist}</p>
                    <button onClick={props.deletar}><StyleImage src={Lixeira} alt="Excluir" title='Excluir Playlist'/></button>
                </div>
                <div>
                <audio src={props.url} controls />
                </div>
            </div>

        </div>
    )
}

export default CardMusic;