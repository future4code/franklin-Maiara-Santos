import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useAppNavigate } from '../../hooks/useAppNavigate'
import { ContainerHeader, StyleImage, StyleInput } from "./style";

function Header () {

    const { GoToHome } = useAppNavigate()

    return(
        <ContainerHeader>
            <Link to={GoToHome}><StyleImage src={logo} alt="logo"/></Link>
            <StyleInput type='text' placeholder="Pesquise um filme"></StyleInput>
        </ContainerHeader>
    )
} 

export default Header;