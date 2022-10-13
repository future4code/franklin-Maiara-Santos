import React from "react";
import BannerHome from "../components/BannerHome/BannerHome";
import Header from "../components/Header/Header";
import { BASE_URL, TMDB_API_KEY  } from '../constants/urls';
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { ContainerMovies, ContainerBodyHome, StyleTitlePage } from "./StyleHome";

function Home () {

    const [topMovies, setTopMovies] = useState([])

    const getTopMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json();
        setTopMovies(data.results);
    };

    useEffect(() => {

        const topMoviesURL = `${BASE_URL}popular?${TMDB_API_KEY}&language=pt-BR`;

        console.log(topMoviesURL)

        getTopMovies(topMoviesURL)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }, [])

    return(
    <div>
        <Header></Header>
        <BannerHome></BannerHome>
        <StyleTitlePage >Filmes Populares</StyleTitlePage>
        <ContainerBodyHome>
            <ContainerMovies>
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} noColorTitleWhite={true} ></MovieCard>)}
            </ContainerMovies>
        </ContainerBodyHome>
    </div>
        
    )
}

export default Home;