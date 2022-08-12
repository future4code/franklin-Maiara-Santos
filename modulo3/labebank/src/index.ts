import express, {Request, Response} from "express"
import cors from "cors"
import { arrayUsers } from "./data" 

const app = express()

app.use(cors())
app.use(express.json())

// URL DA HOME DA API

app.get("/", ( request:Request, response:Response ) => {

    response.status(200).send('Seja bem vindo a API de Sistema Bancário')
})

// Cadastrando um Novo Cliente/Usuário (Em andamento)

app.post("/users", (request:Request, response:Response) => {
    response.status(200).send('Usuário Cadastrado com sucesso')
})

app.listen(3003, () => console.log("Servidor disponível em 3003"))

