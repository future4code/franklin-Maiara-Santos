import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { BASE_URL } from "../constants/urls";
import { TMDB_API_KEY } from "../constants/urls";
import { ContainerMovies, ContainerBodyHome, StyleTitlePage } from "./StyleHome";
import BannerHome from "../components/BannerHome/BannerHome";
import Header from "../components/Header/Header";

function Search () {
const searchParams = useSearchParams()
const query = searchParams.get('q')
const [topMovies, setTopMovies] = useState([])

const getTopMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    setTopMovies(data.results);
};

useEffect(() => {

    const topMoviesURL = `${BASE_URL}top_rated?${TMDB_API_KEY}`;

    console.log(topMoviesURL)

    getTopMovies(topMoviesURL)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}, [])

    return(
        <div>
           <Header></Header>
            <BannerHome></BannerHome>
            <StyleTitlePage>Resultados para: <span>{query}</span></StyleTitlePage>
                <ContainerBodyHome>
                     <ContainerMovies>
                        {topMovies.length === 0 && <p>Carregando...</p>}
                        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
                     </ContainerMovies>
                </ContainerBodyHome>
        </div>
    )
}

export default Search;