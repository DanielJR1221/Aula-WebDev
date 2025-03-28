// let tasks = [
//     {id: 1, descricao: "aula de JS"},
//     {id: 2, descricao: "aula de html"},    
//     {id: 3, descricao: "aula de phyton"}    
// ]

// console.log(tasks)

// console.table(tasks)

// console.log(tasks[0])
// console.log(tasks[0]["descricao"])

// console.log(tasks[1])
// console.log(tasks[1]["descricao"])

// let taskDescricao = [1, 2]

// console.log(taskDescricao)

// let task = {id: 1,descricao: "Aula de JS", data: new Date() }

// console.log(task)

// let hoje = new Date()
// console.log(hoje)

// let amanha = new Date("03-29-2025")
// console.log(amanha)

// let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
// console.log(pattern.test("+55(11)95643-9800"))
// console.log(pattern.test("05987-000"))

// let numero = 11;
// let numeroEmTexto = String(numero)

// console.log(numero, typeof numero)
// console.log(numeroEmTexto, typeof numeroEmTexto)

// let numeroEmTexto2 = "23"
// console.log(numeroEmTexto2, typeof numeroEmTexto2)

// let numeroEmTexto2Convertido = Number(numeroEmTexto2)// parseint faria o mesmo 

// console.log(numeroEmTexto2Convertido, typeof numeroEmTexto2Convertido)

// let numeroNaoInteiroTexto = "15.5"
// console.log(numeroNaoInteiroTexto, typeof numeroNaoInteiroTexto)

// let a = 10
// let b = 3

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** b)

// let contador = 0
// let contador2 = 0
// console.log(++contador)
// console.log(++contador)

// console.log(--contador)
// console.log(--contador)


// console.log(contador2++)
// console.log(contador2++)

// console.log(contador2--)
// console.log(contador2--)

// let x = 10
// console.log(x)
// x += 5
// console.log(x)
// x -= 5
// console.log(x)
// x *= 5
// console.log(x)
// x /= 5
// console.log(x)
// x %= 5
// console.log(x)
// x **= 5

// console.log(10 == "10") //compara so os valores
// console.log(10 === "10") //compara os valores e o tipo da variavel

// console.log(5 != "5")//mesma coisa
// console.log(10 !== "5")//mesma coisa

// let idade = 15
// let status = idade >= 18 ? "Maior de idade" : "Menor de idade"
// console.log(status)

// let tarefaConcluida = true
// if (tarefaConcluida) {
//     console.log("A tarefa está concluída")
// }

// if (tarefaConcluida) {
//     console.log("A tarefa está concluída")
// } else {
//     console.log("A tarefa não está concluída")
// }

// let tarefaUm = 1

// if (tarefaUm == 1) {
//     console.log("A tarefa é a 1")
// } else if (tarefaUm == 2) {
//     console.log("A tarefa é a 2")
// } else {
//     console.log("Não consegui identificar a tarefa")
// }


// let diaSemana = "Segunda"
// switch (diaSemana) {
//     case "Segunda":
//         console.log("Hoje é segunda-feira")
//         break;
//     case "Terça":
//         console.log("Hoje é terça-feira")
//         break;
//     case "Quarta":
//         console.log("Hoje é Quarta-feira")
//         break;
//     case "Quinta":
//         console.log("Hoje é Quinta-feira")
//         break;
//     case "Sexta":
//         console.log("Hoje é Sexta-feira")
//         break;
//     case "Sabado":
//         console.log("Hoje é Sábado")
//         break;
//     case "Domingo":
//         console.log("Hoje é Domingo")
//         break;
//     default:
//         console.log("Não é um dia da semana")
//         break;
// }

// for (let i = 1; i < 10; i++) {
//     console.log("Contagem", i)
// }

// while (contador < 5) {
//     console.log("Contagem", contador)
//     contador++;
// }

let numeroExemplo = 10
do {
    console.log("O número é: ", numeroExemplo)
    numeroExemplo--;
} while (numeroExemplo > 0)