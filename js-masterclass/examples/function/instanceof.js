/*
Com o operador instanceof é possível verificar se um objeto foi criado por meio de uma determinada função construtora analisando a sua cadeia de protótipos.
*/

const date = new Date();
// Objeto criado que descende de Date que descende de Object.
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true
console.log(date instanceof Array); // false

// Diferença entre typeof e o instanceof

// typeof revela o tipo de dado de uma determinada variável

console.log(typeof date); // object

const _instanceof = function(obj, fn) {
  if (obj === fn.prototype) return true;
  if (obj === null) return false;
  return _instanceof(obj.__proto__, fn); // também pode usar o getPrototypeOf
};

const date1 = new Date();
console.log(date1 instanceof Date); // true
console.log(date1 instanceof Object); // true
console.log(date1 instanceof Array); // false
console.log(_instanceof (date, Date)); // true
console.log(_instanceof (date, Object)); // true
console.log(_instanceof (date, Array)); // false