/*
O async/await facilita a interação com chamadas assíncronas, aguardando o retorno de uma determinada promise.

Para tratar possíveis erros, podemos utilizar o bloco try/catch, que irá capturar qualquer exceção lançada dentro do bloco try.
*/

function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject('Invalid input')
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}

/*
;(async function () {
  try {
    const a = await sum(2, 2)
    const b = await sum(4, 4)
    const result = await sum(a, b)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
})()
*/

/*
É bom evitar o forEach com async/await, pois ele não aguarda a resolução de cada promise, executando todas de forma paralela.

;(async function () {
  try {
    const functions = [sum(2, 2), sum(4, 4)]
    const results = []
    functions.forEach(async function(fn) {
      const result = await fn
      results.push(result)
    })
    const [a, b] = results
    const result = await sum(a, b)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})()
*/

;(async function () {
  try {
    const functions = [sum(2, 2), sum(4, 4)]
    const results = []
    for (let fn of functions) {
      const result = await fn
      results.push(result)
    }
    const [a, b] = results
    const result = await sum(a, b)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})()

/*
É possível utilizar o bloco for-await-of para iterar sobre um iterator de promise. Antes, para utilizar, era necessário usar a flag --harmony-async-iteration. Não precisa mais utilizar essa flag, pois o for-await-of é suportado a partir do Node.js 10.0.0.

;(async function () {
  try {
    const functions = [sum(2, 2), sum(4, 4)]
    const results = []
    for await (let result of functions) {
      results.push(result)
    }
    const [a, b] = results
    const result = await sum(a, b)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})()
*/

