// Resposta dos Exercícios

// Exercício 1 --------------------------------------------

// A. Um construtor é uma função especial usada para inicializar objetos. O construtor é chamado quando um objeto de uma classe é criado

// B. A mensagem do console.log aparece Apenas 1 vez
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Array<String> = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getName() {
        return this.name
        }

    public getCpf() {
            return this.cpf
        }
    
    public getAge() {
            return this.age
    }
  
  }

  const Pessoa1 = new UserAccount (
    "4440002227",
    "Maria do Bairro",
    18
  )

// C. É possível acessar por métodos públicos chamados de getters e setters


// ===============================================================


// Exercício 2 ---------------------------------------------------

//A.

class Transaction {
    private description: string;
    private value: number;
    private date: string

    constructor(description: string, value: number, date: string,) {
        this.description = description;
        this.value = value;
        this.date = date;
     }

    public getDescription() {
        return this.description
        }

    public getValue() {
        return this.value
        }
    
    public getDate() {
            return this.date
        }
    
  }
    
  const Transacao1 = new Transaction (
    "ejd ojfe okwsw deokwe",
    256,
    "29/08/2022"
  )

  // Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor (accounts: UserAccount[]){
        this.accounts = accounts;
    }

    public getAccounts(): UserAccount[] {
        return this.accounts
        }
    
    public setAccounts(
        value: UserAccount[]
            ) {
            this.accounts = value
        }
           
}