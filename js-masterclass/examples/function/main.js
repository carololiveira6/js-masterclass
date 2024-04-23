/*
Uma função é um objeto que contém um bloco de código executável
*/

// Function Declaration
function soma(a, b) {
  return a + b
}

console.log(soma)
console.log(soma(2, 2))

// Function Expression
const sum = function (a, b) {
  return a + b
}

console.log(sum(2, 3))

/*
Em Function Declaration, nós podemos chamar a função antes mesmo de declará-la. Pois ela é pré-carregada no contexto de execução.
Já em Function Expression, não podemos chamar a função antes de declará-la. Pois ela é carregada apenas no momento da execução.

console.log(soma);
console.log(soma(2, 2));

function soma(a, b) {
  return a + b;
};
*/

/*
Na linguagem JavaScript, as funções são de primeira classe, ou seja, podem ser atribuídas a uma variável, passadas por parâmetro ou serem retornadas de uma outra função.
*/

const somatorio = function (a, b) {
  return a + b
}

const subtracao = function (a, b) {
  return a - b
}

console.log(somatorio(2, 2))
console.log(subtracao(2, 2))

const calculo = function () {
  return function () {
    return 'Função retornada de outra função'
  }
}

console.log(calculo()())

const calculator = function (fn) {
  return function (a, b) {
    return fn(a, b)
  }
}

console.log(calculator(somatorio)(2, 2))
console.log(calculator(subtracao)(2, 2))

/*
É possível invocar uma função com menos ou mais parâmetros, não necessariamente seguindo o que está declarado.
*/

const mult = function (a, b) {
  return a * b
}

console.log(mult(2, 2)) // 4

console.log(mult(2)) // NaN
// Retorna NaN porque quando a função recebe o segundo parâmetro, vem undefined, então 5 * undefined = NaN

console.log(mult(1, 2, 3)) // 2
// Retorna 2 porque a função recebe apenas os dois primeiros parâmetros e ignora o terceiro

/*
Podemos definir valores padrões para cada um dos parâmetros de uma função.
*/

const multi = function (a = 1, b = 1) {
  return a * b
}

console.log(multi(2, 2)) // 4
console.log(multi(2)) // 2
console.log(multi()) // 1

/*
Por meio da variável implícita arguments é possível acessar os parâmetros da função invocada.
*/
const multiplicacao = function () {
  console.log(arguments)
}

multiplicacao() // {}
multiplicacao(1, 2, 3, 4, 5) // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5}

const total = function () {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }
  return total
}

console.log(total(1, 2, 3, 4, 5)) // 15

/*
Também é possível acessar os parâmetros da função invocada por meio do rest parameter.
O rest paramter deve ser sempre o último da lista de parâmetros.
*/

const rest = function (...numbers) {
  let total = 0
  for (let number of numbers) {
    total += number
  }
  return total
}

console.log(rest(1, 2, 3, 4, 5)) // 15

const restLast = function (a, b, c, ...numbers) {
  let total = a + b + c
  console.log(numbers)
  for (let number of numbers) {
    total += number
  }
  return total
}

console.log(restLast(1, 2, 3, 4, 5, 6, 7, 8, 9)) // 45
