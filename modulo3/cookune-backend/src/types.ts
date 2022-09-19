export type UserSignup = {
    name: string,
    email: string,
    password: string
  }

  export type UserLogin = {
    email: string,
    password: string
  }
  
  export type Recipe = {
    id: string,
    title: string,
    description: string,
    createdAt: Date
  }