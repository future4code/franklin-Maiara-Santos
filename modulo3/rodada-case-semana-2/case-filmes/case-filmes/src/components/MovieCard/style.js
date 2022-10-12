import styled from "styled-components";
import { PurpleDark } from "../../constants/colors";

export const ContainerCard = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   width: 20%;
   margin: 15px;
   
`

export const StyleTitleMovie = styled.h2`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 5px;

`

export const StyleVote = styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
    margin-top: -10px
`

export const StyleImgMovie = styled.img`
    width: 300px;
    height: 480px;
`

export const StyleStar = styled.img`
    width: 20px;
    heigth: 20px;
    margin-bottom: -2px;
    margin-right: 4px;
`

export const StyleButtonDetails = styled.button`
    background-color: #f7d454;
    min-width: 200px;
    max-width: 170px;
    height: 40px;
    align-items: center;
    display: flex;
    color: #111;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    border-radius: 5px;
    text-decoration: none;
    border: none;
`
