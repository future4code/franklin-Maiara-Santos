import { Request, Response } from "express";
import connection from '../connection';

export default async function DeleteProduct (request:Request, response:Response) {
    const id = request.params.id;

    try {
       await connection('Produtos')
    .where({id : id})
    .delete()
       return response.status(200).json("Deletado com Sucesso")
    } catch (error: any) {
        response.status(400).send({message: error.message}) 
    }
}
