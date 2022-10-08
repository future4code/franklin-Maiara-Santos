import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useAppNavigate } from '../../hooks/useAppNavigate'
import { ContainerHeader, StyleImage, StyleInput, ContainerSeach, StyleImgSeach } from "./style";
import search from '../../assets/search.png'

function Header () {

    const { GoToHome } = useAppNavigate()

    return(
        <ContainerHeader>
            <Link to={GoToHome}><StyleImage src={logo} alt="logo"/></Link>
            <ContainerSeach>
                <StyleInput type='text' placeholder="Pesquise um filme"></StyleInput>
                <StyleImgSeach src={search}/>
            </ContainerSeach>
        </ContainerHeader>
    )
} 

export default Header;