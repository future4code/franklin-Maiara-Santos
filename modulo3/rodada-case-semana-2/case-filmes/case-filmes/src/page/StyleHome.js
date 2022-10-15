import styled from "styled-components";
import { PurpleDark } from "../constants/colors";

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
export const ContainerPagination = styled.div`
    width: 100%
    height: 100%;  
    min-height: 200px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

`

export const StyleButtonPagination = styled.button`
    background-color:  ${PurpleDark};
    min-width: 50px;
    height: 50px;
    align-items: center;
    display: flex;
    color:#fff;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    border-radius: 5px;
    text-decoration: none;
    border: none;

    &:hover {
        background-color: #7a297a
    }
`