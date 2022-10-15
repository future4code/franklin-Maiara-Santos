import {Request, Response} from "express";
import app from "./app";
import connection from "./connection";

app.get("/", async (request: Request, response: Response) => {

    try {
        await connection(`Students`)
        response.status(200).send("Bem vindo a API Labenu System")
    }catch (error: any){
        response.status(400).send({message: error.message}) 
    }
});

