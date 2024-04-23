function sumWithDelay(a, b) {
  setTimeout(function () {
    return a + b // esse return não retorna o valor da função sumWithDelay, mas sim da função setTimeout
  }, 1000)
}
const resultWithDelay = sumWithDelay(2, 2)
console.log(`Result sum with delay: ${resultWithDelay}`) // undefined, porque a função sumWithDelay é assíncrona, ou seja, ela não retorna o valor imediatamente, mas sim após 1 segundo.