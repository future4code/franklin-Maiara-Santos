import React from "react";
import { InputContainer } from "./styled";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import {SignUpFormContainer} from './styled'
import { signUp } from "../../services/user";

const SignUpForm = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        signUp(form, clear, navigate)
    }

    return (
        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <SignUpFormContainer>
                    <InputContainer>
                        <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                        variant={'outlined'}
                        />
                        <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                        />
                        <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                        />
                    </InputContainer>
                </SignUpFormContainer>
                
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    margin={"normal"}
                >
                    Fazer Cadastro
                </Button>
            </form>
        </InputContainer>
    )
}

export default SignUpForm