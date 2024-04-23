/*
As promises são objetos responsáveis por modelar comportamento assíncrono, ou seja, comportamento que não ocorre de forma sequencial, mas sim em paralelo, permitindo o seu tratamento de uma forma mais fácil e direta.
*/

function sum(a, b) {
  return a + b
}
const result = sum(2, 2)
console.log(`Result sum: ${result}`) // 4

function sumWithDelay(a, b) {
  setTimeout(function () {
    return a + b // esse return não retorna o valor da função sumWithDelay, mas sim da função setTimeout
  }, 1000)
}
const resultWithDelay = sumWithDelay(2, 2)
console.log(`Result sum with delay: ${resultWithDelay}`) // undefined, porque a função sumWithDelay é assíncrona, ou seja, ela não retorna o valor imediatamente, mas sim após 1 segundo.

function sumWithCallback(a, b, callback) {
  setTimeout(function () {
    callback(a + b)
  }, 1000)
}

sumWithCallback(2, 2, function (result) {
  console.log(`Result sum with callback 1: ${result}`) // 4
})

sumWithCallback(2, 2, function (a) {
  sumWithCallback(4, 4, function (b) {
    sumWithCallback(a, b, function (result) {
      console.log(`Result sum with callback 2: ${result}`) // 12
    })
  })
})


/*
Para criar uma promise, basta instanciá-la executando a função resolve em caso de sucesso, sendo tratado por meio de then, e a função reject em caso de erro, sendo tratado por meio de catch.
*/

function sumWithPromiseResolve(a, b) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}
// console.time('performance')

sumWithPromiseResolve(2, 2).then(function (a) {
  sumWithPromiseResolve(4, 4).then(function (b) {
    sumWithPromiseResolve(a, b).then(function (result) {
      console.log(`Result sum with resolve: ${result}`) // 12
      // console.timeEnd('performance') // 3.005s
    })
  })
})

function sumWithPromiseReject(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject('Invalid input')
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}

sumWithPromiseReject(2, 2)
  .then(function (a) {
    sumWithPromiseReject(4, 4)
      .then(function (b) {
        sumWithPromiseReject()
          .then(function (result) {
            `Result sum with reject: ${result}` // 12
          })
          .catch(function (e) {
            console.log(`Result first catch in sum with reject: ${e}`) // Invalid input
          })
      })
      .catch(function (e) {
        console.log(`Result second catch in sum with reject: ${e}`) // Invalid input
      })
  })
  .catch(function (e) {
    console.log(`Result third catch in sum with reject: ${e}`) // Invalid input
  })

/*
É possível centralizar o tratamento de uma prommise encadeando seus retornos.
*/

function sumWithPromiseReturn(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject('Invalid input')
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}

sumWithPromiseReturn(2, 2)
  .then(function (a) {
    return sumWithPromiseReturn(4, 4).then(function (b) {
      return sumWithPromiseReturn().then(function (result) {
        console.log(`Result sum with return: ${result}`) // 12
      })
    })
  })
  .catch(function (e) {
    console.log(`Result catch in sum with return: ${e}`) // Invalid input
  })

/*
Podemos executar várias promises ao mesmo tempo, retornando após todas terem sucesso, usando Promise.all.
*/

function sumWithPromiseAll(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject('Invalid input')
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}
// console.time('performance')

Promise.all([sumWithPromiseAll(2, 2), sumWithPromiseAll(4, 4)])
  .then(function (values) {
    console.log(`Result values in sum with promise all: ${values}`) // [4, 8]
    const [a, b] = values
    console.log(`Result values in sum with promise all: ${(a + b)}`) // 12
    return sumWithPromiseAll(a, b).then(function (result) {
      console.log(`Result sum with promise all: ${result}`) // 12
      // console.timeEnd('performance') // 2.004s
    })
  })
  .catch(function (e) {
    console.log(`Result catch in sum with promise all: ${e}`) // Invalid input
  })

/*
Também podemos executar várias promises ao mesmo tempo, retornando após a primeira ter sucesso, usando Promise.race.
*/

function sumWithPromiseRace(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject('Invalid input')
    setTimeout(function () {
      resolve(a + b)
    }, Math.random() * 1000)
  })
}
console.time('performance')

Promise.race([sumWithPromiseRace(2, 2), sumWithPromiseRace(4, 4)])
  .then(function (value) {
    console.log(`Result value in sum with promise all: ${value}`) // 
    return sumWithPromiseRace(a, b).then(function (result) {
      console.log(`Result sum with promise race: ${result}`) // 12
      console.timeEnd('performance') // 
    })
  })
  .catch(function (e) {
    console.log(`Result catch in sum with promise race: ${e}`) // Invalid input
  })
