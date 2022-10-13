import React from "react";
import { Link } from "react-router-dom";
import {IMG_API} from '../../constants/urls'
import { ContainerCard, StyleTitleMovie, StyleVote, StyleImgMovie, StyleStar, StyleButtonDetails, StyleTitleMovieWhite, StyleVoteWhite} from "./style";
import star from '../../assets/star.png'

const MovieCard = ({movie, showLink = true, noColorTitleWhite}) => {

    return(
        <ContainerCard>
           <StyleImgMovie src={IMG_API + movie.poster_path} alt={movie.title} />
           {noColorTitleWhite ? <StyleTitleMovie>{movie.title}</StyleTitleMovie> : <StyleTitleMovieWhite>{movie.title}</StyleTitleMovieWhite>} 
           {noColorTitleWhite ? <StyleVote><StyleStar src={star}/>{movie.vote_average}</StyleVote>: <StyleVoteWhite><StyleStar src={star}/>{movie.vote_average}</StyleVoteWhite> }
           {showLink && <Link style={{ textDecoration: 'none' }} to={`/movie/${movie.id}`}><StyleButtonDetails>Detalhes</StyleButtonDetails></Link>}
        </ContainerCard>
    )
}

export default MovieCard;

// PAREI NO MINUTO 33:34 https://www.youtube.com/watch?v=XqxUHVVO7-U&t=3808s