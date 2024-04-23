/*
Além disso, é possível utilizar generators para sincronizar chamadas assíncronas de forma similar ao async/await.
*/

function sum(a, b) {
  return new Promise(function (resolve) {
    setTimeout(function () {
     resolve(a + b)
    }, 1000)
  })
}

function sumAsync(fn) {
  const gen = fn()
  sumAsyncRec(gen)
}

function sumAsyncRec(gen, result) {
  const obj = gen.next(result)
  if (obj.done) return
  obj.value.then(function(result) {
    sumAsyncRec(gen, result)
  })
}

sumAsync(function* () {
  const a = yield sum(2, 2)
  const b = yield sum(4, 4)
  const result = yield sum(a, b)
  console.log(result)
})


/*

function sumAsync(fn) {
  console.log(`FN: ${fn}`)
  const gen = fn()
  console.log(`GEN: ${gen}`)
  console.log(gen.next())
  gen.next().value.then(function(result) {
    console.log(`FIRST RESULT: ${result}`)
    gen.next().value.then(function(result) {
      console.log(`SECOND RESULT: ${result}`)
    })
  })
}

CONSOLE.LOG:

FN: function* () {
  const a = yield sum(2, 2)
  const b = yield sum(4, 4)
  const result = yield sum(a, b)
  console.log(result)
}

GEN: [object Generator]

gen.next(): { value: Promise { <pending> }, done: false }

FIRST RESULT: 4

SECOND RESULT: 8
*/