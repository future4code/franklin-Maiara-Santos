import { MainContainer, SelectStyled } from "./StyleSelect";
import { useAppNavigate } from "../hooks/useAppNavigate";

function OptionSelect ({listadeloterias}) {

    return (
        <MainContainer>
        <SelectStyled onChange={useAppNavigate}>
            <option value={'/'}>{listadeloterias}</option>
            <option value={''}>{listadeloterias}</option>
            <option value={''}>{listadeloterias}</option>
            <option value={''}>{listadeloterias}</option>
        </SelectStyled>
        </MainContainer>
    )
}

export default OptionSelect