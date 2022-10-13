import styled from "styled-components";

export const ContainerMovies = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1600px;
    flex-wrap: wrap;
    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 20%;
        margin: 20px;
        flex-wrap: wrap;
      }
    @media screen and (max-width: 1110px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 20%;
        margin: 20px;
      }
`
export const ContainerBodyHome = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    
`

export const StyleTitlePage = styled.h2`
    font-family: Roboto;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;

`
