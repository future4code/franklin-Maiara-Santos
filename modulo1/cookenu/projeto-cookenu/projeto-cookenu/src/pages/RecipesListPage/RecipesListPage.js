import { Button } from '@mui/material';
import React from 'react'
import useProtectedPage from '../../hooks/useProtectPage';


function RecipesListPage () {

    useProtectedPage()
    
    return (
        <div>
            
            <h1>RecipesListPage</h1>
            <Button variant="contained" color="primary">Primary</Button>
        </div>
    )

};

export default RecipesListPage;