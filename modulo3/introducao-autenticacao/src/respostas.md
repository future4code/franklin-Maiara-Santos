# Exercício 1

### A. A depender da situação, o uso de strings como ID aumentam a segurança do projeto, uma vez que ao usar strings, é possível o uso de uma vasta combinação de caracteres, e não somente números.

### Além disso, o uso de IDs com strings te dá mais liberdade para criar IDs com caracteres aleatórios e não sequenciais, o que torna ausente o uso de um contador sincronizado entre os servidores daquele projeto.

### B.
~~~sql
import { v4 } from "uuid";

export function generateId(): string {
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
