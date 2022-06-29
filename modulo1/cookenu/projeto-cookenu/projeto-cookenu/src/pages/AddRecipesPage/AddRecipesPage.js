import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

function AddRecipesPage () {

    useUnprotectedPage()
    
    return (
        <div>
            <h1>AddRecipesPage</h1>
        </div>
    )

};

export default AddRecipesPage;