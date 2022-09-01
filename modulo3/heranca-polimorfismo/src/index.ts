
// EXERCICIO 1 

// A. Não seria possível acessar a senha para imprimir, uma vez que a propriedade é privada e somente com métodos getters e settes isto seria possível.
// B. Apenas uma vez

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

  const Pessoa1 = new User (
    "001",
    "maria@gmail.com",
    "Maria",
    "maria10"
  )

// Exercício 2

// A. Apenas uma vez
// B. Apenas uma vez, pois a classe Customer é filha da classe User, assim ao contrui-la, o pai é chamado também e por isso ele aparece


// Exercício 3

//A. Não pois senha é uma propriedade privada, e logo, só é acessível dentro da classe pai (User)

// console.log(Consumer1.getId())
// console.log(Consumer1.getName())
// console.log(Consumer1.getEmail())



