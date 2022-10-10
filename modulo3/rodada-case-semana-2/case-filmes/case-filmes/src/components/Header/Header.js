import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useAppNavigate } from '../../hooks/useAppNavigate'
import { ContainerHeader, StyleImage, StyleInput, ContainerSeach, StyleImgSeach, ContainerForm } from "./style";
import lupa from '../../assets/lupa.png'
import { useState } from "react";

const Header = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const { GoToHome } = useAppNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!search) return;
    
        navigate(`/search?q=${search}`, { replace: true });
        setSearch("");
      };

    return(
        <ContainerHeader id="navbar">
            <Link to={GoToHome}><StyleImage src={logo} alt="logo"/></Link>
            <ContainerSeach>
                <ContainerForm onSubmit={handleSubmit}>
                    <StyleInput 
                    type="text" 
                    placeholder="Pesquise um filme" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}>
                    </StyleInput>
                    <button type="submit">
                    <StyleImgSeach src={lupa}/>
                    </button>
                </ContainerForm>
            </ContainerSeach>
        </ContainerHeader>
    )
} 

export default Header;