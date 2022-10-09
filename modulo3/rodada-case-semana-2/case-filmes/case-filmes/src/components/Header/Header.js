import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useAppNavigate } from '../../hooks/useAppNavigate'
import { ContainerHeader, StyleImage, StyleInput, ContainerSeach, StyleImgSeach, ContainerForm } from "./style";
import search from '../../assets/search.png'
import { useState } from "react";

function Header () {

    const [searchField, setSearch] = useState('')

    const { GoToMovieDetails, GoToHome } = useAppNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <ContainerHeader>
            <Link to={GoToHome}><StyleImage src={logo} alt="logo"/></Link>
            <ContainerSeach>
                <ContainerForm onSubmit={handleSubmit}>
                    <StyleInput type='text' placeholder="Pesquise um filme"></StyleInput>
                    <StyleImgSeach src={search}/>
                </ContainerForm>
            </ContainerSeach>
        </ContainerHeader>
    )
} 

export default Header;