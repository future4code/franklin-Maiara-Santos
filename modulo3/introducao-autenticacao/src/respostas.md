# Exercício 1

### A. A depender da situação, o uso de strings como ID aumentam a segurança do projeto, uma vez que ao usar strings, é possível o uso de uma vasta combinação de caracteres, e não somente números, além de evitar IDs

### Além disso, o uso de IDs com strings te dá mais liberdade para criar IDs com caracteres aleatórios e não sequenciais, o que torna ausente o uso de um contador sincronizado entre os servidores daquele projeto.

### B.
~~~ts
import { v4 } from "uuid";

export function newId(): string {
    return v4();
  }
~~~

# Exercício 2

### A. O código acima basicamente mostra o sign up de uma aplicação, onde temos um endpoint que recebe id, nome e senha, salvando as informações no banco de dados.

### B.

 CREATE TABLE userTableName (
    id VARCHAR (50) PRIMARY KEY
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
 )

 ### C. 

 const createUser = (id: string, email: string, password: string) => {
	  await connection
	    .insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};

# Exercício 3

### A. As String está "tipando" o valor do ID que salvamos no arquivo env.

### B.

type AuthenticationToken = {
  id: string;
}

import * as jwt from "jsonwebtoken";

  const expireToken = "5min";
  const newToken(input: AuthenticationToken): string {
    const token = jwt.sign({id: input.id,},
      process.env.JWT_KEY as string,
      {
        expireToken
      }
    );
    return token;
  }


# Exercício 4

### A, B e C

~~~ts
app.post("/user/signup", async (request: Request, response: Response) => {
    try {

    function validateEmail(email: string) {
        var statusValidation = /\S+@\S+\.\S+/;
        return statusValidation.test(email);
    }

    const emailRequest = validateEmail(request.body.email)
  
      if (!request.body.email || !emailRequest) {
        response.status(400).send("Email Inválido")
      }
  
      
      if (!request.body.password || request.body.password.length < 6) {
        response.status(400).send("Senha inválida. É preciso ter no mínimo 6 caracteres")
      }
  
      const userData = {
        email: request.body.email,
        password: request.body.password,
      };
  
      const id = generateId();
  
    
      await createUser(id, userData.email, userData.password);
  
      const token = generateToken({
        id,
      });
  
      response.status(200).send({
        token,
      });
    } catch (error) {
      response.status(400).send("Algo deu errado.Tente novamente");
    }
  });
~~~