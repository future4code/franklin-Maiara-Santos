export type transacao = [{
    value: number,
    data: any,
    description: string
}]

export type accountUser = {
    id: number,
    name: string,
    cpf: number,
    birth: Date,
    balance: number,
    extract: transacao[]
}

export const arrayUsers: Array<accountUser> = [
    {   id: 1,
        name: "Maria do Bairro",
        cpf: 58476798822,
        birth: new Date('1990-03-20'),
        balance: 0,
        extract: []
    },
    {
        id: 2,
        name: "Maricruz Oliveira",
        cpf: 99727144896,
        birth: new Date('1998-01-10'),
        balance: 200,
        extract: []
    }
]


