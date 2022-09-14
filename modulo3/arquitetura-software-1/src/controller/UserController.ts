import { Request, Response } from "express";
import {UserBusiness} from "../business/UserBusiness";

const userBusiness = new UserBusiness ()

export default class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await userBusiness.createUser(input)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
}