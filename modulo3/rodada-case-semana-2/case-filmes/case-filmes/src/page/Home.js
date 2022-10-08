import React from "react";
import BannerHome from "../components/BannerHome/BannerHome";
import Header from "../components/Header/Header";
import { BASE_URL, TMDB_API_KEY  } from '../constants/urls';
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { ContainerMovies } from "./StyleHome";

function Home () {

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
            <h2>Melhores Filmes</h2>
            <ContainerMovies>
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)}
            </ContainerMovies>
        </div>
    )
}

export default Home;