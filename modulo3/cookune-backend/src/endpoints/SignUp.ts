import { Request, Response } from 'express';
import { UserSignup } from '../types';
import connection from '../connection';
import {v4 as uuid} from 'uuid';

export default async function SignUp (request:Request, response:Response) {
        const Usersignup: UserSignup = request.body
    try{

        if(Usersignup.name || Usersignup.email || Usersignup.password){
        
        await connection(`Users`).insert({
            id: uuid(),
            name: Usersignup.name,
            email: Usersignup.email,
            password: Usersignup.password
            
          })
       return response.status(200).send('Usuário criado com Sucesso')
    }} catch (error: any) {
        if (response.statusCode !== 200) {
          console.log(error);
        return response.status(400).send("Verifique os campos e tente novamente");
        } else {
          console.log(error);
          response.send({ message: error.message });
    }
}}