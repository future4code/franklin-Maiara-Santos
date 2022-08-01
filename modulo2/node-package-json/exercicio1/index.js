/* Exercício 1: Para acessar os parâmetros, usamos process.argv */

// const nome = "Maiara"
// const idade = Number(25)

// console.log(`Olá ${nome}! Você tem ${idade} anos. Em sete anos, você terá ${idade+7}`)

const idade = Number(process.argv[3])

console.log("Olá", process.argv[2],"!", "Você tem", process.argv[3], ".", "Em sete anos, você terá", idade+7)

// No terminal (sem script start configurado), coloque node index.js Maiara 25



