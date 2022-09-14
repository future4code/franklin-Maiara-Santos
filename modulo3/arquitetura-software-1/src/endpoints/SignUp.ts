import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export const Signup = async ( req: Request, res: Response) => {
   try {
      const { name, email, password, role } = req.body

      const userBusi = new UserBusiness()
      const token: string = await userBusi.createUser({
         name,
         email,
         password,
         role
      })

      res.status(200).send({
         message: "Usuário criado!",
         token
      })

   } catch (error:any) {
      res.status(400).send(error.message)
   }
}