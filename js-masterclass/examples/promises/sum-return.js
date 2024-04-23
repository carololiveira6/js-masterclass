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