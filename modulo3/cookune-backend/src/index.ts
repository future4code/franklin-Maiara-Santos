import {Request, response, Response} from 'express';
import app from "./app";
import connection from './connection';

app.get("/", async (Request: Request, Response: Response) => {
    try {
        response.status(200).send("Seja bem vindo a API Cookenu")
    } catch(error) {
        console.log(error);
    }
});