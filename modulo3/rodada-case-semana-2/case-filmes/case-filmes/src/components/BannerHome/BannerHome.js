import React from "react";
import { ContainerBanner, StyleTitle, BoxTitle, StyleSubtitle, StyleButtom } from "./style";

function BannerHome () {

    return(
        <ContainerBanner>
            <BoxTitle>
                <StyleTitle>Milhões de filmes, séries e pessoas para descobrir. Explore já.</StyleTitle>
            </BoxTitle>
            <div>
                <StyleSubtitle>FILTRE POR:</StyleSubtitle>
            </div>
            <div>
                <StyleButtom>Ação</StyleButtom>
            </div>
        </ContainerBanner>
    )
}

export default BannerHome;