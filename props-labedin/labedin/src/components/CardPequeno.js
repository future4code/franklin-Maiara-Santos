import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
    return (
        <div className="bigcard-container">            
            <div className="bigcard-container-div">
                <img src= {props.imagemIcone}/>                           
            </div>
            <h4>{props.descricao}</h4> 
        </div>
    )
}

export default CardPequeno;