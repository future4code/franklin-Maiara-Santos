import { Request, Response } from "express";
import connection from "../connection";

export default async function GetProducts (request:Request, response:Response) {

    try {
        const result = await connection(`Produtos`).select("*")
        response.status(200).json(result);

    } 
    catch (error: any) {
        if (response.statusCode !== 200) {
          console.log(error);
          
        return response.status(400).send("Produto não encontrado");
        } else {
          console.log(error);
          response.send({ message: error.message });
    }
    }}