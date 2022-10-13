import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { ContainerMovies, ContainerBodyHome, StyleTitlePage } from "./StyleHome";
import BannerHome from "../components/BannerHome/BannerHome";
import Header from "../components/Header/Header";
import { BASE_SEARCH, TMDB_API_KEY } from "../constants/urls";


function Search () {
const [searchParams] = useSearchParams()
const [movies, setMovies] = useState([]);
const query = searchParams.get('q')


const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    setMovies(data.results);
};

useEffect(() => {

    const searchWithQuery = `${BASE_SEARCH}?${TMDB_API_KEY}&query=${query}&language=pt-BR`;
    getSearchedMovies(searchWithQuery);
  }, [query]);

    return(
        <div>
           <Header></Header>
            <BannerHome></BannerHome>
            <StyleTitlePage>Resultados para:<span>{query}</span></StyleTitlePage>
                <ContainerBodyHome>
                     <ContainerMovies>
                        {movies.length === 0 && <p>Carregando...</p>}
                        {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} noColorTitleWhite={true}></MovieCard>)}
                     </ContainerMovies>
                </ContainerBodyHome>
        </div>
    )
}

export default Search;