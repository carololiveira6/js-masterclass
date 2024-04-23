/*
Podemos aplicar destructuring também nos parâmetros de uma função, tanto com arrays, quanto com objetos
*/

const sum = function(a, b) {
  return a + b;
};

console.log(sum(5, 5));

// Com destructuring de array
const sum2 = function([a, b]) {
  return a + b;
};
console.log(sum2([5, 5]));

// Com destructuring de objeto
const sum3 = function({ a, b }) {
  return a + b;
};
console.log(sum3({ a: 5, b: 5 }));