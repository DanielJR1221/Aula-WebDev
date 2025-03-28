/*
console.log("Hello world")
console.info("info")
console.warn("warning")
console.error("Error")

console.table([
    { id: 1, tarefa: "Estudar JS"},
    { id: 2, tarefa: "Praticar código"}
])

console.group("Grupo de logs")
console.log("Log 1")
console.log("Log 2")
console.groupEnd()

console.time("Timer")
// ...algum processamento
if (1 == 2) {
    console.log("nao")
}
console.timeEnd("Timer")

//comentario de 1 linha


    Comentario de mais
    de uma linha


var antigo = "valor da variavel"

console.log(antigo)

let variavelMutavel = "valor que pode ser alterado"

const variavelImutavel = "valor que nao pode ser alterado diretamente"

variavelMutavel = 1

console.log(variavelMutavel)

variavelImutavel = 1

console.log(variavelImutavel)


let texto = "texto"
console.log(typeof texto)

let numero = 0
console.log(typeof numero)

let isCompleted = false
console.log(typeof isCompleted)

let semValor
console.log(typeof semValor)

let nulo = null
console.log(typeof nulo)

let uniqueId = Symbol("id")
console.log(typeof uniqueId)

let bigNumero = 999999999999999999n
console.log(typeof bigNumero)
*/

//Tipos de dados Complexos

let tarefa = { id: 1, tarefa: "Estudar JS"}
console.log(tarefa)
console.log(tarefa.id)
console.log(tarefa.tarefa)

let tasks = [
    { id: 1, tarefa: "Estudar JS"},
    { id: 2, tarefa: "Praticar código"}
]

console.log(tasks)
console.log(tasks[0])
console.log(tasks[0]["id"])

let hoje = new Date()
console.log(hoje)

let pattern = /^[a-z]+$/i;
console.log(pattern)