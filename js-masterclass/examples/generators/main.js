/*
Os generators tornam possível pausar a execução de uma determinada função, permitindo a utilização do event loop de forma cooperativa.
*/

/*
function forever() {
  let value = 1
  while (true) {
    console.log(value++)
  }
}

function today() {
  const date =  new Date()
  console.log(date)
}

forever()
today()

O código acima irá executar a função forever e nunca irá executar a função today, pois a função forever é um loop infinito.
Dessa forma, utilizamos os generators para pausar a execução de uma função e permitir a execução de outra função.
Colocamos um * após a palavra function para indicar que a função é um generator. E então a função today é executada.
*/

function* foreverFirst() {
  let value = 1
  while (true) {
    console.log(value++)
  }
}

function todayFirst() {
  const date =  new Date()
  console.log(date) // 2024-04-23T18:01:02.552Z
}

const foreverFirstGenerator = foreverFirst() // Criamos o generator da função forever
/*
forever() // Não irá executar o loop infinito, é criado o generator da função.
console.log(foreverGenerator) // Object [Generator] {} - as funções estão nos protótipos
console.log(typeof foreverGenerator) // object
console.log(Object.getOwnPropertyNames(foreverGenerator.__proto__.__proto__)) // [ 'constructor', 'next', 'return', 'throw' ]
*/
todayFirst()

console.log('-------------------------------------------------')

/*
Os generators utilizam o método next para iterar sobre os valores disponíveis durante a execução da função.
Então se chamarmos o método next, o generator irá executar o código até encontrar a palavra yield.

Ou seja, ao encontrar um yield, a execução da função é pausada até o método next ser invocado novamente.

console.log(foreverGenerator.next()) // loop infinito

O método next é um objeto contendo value e done, seguindo o protocolo de iteração.
*/

function* foreverSecond() {
  let value = 1
  while (true) {
    console.log(value++)
    yield
  }
}

function todaySecond() {
  const date =  new Date()
  console.log(date) // 2024-04-23T18:12:39.142Z
}

const foreverSecondGenerator = foreverSecond()
console.log(foreverSecondGenerator.next()) // 1
console.log(foreverSecondGenerator.next()) // 2
console.log(foreverSecondGenerator.next()) // 3
todaySecond() // retorna o console.log da função today
console.log(foreverSecondGenerator.next()) // 4
console.log(foreverSecondGenerator.next()) // 5

console.log('-------------------------------------------------')

/*
O método next é um objeto contendo value e done, seguindo o protocolo de iteração. Abaixo, o value vem como undefined, pois não foi passado nenhum valor para o objeto.
*/

function* foreverThird() {
  let value = 1
  while (true) {
    console.log(value++)
    yield
  }
}

function todayThird() {
  const date =  new Date()
  console.log(date) // 2024-04-23T18:12:39.142Z
}

const foreverThirdGenerator = foreverThird()
console.log(foreverThirdGenerator.next())
// 1
// { value: undefined, done: false }
console.log(foreverThirdGenerator.next())
// 2
// { value: undefined, done: false }
console.log(foreverThirdGenerator.next())
// 3
// { value: undefined, done: false }
todayThird() // retorna o console.log da função today
console.log(foreverThirdGenerator.next())
// 4
// { value: undefined, done: false }
console.log(foreverThirdGenerator.next())
// 5
// { value: undefined, done: false }

console.log('-------------------------------------------------')

/*
Esse valor pode ser passado no próprio yield, para retornar valores de forma similar ao return.
*/

function* foreverFourth() {
  let value = 1
  while (true) {
    yield value++
  }
}

function todayFourth() {
  const date =  new Date()
  console.log(date) // 2024-04-23T18:12:39.142Z
}

const foreverFourthGenerator = foreverFourth()
console.log(foreverFourthGenerator.next()) // { value: 1, done: false }
console.log(foreverFourthGenerator.next()) // { value: 2, done: false }
console.log(foreverFourthGenerator.next()) // { value: 3, done: false }
todayFourth() // retorna o console.log da função today
console.log(foreverFourthGenerator.next()) // { value: 4, done: false }
console.log(foreverFourthGenerator.next()) // { value: 5, done: false }

console.log('-------------------------------------------------')

/*
Além disso, também é possível enviar um valor para dentro do generator por meio do método next.
*/

function* foreverFifth() {
  let value = 1
  while (true) {
    const reset = yield value++
    // console.log(reset)
    if (reset) value = 1
  }
}

function todayFifth() {
  const date =  new Date()
  console.log(date) // 2024-04-23T18:12:39.142Z
}

const foreverFifthGenerator = foreverFifth()
console.log(foreverFifthGenerator.next()) // { value: 1, done: false }
console.log(foreverFifthGenerator.next()) // { value: 2, done: false }
console.log(foreverFifthGenerator.next()) // { value: 3, done: false }
todayFifth() // retorna o console.log da função today
console.log(foreverFifthGenerator.next(true)) // { value: 1, done: false }
console.log(foreverFifthGenerator.next()) // { value: 2, done: false }

console.log('-------------------------------------------------')

/*
O método return encerra o generator, podendo retornar um valor específico.
*/

function* foreverSixth() {
  let value = 1
  while (true) {
    const reset = yield value++
    if (reset) value = 1
  }
}

function todaySixth() {
  const date =  new Date()
  console.log(date) // 2024-04-23T18:12:39.142Z
}

const foreverSixthGenerator = foreverSixth()
console.log(foreverSixthGenerator.next()) // { value: 1, done: false }
console.log(foreverSixthGenerator.next()) // { value: 2, done: false }
console.log(foreverSixthGenerator.next()) // { value: 3, done: false }
todaySixth() // retorna o console.log da função today
console.log(foreverSixthGenerator.return('Fim')) // { value: 'Fim', done: true }
console.log(foreverSixthGenerator.next(true)) // { value: undefined, done: true }
console.log(foreverSixthGenerator.next()) // { value: undefined, done: true }

console.log('-------------------------------------------------')

/* 
O método throw lança uma exceção dentro do generator interrompendo o fluxo de execução caso a exceção não tenha sido tratada adequadamente.
*/

function* foreverSeventh() {
  let value = 1
  while (true) {
    try {
      const reset = yield value++
      if (reset) value = 1
    } catch (e) {
      console.log(e) // Erro
    }
  }
}

function todaySeventh() {
  const date =  new Date()
  console.log(date) // 2024-04-23T18:12:39.142Z
}

const foreverSeventhGenerator = foreverSeventh()
console.log(foreverSeventhGenerator.next()) // { value: 1, done: false }
console.log(foreverSeventhGenerator.next()) // { value: 2, done: false }
console.log(foreverSeventhGenerator.next()) // { value: 3, done: false }
todaySeventh() // retorna o console.log da função today
console.log(foreverSeventhGenerator.throw('Erro')) // retorna o console.log da função forever - Erro
console.log(foreverSeventhGenerator.next(true)) // { value: 1, done: false }
console.log(foreverSeventhGenerator.next()) // { value: 2, done: false }

console.log('-------------------------------------------------')

/*
Como os generators implementam o protocolo de iteração, é possível utilizá-los com Symbol.iterator de forma simples.
Arquivo: example-iterable.js
*/

/*
Além disso, é possível utilizar generators para sincronizar chamadas assíncronas de forma similar ao async/await.
Arquivo: exemple-async.js
*/