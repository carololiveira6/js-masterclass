function sumWithPromiseResolve(a, b) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a + b)
    }, 1000)
  })
}
console.time('performance')

sumWithPromiseResolve(2, 2).then(function (a) {
  sumWithPromiseResolve(4, 4).then(function (b) {
    sumWithPromiseResolve(a, b).then(function (result) {
      console.log(`Result sum with resolve: ${result}`) // 12
      console.timeEnd('performance') // 3.014s
    })
  })
})