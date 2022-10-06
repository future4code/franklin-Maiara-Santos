import React from "react";
import {Routes, Route} from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from '../pages/LoginPage/LoginPage'
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage'
import RecipeListPage from '../pages/RecipesListPage/RecipesListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

function Router ({setRightButtonText}) {
    return(
            <Routes>
                <Route path="/adicionar-receita" element={<AddRecipesPage/>}/>
                <Route exact path="/login" element={<LoginPage setRightButtonText={setRightButtonText}/>}/>
                <Route path="/detalhe/:id" element={<RecipeDetailPage/>}/>
                <Route path="/" element={<RecipeListPage/>}/>
                <Route path="/cadastro" element={<SignUpPage setRightButtonText={setRightButtonText}/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
    )
}

export default Router