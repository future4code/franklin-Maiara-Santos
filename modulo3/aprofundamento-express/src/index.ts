import express, {Request, Response} from "express"
import cors from "cors"
import { request } from "https"

const app = express()

app.use(cors())
app.use(express.json())



// EXERCÍCIO 1 ---------------------------------------------------------------------------------------------------------

app.get ("/ping", (request: Request, response: Response) => {
    response.status(200).send('Pong')
})


// EXERCÍCIO 2 ----------------------------------------------------------------------------------------------------------------------

type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}


// EXERCÍCIO 3 ----------------------------------------------------------------------------------------------------------------------------------

const arrayAfazeres: Array<Afazeres> = [
    {   userId: 1,
        id: 1,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: "lati mor us et fui outerino ",
        completed: true
    },
]

// EXERCÍCIO 4 -------------------------------------------------------------------------------------

app.get("/pega-status/:status", (request: Request, response: Response) => {

    const statusTarefa = Boolean(request.params.status);

    const TarefasFiltradas = arrayAfazeres.filter((tarefa) => {
        return tarefa.completed === statusTarefa
    })

    if (TarefasFiltradas) {
        response.status(200).send(TarefasFiltradas)
    }   
        response.status(404).send("Nenhuma tarefa encontrado para este status")
    })

app.listen(3003, () => console.log("Servidor disponível em 3003"))

