import React from "react"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useProtectPage from "../../hooks/useProtectPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { RecipeListContainer, AddRecipeButton } from "./styled"
import { Add } from "@mui/icons-material"
import { goToAddRecipes } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

const RecipesListPage = () => {
    useProtectPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    console.log(recipes);

    const onClickCard = () => {

    }

    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={onClickCard}
            />
        )
    })

    return (
        <RecipeListContainer>
            {recipeCards}
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