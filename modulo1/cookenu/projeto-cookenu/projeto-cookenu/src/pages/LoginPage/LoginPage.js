import React from 'react'
import {ScreenContainer, InputContainer, LogoImage, SignUpButtonContainer} from './styled';
import logo from "../../assets/logo.png"
import useForm from '../../hooks/useForm';
import { Button } from '@mui/material'
import LoginForm from './LoginForm';
import {goToSignUp} from "../../routes/coordinator"
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const onSubmitForm = () => {

    }

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm/>
            <SignUpButtonContainer>
            <Button
                    onClick={()=> goToSignUp(navigate)}
                    type={"submit"}
                    fullWidth
                    variant={'text'}
                    color={'primary'}
                    margin={'normal'}
                    >Não possui conta? Cadastre-se</Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )

};

export default LoginPage;