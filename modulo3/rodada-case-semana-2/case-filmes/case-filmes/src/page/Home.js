import React from "react";
import BannerHome from "../components/BannerHome/BannerHome";
import Header from "../components/Header/Header";
import { BASE_URL, TMDB_API_KEY  } from '../constants/urls';
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import {StyleButtonPagination, ContainerPagination, ContainerMovies, ContainerBodyHome, StyleTitlePage } from "./StyleHome";

function Home () {

    const [topMovies, setTopMovies] = useState([])
    const [itensPerPage, setItensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(topMovies.length / itensPerPage)

    const startIndex = (currentPage * itensPerPage);
    const endIndex = startIndex + itensPerPage;

    const currentMovies = topMovies.slice(startIndex , endIndex)


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
                {currentMovies.length === 0 && <p>Carregando...</p>}
                {currentMovies.length > 0 && currentMovies.map((movie) => <MovieCard key={movie.id} movie={movie} noColorTitleWhite={true} ></MovieCard>)}
            </ContainerMovies>
        </ContainerBodyHome>
        <ContainerPagination>
            {Array.from(Array(pages), (item, index) => {
                return <StyleButtonPagination key={index} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index}</StyleButtonPagination>
            })}
        </ContainerPagination>
    </div>
        
    )
}

export default Home;