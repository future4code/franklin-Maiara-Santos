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
  text-align: center;
`

export const ContainerSeach = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-right: 30px;

`

export const StyleImgSeach = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-right: 30px;

`