import styled from "styled-components";
import { DiaDeSorteColor, BackgroundColor } from "../../constants/colors";

export const PageContainer = styled.div`
    width: 100%;
    height: 930px;
    background: ${BackgroundColor};
`

export const LeftSide = styled.div`
    width: 613px;
    height: 930px;
    background-color: ${DiaDeSorteColor};
    z-index: 1;
`