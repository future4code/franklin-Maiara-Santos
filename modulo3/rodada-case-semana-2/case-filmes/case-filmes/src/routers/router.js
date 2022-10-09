import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Search from "../page/Search";
import MovieDetails from "../page/MovieDetails";

export const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"                      element={<Home  />}     />
                <Route path="/search"                       element={<Search   />}     />
                <Route path="/movie/:id"                       element={<MovieDetails   />}     />
            </Routes>
        </BrowserRouter>
    )
}
