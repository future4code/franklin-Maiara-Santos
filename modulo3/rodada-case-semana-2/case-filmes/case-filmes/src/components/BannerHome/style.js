import styled from "styled-components";
import { PurpleDark } from "../../constants/colors";

export const ContainerBanner = styled.div`
  background-color: ${PurpleDark};
  width: 100%;
  height: 449px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const StyleTitle = styled.h2`
    font-family: Roboto;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: -0.005em;
    text-align: center;
    color: #fff;
`

export const BoxTitle = styled.div`
    display: flex;
    width: 800px;
    height: 112px;
    flex-wrap: wrap;
`

export const StyleSubtitle = styled.h2`
    font-size: 14px;
    font-weight: 600;
    color: #fff;
`

export const StyleButtom = styled.button`
  background-color: #fff;
  min-width: 70px;
  max-width: 170px;
  height: 40px;
  align-items: center;
  display: flex;
  color: ${PurpleDark};
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  border-radius: 5px;
`;


