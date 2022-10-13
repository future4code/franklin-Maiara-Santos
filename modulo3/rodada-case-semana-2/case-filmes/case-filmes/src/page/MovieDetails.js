import React, { useEffect, useState} from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { BASE_URL } from "../constants/urls";
import { TMDB_API_KEY, BASE_YT_URL, BASE_IMAGE_URL } from "../constants/urls";
import { useParams } from "react-router-dom";
import { BiMoney, BiMoviePlay, BiPlayCircle, BiMessageDetail, BiError } from "react-icons/bi";
import ReactPlayer from 'react-player/youtube'
import {ContainerRecomendacoes, StyleImageRecommendations, ContainerTrailer, StyleTitlePage, CastContainer, CastCard, CastName, CharacterName, ContainerMovieDetails, StyleSinopse, DetailsTextMovie} from "./StyleDetails"
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import { IMG_API } from "../constants/urls";


const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState('');
    const [cast, setCast] = useState('');
    const [recommendations, setRecommendations] = useState('');
  
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

      const getRecommendations = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
  
        setRecommendations(data.results);
        console.log(data)
    
      };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      };

      function refreshPage() {
        setTimeout(()=>{
            window.location.reload(true);
        }, 500);
        console.log('page to reload')
    }

    useEffect(() => {
        const movieURL = `${BASE_URL}${id}?${TMDB_API_KEY}&language=pt-BR`
        getMovie(movieURL);
    }, []);

    useEffect(() => {
        const trailerURL = `${BASE_URL}${id}/videos?${TMDB_API_KEY}`
        getTrailer(trailerURL);
    }, []);

    useEffect(() => {
        const castURL = `${BASE_URL}${id}/credits?${TMDB_API_KEY}`
        getCast(castURL);

    }, []);

    useEffect(() => {
      const recommendationsURL = `${BASE_URL}${id}/recommendations?${TMDB_API_KEY}&language=pt-BR`
      getRecommendations(recommendationsURL);
    
  }, []);


    return(
      <div>
        <Header></Header>
          {movie && (
        <ContainerMovieDetails>
           
            <MovieCard movie={movie} showLink={false} noColorTitleWhite={false} />
      
            <DetailsTextMovie>
            <p>{movie.tagline}</p>
              <div >
                <h3><BiMoney /> Orçamento:</h3>
                <p>{formatCurrency(movie.budget)}</p>
              </div>
              <div >
                <h3><BiMoviePlay /> Receita:</h3>
                <p>{formatCurrency(movie.revenue)}</p>
              </div>
              <div >
                <h3><BiPlayCircle /> Duração:</h3>
                <p>{movie.runtime} minutos</p>
              </div>
              <div >
                <h3><BiMessageDetail /> Sinopse:</h3>
                <StyleSinopse>{movie.overview}</StyleSinopse>
              </div>
            </DetailsTextMovie>
        </ContainerMovieDetails>
      )}
        <div>
            <StyleTitlePage>Elenco</StyleTitlePage>
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
        <StyleTitlePage>Trailer</StyleTitlePage>
        <ContainerTrailer>
        { trailer && trailer.results.length ? (
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
          )}</ContainerTrailer>
        <StyleTitlePage>Recomendações</StyleTitlePage>
        <ContainerRecomendacoes>
          {recommendations && recommendations.map(recommendations => (
            <Link
              style={{ textDecoration: 'none' }}
              onClick={() => refreshPage()}
              key={recommendations.id}
              to={`/movie/${recommendations.id}`}
            >
              <div>
                <CastCard key={recommendations.id}>
                <StyleImageRecommendations
                  src={`https://image.tmdb.org/t/p/w300${recommendations.poster_path}`}
                  alt={recommendations.title}
              />
                <CastName>{recommendations.title}</CastName>
                </CastCard>
              </div>
            </Link>
          ))}
        </ContainerRecomendacoes>
        
      </div>
    )
};

export default MovieDetails;

