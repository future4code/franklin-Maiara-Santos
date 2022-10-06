import axios from "axios";
import {BASE_URL} from '../constants/urls'
import { goToRecipesList } from "../routes/coordinator";

export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post (`${BASE_URL}/user/login`, body)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        clear()
        setIsLoading(false)
        goToRecipesList(navigate)
        setRightButtonText("Logout")

    })
    .catch((erro) =>{
        setIsLoading(false)
        alert(erro.response.data.message)
    })
}

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post (`${BASE_URL}/user/signup`, body)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        clear()
        setIsLoading(false)
        goToRecipesList(navigate)
        setRightButtonText("Logout")
    })
    .catch((erro) =>{
        setIsLoading(false)
        alert(erro.response.data.message)
    })
}