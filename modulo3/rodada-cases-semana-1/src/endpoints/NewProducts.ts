import { Request, Response } from "express";
import connection from '../connection';
import {v4 as uuid} from 'uuid';
import { NewProduct } from "../types";

export default async function CreateNewProduct (request:Request, response:Response) {
    const newProduct: NewProduct = request.body
try{
    if ( !newProduct.name || !newProduct.price || !newProduct.size || !newProduct.color || !newProduct.tag)  {
        return response.status(400).send("É necessário preencher todos os campos corretamente")  
    }

    if( newProduct.name || newProduct.price || newProduct.size || newProduct.color || newProduct.tag ){
    
    await connection(`Produtos`).insert({
        id: uuid(),
        name: newProduct.name,
        price: newProduct.price,
        size: newProduct.size,
        color: newProduct.color,
        tag: newProduct.tag
      })
   return response.status(200).send('Cadastro feito com Sucesso')
}} 

    catch (error: any) {
    if (response.statusCode !== 200) {
      console.log(error);
      
    return response.status(400).send("Verifique os campos e tente novamente");
    } else {
      console.log(error);
      response.send({ message: error.message });
}
}}