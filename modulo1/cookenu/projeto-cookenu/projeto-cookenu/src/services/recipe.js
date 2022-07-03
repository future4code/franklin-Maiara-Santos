import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const createRecipe = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post (`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response) => {
        alert('Receita Criada com Sucesso')
        clear()
        setIsLoading(false)
    })
    .catch((erro) => {
        setIsLoading(false)
        alert('Tente Novamente')
    })
  }

