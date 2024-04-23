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