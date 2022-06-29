import axios from "axios";
import {BASE_URL} from '../constants/urls'
import { goToRecipesList } from "../routes/coordinator";

export const login = (body, clear, navigate) => {
    axios.post (`${BASE_URL}/user/login`, body)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        clear()
        alert("Deu certo")
        goToRecipesList(navigate)

    })
    .catch((erro) =>{
        alert("Deu errado")
    })
}

export const signUp = (body, clear, navigate) => {
    axios.post (`${BASE_URL}/user/signup`, body)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        clear()
        alert("Deu certo")
        goToRecipesList(navigate)

    })
    .catch((erro) =>{
        alert("Deu errado o cadastro. Tente Novamente")
    })
}