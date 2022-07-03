import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage';
import { ScreenContainer } from './styled';
import { RecipeContainer } from './styled';
import { Typography } from '@mui/material';
import AddRecipesForm from './AddRecipesForm';

function AddRecipesPage () {

    useProtectedPage()
    
    return (
        <ScreenContainer>
            <RecipeContainer>
                <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
                <AddRecipesForm/>
            </RecipeContainer>
    </ScreenContainer>
    )

};

export default AddRecipesPage;