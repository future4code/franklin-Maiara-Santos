import { Request, Response } from "express";
import connection from "../connection";

export default async function GetProductbyName (request:Request, response:Response) {
    const name = request.params.name

    try {
        const result = await connection
        .select("*")
        .from('Produtos')
        .where('name', 'LIKE', `%${name}%`)
        if (!result.length) {
          return response.status(404).send("Produto não encontrado")
        }
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