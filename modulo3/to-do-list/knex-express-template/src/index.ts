import express, {Request, Response} from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

type User = {
   id: number,
   name: string,
   nickname: string,
   email: string
}

const arrayUsers: User[] = [
   {   id: 1,
       name: "Maria do Bairro",
       nickname: "Maria",
       email: "maria@gmail.com"
   },
   {
      id: 2,
      name: "Maricruz Oliveira",
      nickname: "Maricruz",
      email: "maricruz@gmail.com"
   }
]

type Task = {
   title: string,
   description: string,
   limitDate: string,
   creatorUserId: string
}

const arrayTaks: Task[] = [{
   title: "Criar banco dos alunos",
   description: "Devemos criar o banco dos alunos para o módulo do backend",
   limitDate: "04/05/2020",
   creatorUserId: '001'
}]

// URL DA HOME DA API

app.get("/", (request:Request, response:Response ) => {
   response.status(200).send('Seja bem vindo a API To Do List')
})

// Criando um usuário

app.post("/user", async (request: Request, response: Response)=>{
    try{ 
      const newUser: User = request.body
      if (request.body.name && request.body.nickname && request.body.email && request.body.id){
          arrayUsers.push (newUser)
          response.status(200).send('Usuário criado com sucesso')
      }
   
      else {
         response.status(400).send("É necessário preencher todos os campos")
   }}
      catch(error){
       //deu tudo errado
         response.status(400).send("Algo deu errado. Tente novamente");
    }
    
 });

// Pegar usuário

app.get("/user/:id", (request: Request, response: Response) => {
 
   const getIdUser: number = Number(request.params.id)
   const filterId: Array<User> = arrayUsers.filter((idUser) => {
      return idUser.id === getIdUser
    });
 
    response.status(200).send(filterId);
 
 })

// Editar Usuário

app.put('/user/edit/:id', (request: Request, response: Response) => {

try{
   const IdUser: number = Number(request.params.id)
   const {name, nickname}: User = request.body

   const newUserEdit: Array<User> = arrayUsers.filter((userFilter) => {
       if (userFilter.id === IdUser) {
         userFilter.name = name 
         userFilter.nickname = nickname
         return userFilter
       }
   })
   response.status(200).send(newUserEdit)

}catch(error){
   response.status(400).send("Algo deu errado. Tente novamente")
}
})

// Criar Task

app.post("/task", (request: Request, response: Response) => {

   try {
    const {title, description, limitDate, creatorUserId}: Task = request.body
    const newTask = {title, description, limitDate, creatorUserId}
      if(request.body.title && request.body.description && request.body.limitDate && request.body.creatorUserId ) {
         arrayTaks.push(newTask)
         response.status(200).send("Você criou uma tarefa com sucesso")
      }

      else {
         response.status(400).send("É necessário preencher todos os campos")
   }}
         catch(error){
      response.status(400).send("Algo deu errado. Tente novamente")
   }
    
 })

 // Pegar task pelo ID

 app.get("/task/:id", (request: Request, response: Response) => {
 
   const taskId = request.params.id;
 
   const getTaskIdFilter: Array<Task> = arrayTaks.filter((taskFilter) => {
      if (taskFilter.creatorUserId === taskId) {
        return taskFilter
      }
  })
  response.status(200).send(getTaskIdFilter)

});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});