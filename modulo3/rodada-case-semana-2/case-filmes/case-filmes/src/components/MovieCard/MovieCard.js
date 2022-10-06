import React from "react";
import { Link } from "react-router-dom";
import {IMG_API} from '../../constants/urls'
import { ContainerCard } from "./style";

const MovieCard = ({movie, showLink = true}) => {
    return(
        <ContainerCard>
           <img src={IMG_API + movie.poster_path} alt={movie.title} />
           <h2>{movie.title}</h2>
           <p>Icone{movie.vote_average}</p>
           {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </ContainerCard>
    )
}

export default MovieCard;

// PAREI NO MINUTO 33:34 https://www.youtube.com/watch?v=XqxUHVVO7-U&t=3808s