import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

 type transacao = {
    value: number,
    data: any,
    description: string
}

 type accountUser = {
    id: number,
    name: string,
    cpf: number,
    birth: string,
    balance: number,
    extract: transacao[]
}

 const arrayUsers: accountUser[] = [
    {   id: 1,
        name: "Maria do Bairro",
        cpf: 58476798822,
        birth: "30/01/1980",
        balance: 0,
        extract: []
    },
    {
        id: 2,
        name: "Maricruz Oliveira",
        cpf: 99727144896,
        birth: "20/02/1983",
        balance: 200,
        extract: []
    }
]


// URL DA HOME DA API

app.get("/", ( request:Request, response:Response ) => {
    
    response.status(200).send('Seja bem vindo a API de Sistema Bancário')
})

// Cadastrando um Novo Cliente/Usuário 

app.post("/users", (request:Request, response:Response) => {
    const newUser: accountUser = request.body
    const birthAux = new Date (newUser.birth)
    const dataAux = new Date ()
    const age = dataAux.getFullYear() - birthAux.getFullYear()
    
    if (request.body.name && request.body.cpf && request.body.birth ){
        if (age < 18) {
            response.status(400).send('Somente pessoas com mais de 18 anos podem abrir uma conta')
        }
     else {
        arrayUsers.push (newUser)
        response.status(200).send( 'Conta bancária criada com sucesso')
    }} else {
        response.status(400).send("Preencha todos os campos")
    }
})


app.get('/get-account',(request: Request, response: Response)=> {
    response.status(200).send(arrayUsers)
  })

// PEGA O BALANÇO

  app.get("/balance/:cpf", (request: Request, response: Response) => {
    const cpf = request.params.cpf;
  
    const [clientFilter] = arrayUsers.filter((client) => {
      return client.cpf === Number(cpf);
    });
  
    const balance = clientFilter.balance;
  
    response.send(balance);
  });


app.listen(3003, () => console.log("Servidor disponível em 3003"))

