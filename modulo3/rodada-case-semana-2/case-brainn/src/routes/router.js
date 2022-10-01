import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiadeSorte from "../pages/DiadeSorte/DiadeSorte";
import Lotofacil from "../pages/Lotofacil/Lotofacil";
import Lotomania from "../pages/Lotomania/Lotomania";
import Megasena from "../pages/Megasena/Megasena";
import Quina from "../pages/Quina/Quina";
import Timemania from "../pages/Timemania/Timemania";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/diadesorte"                      element={<DiadeSorte  />}     />
                <Route path="/lotofacil"                       element={<Lotofacil   />}     />
                <Route path="/lotomania"                       element={<Lotomania   />}     />
                <Route path="/"                          index element={<Megasena    />}     />
                <Route path="/quina"                           element={<Quina       />}     />
                <Route path="/timemania"                       element={<Timemania   />}     />
            </Routes>
        </BrowserRouter>
    )
}
