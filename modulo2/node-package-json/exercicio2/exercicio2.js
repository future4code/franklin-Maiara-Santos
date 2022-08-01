/*Exercício 2: Recebe uma operação matemática e 2 argumentos */

const add = Number(process.argv[3]) + Number(process.argv[4])
const sub = Number(process.argv[3]) - Number(process.argv[4])
const multi = Number(process.argv[3]) * Number(process.argv[4])
const div = Number(process.argv[3]) / Number(process.argv[4])

if (process.argv[2] == "add") {
    
    console.log("Resposta:", add)
}

if (process.argv[2] == "sub") {
    
    console.log("Resposta:", sub)
}

if (process.argv[2] == "multi") {
    
    console.log("Resposta:", multi)
}

if (process.argv[2] == "div") {
    
    console.log("Resposta:", div)
}

// Para funcionar, no console coloque node exercicio2.js add/sub/mult/div 4 4 
