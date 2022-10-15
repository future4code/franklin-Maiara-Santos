import { connection } from "../connection";

const TABLE_NAME = "User_Arq"

export class UserDataBase{
   public createUser= async( 
      id: string,
      name: string,
      email: string,
      password: string,
		  role: string
      ): Promise<void> => {
      try {
        await connection()
          .insert({
            id,
            name,
            email,
            password,
				    role
          })
          .into(TABLE_NAME);
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }

    public getUserByEmail = async (email: string): Promise<any> => {
      try {
  
        const result = await connection()
          .select("*")
          .from(TABLE_NAME)
          .where({ email });
          
        if(!result[0]){
          throw new Error("Usuário não encontrado");
        }
        return result[0];
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }

    public getAllUsers = async(): Promise<any[]> =>{

      try {
          const users: any = [];

          const result = await connection()
              .select("*")
              .from(TABLE_NAME);

          for(let user of result){
              users.push(user);
          }

          return users;

      } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
      }
    }

    public deleteUser = async(id: string): Promise<void> =>{

      try {
        await connection()
          .where({ id })
          .from(TABLE_NAME)
          .del()
          
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
}