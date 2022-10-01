import React from "react";
import LuckyNumber from "../../components/LuckyNumber";
import { PageContainer, LeftSide} from "./StyleDiadeSorte";

function DiadeSorte () {

    return(
        <PageContainer>
            <LeftSide>
                <div>Dia de Sorte</div>
                <div>Dia de Sorte 2</div>
                <LuckyNumber></LuckyNumber>
            </LeftSide>
        </PageContainer>
    )
}

export default DiadeSorte;