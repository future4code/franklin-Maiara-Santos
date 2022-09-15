import { threadId } from "worker_threads";
import { User } from ".";

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const Consumer1 = new Customer (
    "001",
    "maria@gmail.com",
    "Maria",
    "45555546",
    "565655555"
  )

