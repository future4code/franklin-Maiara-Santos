import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Seach from "../page/Seach";
import MovieDetails from "../page/MovieDetails";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"                      element={<Home  />}     />
                <Route path="/seach"                       element={<Seach   />}     />
                <Route path="/movie/:id"                       element={<MovieDetails   />}     />
            </Routes>
        </BrowserRouter>
    )
}
