import express, {Request, Response} from 'express'
import cors from 'cors'


const app = express ( )

// Nessa API não teremos erros de Cors
app.use ( cors ( ) )

// Nesse BackEnd, os dados serão mandados para o Front no formato Json
app.use (express.json ( ) )

// EXERCÍCIO 1 -----------------------------------------------------------------------------------

app.get("/", ( request:Request, response:Response ) => {

    response.status(200).send('Hello Endpoint')
})

app.get("/exemplo", ( request:Request, response:Response ) => {

    response.status(200).send('Meu Primeiro Endpoint de exemplo')
})


// EXERCÍCIO 2 -----------------------------------------------------------------------------------

 type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string;
}

// EXERCÍCIO 3 -----------------------------------------------------------------------------------

const arrayUsers: Array<User> = [
    {   id: 1,
        name: "Maria", 
        phone: 1191918821,
        email: "maria@exemplo.com",
        website: "www.maria.com.br"
    },
    {
        id: 2,
        name: "Lis", 
        phone: 1191915689,
        email: "lis@exemplo.com",
        website: "www.lis.com.br"
    },
]

// EXERCÍCIO 4 -------------------------------------------------------------------------------------

app.get("/pega-usuarios", ( request:Request, response:Response ) => {

    response.status(200).send(arrayUsers)
})

// EXERCÍCIO 5 -------------------------------------------------------------------------------------

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number,
}

// EXERCICIO 6 -------------------------------------------------------------------------------------

const arrayPosts: Array<Posts> = [
    {   id: 1,
        title: 'Um dia em Las Vegas',
        body: 'Dia especial por aqui',
        userId: 1,
    },
    {   id: 2,
        title: 'Um dia em Paris',
        body: 'Dia mágico por aqui',
        userId: 1,
      },
    {   id: 3,
        title: 'Um dia na Argentina',
        body: 'Dia maravilhoso por aqui',
        userId: 2,
    },  
]


// EXERCICIO 7 --------------------------------------------------------------------------------------

app.get("/pega-posts", ( request:Request, response:Response ) => {

    response.status(200).send(arrayPosts)
})

// EXERCICIO 8 -------------------------------------------------------------------------------------------

app.get("/pega-posts/:userId", ( request:Request, response:Response ) => {
    
    const userId = Number(request.params.userId)
    const listOfPosts = arrayPosts.filter((post) => {
        return post.userId === userId
    })

if (listOfPosts) {
    response.status(200).send(listOfPosts)
}   
    response.status(404).send("Nenhum post encontrado para este usuário")
})

// -----------------------------------------------------------------------------------------------

app.listen(3003, ()=> {
    console.log(`servidor está rodando na porta 3003`)
})