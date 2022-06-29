import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from '../pages/LoginPage/LoginPage'
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage'
import RecipeListPage from '../pages/RecipesListPage/RecipesListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from "../components/Header/Header.js";

function Router () {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/adicionar-receita" element={<AddRecipesPage/>}/>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route path="/detalhe/:id" element={<RecipeDetailPage/>}/>
                <Route path="/" element={<RecipeListPage/>}/>
                <Route path="/cadastro" element={<SignUpPage/>}/>
                <Route path="/erro" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router