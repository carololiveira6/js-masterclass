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