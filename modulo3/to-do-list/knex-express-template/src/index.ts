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

// URL DA HOME DA API

app.get("/", ( request:Request, response:Response ) => {
   response.status(200).send('Seja bem vindo a API To Do List')
})

// Criando um usuário

app.post("/user", async (request: Request, response: Response)=>{
    try{ 
      const newUser: User = request.body
      if (request.body.name && request.body.nickname && request.body.email){
          arrayUsers.push (newUser)
          response.status(200).send('Usuário criado com sucesso')
      }
    }catch(error){
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
    
   const IdUser: number = Number(request.params.id)
   const name = request.body
   const nickname = request.body

   const newUserEdit: Array<User> = arrayUsers.filter((userFilter) => {
       if (userFilter.id === IdUser && userFilter.name === name && userFilter.nickname === nickname) {
         return userFilter 
       }
   })
   response.status(200).send(newUserEdit)
})

app.put('/user/edit/:id', (request: Request, response: Response) => {

try{
   const IdUser: number = Number(request.params.id)
   const name = request.body
   const nickname = request.body

   const newUserEdit: Array<User> = arrayUsers.filter((userFilter) => {
       if (userFilter.id === IdUser && userFilter.name === name && userFilter.nickname === nickname) {
         return userFilter 
       }
   })
   response.status(200).send(newUserEdit)

   if(!request.body.name && !request.body.nickname && !request.body.email){
       response.status(400).send("Preencha os valores a serem alterados")
   }
}catch(error){
   response.status(400).send("Algo deu errado. Tente novamente")
}
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});