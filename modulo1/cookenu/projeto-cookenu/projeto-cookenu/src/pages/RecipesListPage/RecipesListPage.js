import React from "react"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectPage from "../../hooks/useProtectPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { RecipeListContainer, AddRecipeButton } from "./styled"
import { Add } from "@mui/icons-material"
import { goToAddRecipes, goToRecipesDetail } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import Loading from "../../components/Loading/Loading"

const RecipesListPage = () => {
    useProtectPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    console.log(recipes);

    const onClickCard = (id) => {
        goToRecipesDetail(navigate, id)
    }

    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={()=> onClickCard(recipe.recipe_id)}
            />
        )
    })

    return (
        <RecipeListContainer>
            {recipeCards.length > 0 ? recipeCards : <Loading/>}
            <AddRecipeButton
                onClick = {() => goToAddRecipes(navigate)}
                color={"primary"}

            >
                <Add/>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage