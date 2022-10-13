import styled from "styled-components";
import { PurpleDark } from "../constants/colors";

export const CastTitle = styled.h1`
  font-size: 1.75rem;
  color: var(--black);
`

export const CastContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`
export const CastCard = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem;
  white-space: normal;
  border-radius: 0.25rem;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  background: var(--white);
  img {
    width: 10.938rem;
  }
`
export const CastName = styled.h1`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--black);
`
export const CharacterName = styled.p`
  margin-top: 0.25rem;
  color: var(--black);
  font-size: 1rem;
  font-weight: 400;
`

export const ContainerMovieDetails = styled.div`
  width: 100%;
  height: 750px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${PurpleDark};
`

export const StyleSinopse = styled.p`
    width: 70%;
    height: 100px;  
`

export const DetailsTextMovie = styled.div`
    width: 40%;
    margin-top: -65px;
    
`


export const StyleTitlePage = styled.h2`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
    margin-left: 12px;

`

export const ContainerTrailer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`