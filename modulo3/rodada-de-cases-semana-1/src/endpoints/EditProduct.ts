import { Request, Response } from "express";
import connection from '../connection';

export default async function EditProduct (request:Request, response:Response) {
    const id = request.params.id;
    const newProduct = request.body;

    try {
       await connection('Produtos')
    .where({id : id})
    .update({
        name: newProduct.name,
        price: newProduct.price,
        size: newProduct.size,
        color: newProduct.color,
        tag: newProduct.tag
    })
       return response.status(200).json("Editado com Sucesso")
    } catch (error: any) {
        response.status(400).send({message: error.message}) 
    }
}
