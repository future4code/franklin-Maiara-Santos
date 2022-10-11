import React, { useEffect, useState} from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { BASE_URL } from "../constants/urls";
import { TMDB_API_KEY, BASE_YT_URL, BASE_IMAGE_URL } from "../constants/urls";
import { useParams } from "react-router-dom";
import { BiMoney, BiMoviePlay, BiPlayCircle, BiMessageDetail, BiError } from "react-icons/bi";
import ReactPlayer from 'react-player/youtube'
import {CastContainer, CastCard, CastName, CharacterName} from "./StyleDetails"

const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState('');
    const [cast, setCast] = useState('');
  
    const getMovie = async (url) => {
      const res = await fetch(url);
      const data = await res.json();

      setMovie(data);
    };

    const getTrailer = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
  
        setTrailer(data);
    
      };

    const getCast = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
  
        setCast(data.cast);
    
      };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      };

    useEffect(() => {
        const movieURL = `${BASE_URL}${id}?${TMDB_API_KEY}`
        getMovie(movieURL);
    }, []);

    useEffect(() => {
        const trailerURL = `${BASE_URL}${id}/videos?${TMDB_API_KEY}`
        getTrailer(trailerURL);
    }, []);

    useEffect(() => {
        const castURL = `${BASE_URL}${id}/credits?${TMDB_API_KEY}`
        getCast(castURL);
        console.log(castURL)
    }, []);

    return(
        <div>
            {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BiMoney /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BiMoviePlay /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BiPlayCircle /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BiMessageDetail /> Sinopse:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
        <div>
            <h3>Elenco</h3>
            <CastContainer>
          {cast && cast.map(cast => (
            <CastCard key={cast.id}>
              <img
                src={
                  cast.profile_path === null
                    ? Error
                    : `${BASE_IMAGE_URL}original/${cast.profile_path}`
                }
                alt={cast.name}
              />
              <CastName>{cast.name}</CastName>
              <CharacterName>{cast.character}</CharacterName>
            </CastCard>
          ))}
        </CastContainer>
        </div>
        <h3>Trailer</h3>
        <div>
            {trailer && trailer.results.length ? (
            <ReactPlayer
              width="50%"
              height="500px"
              url={`${BASE_YT_URL}${trailer ? trailer.results[0].key : ''}`}
              controls={true}
            />
          ) : (
            <>
            <BiError/>
            </>
          )}</div>
        </div>
    )
};

export default MovieDetails;