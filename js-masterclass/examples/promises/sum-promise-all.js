function sumWithPromiseAll(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject('Invalid input')
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}
console.time('performance')

Promise.all([sumWithPromiseAll(2, 2), sumWithPromiseAll(4, 4)])
  .then(function (values) {
    console.log(`Result values in sum with promise all: ${values}`) // 4,8
    const [a, b] = values
    console.log(`Result values in sum with promise all: ${(a + b)}`) // 12
    return sumWithPromiseAll(a, b).then(function (result) {  // se remover os parâmetros, retorna o erro
      console.log(`Result sum with promise all: ${result}`) // 12
      console.timeEnd('performance') // 2.007s
    })
  })
  .catch(function (e) {
    console.log(`Result catch in sum with promise all: ${e}`) // Invalid input
  })