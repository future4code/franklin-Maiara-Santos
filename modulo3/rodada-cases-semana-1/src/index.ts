import {Request, Response} from "express";
import app from "./app";
import connection from "./connection";

app.get("/", async (request: Request, response: Response) => {

    try {
        await connection(`Produtos`)
        response.status(200).send("Bem vindo a API da Amaro")
    }catch (error: any){
        response.status(400).send({message: error.message}) 
    }
});

