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
    console.log(`Result value in sum with promise race: ${value}`) // 8 ou 4
    return sumWithPromiseRace(value, value).then(function (result) {
      console.log(`Result sum with promise race: ${result}`) // 16 ou 8
      console.timeEnd('performance') // 123.657ms
    })
  })
  .catch(function (e) {
    console.log(`Result catch in sum with promise race: ${e}`) // Invalid input
  })