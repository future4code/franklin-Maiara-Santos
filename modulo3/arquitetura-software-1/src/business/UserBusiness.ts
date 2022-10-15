import { UserDataBase } from '../database/UserDataBase';
import { Authenticator } from '../services/Authenticator'
import { HashManager } from "../services/HashManager"
import { IdGenerator } from '../services/IdGenerator';
import { dataLogin, user } from '../types/user'; // arrumar depois, pois agora será no model

const hashManager = new HashManager()
const userDB = new UserDataBase()
const autenthicator = new Authenticator ()

export class UserBusiness{

    async createUser(user:user) {
    
        try{
    
            if(!user.name || !user.password || !user.role || !user.email){
                    throw new Error("É necessário preencher todos os campos");
            }
    
            if(user.email.indexOf("@") === -1){
                    throw new Error("Email inválido");
            }
    
            if(user.password.length < 6){
                    throw new Error("A senha deve ter pelo menos 6 caracteres");
            }
    
            const id = new IdGenerator();
            const hashPassword = await hashManager.hash(user.password);
            const role = user.role
            await userDB.createUser(id, user.name, user.email, hashPassword, user.role);
            const token = autenthicator.generateToken({id, role});
                
            return token;
    
            }catch(error:any){
                throw new Error( error.message || "Erro ao criar usuário. Tente novamente");
            }
    }

    async getUserByEmail(user:dataLogin) {

        const userFromDB = await userDB.getUserByEmail(user.email);
        const hashCompare = await hashManager.compare(user.password, userFromDB.password);
        if (!hashCompare) {
            throw new Error("Senha inválida. Tente novamente");
        }

        const role = userFromDB.role
        const accessToken = autenthicator.generateToken({ id: userFromDB.id, role});

        return accessToken;
    }

    async getAllUsers(token: string) {
				
        autenthicator.getTokenData(token);
        return await userDB.getAllUsers();
    }

    async deleteUser(input: {id:string, token:string}) {
				
        const verifiedToken = autenthicator.getTokenData(input.token);

	if(verifiedToken.role !== "ADMIN"){
	        throw new Error("Apenas admins podem deletar usuários")
	}

        return await userDB.deleteUser(input.id);
    }
}