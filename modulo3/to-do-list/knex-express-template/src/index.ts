import express, {Request, Response} from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

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

const app = express();
app.use(express.json());
app.use(cors());

// Criando um usuário

app.post("/criar-usuario", async (request: Request, response: Response)=>{
    try{ //inicio de um sonho
       //corpo da função. Como é um post, normalmente buscaremos enviaremos uma mensagem de erro ou sucesso.
 
       //fim do corpo da função
       //deu tudo certo
       response.status(200).send({chaveDoRetorno: 'mensagemDeSucesso'});
    }catch(error){
       //deu tudo errado
       response.status(400).send({chaveDoErro: 'mensagemDeErro'});
    }
 });



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});