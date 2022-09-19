import { Request, Response } from 'express';
import { UserLogin } from '../types';
import connection from '../connection';
import {v4 as uuid} from 'uuid';

export default async function Login (request:Request, response:Response) {
        const login: UserLogin = request.body
    try{

        if( login.email || login.password){
        
        await connection(`Users`).insert({
            id: uuid(),
            email: login.email,
            password: login.password
            
          })
       return response.status(200).send('Login feito com Sucesso')
    }} catch (error: any) {
        if (response.statusCode !== 200) {
          console.log(error);
        return response.status(400).send("Verifique os campos e tente novamente");
        } else {
          console.log(error);
          response.send({ message: error.message });
    }
}}