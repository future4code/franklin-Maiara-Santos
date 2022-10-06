import styled from "styled-components";
import { PurpleLight } from "../../constants/colors";

export const ContainerHeader = styled.div`
  background-color: ${PurpleLight};
  width: 100%;
  height: 56px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const StyleImage = styled.img`
  display: flex;
  margin-left: 100px;
`

export const StyleInput = styled.input`
  border-radius: 5px;
  font-size: 16px;
  height: 20px;
  margin-right: 50px;
  text-align: center;
`