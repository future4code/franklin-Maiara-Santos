import React from 'react'
import {ScreenContainer, LogoImage} from './styled';
import logo from "../../assets/logo.png"
import SignUpForm from './SignUpForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

function SignUpPage () {

    useUnprotectedPage()

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
                <SignUpForm/>
        </ScreenContainer>
    )
};

export default SignUpPage;


