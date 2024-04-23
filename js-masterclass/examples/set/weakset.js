/*
WeakSet é um objeto, similar ao Set, que permite apenas valores do tipo Object e mantém as referências de forma fraca, sendo volátil, ou seja, não existe garantia de que há elementos nele, e não iterável, ou seja, não possui métodos para percorrer seus elementos.

add: Adiciona um novo elemento ao WeakSet.
has: Verifica se um elemento existe no WeakSet e retorna true.
delete: Remove um elemento do WeakSet.
*/

const weakSet = new WeakSet()

console.log(weakSet) // WeakSet { <items unknown> }

const obj1 = {}
const obj2 = {}

weakSet.add(obj1)
weakSet.add(obj2)

console.log(weakSet) // WeakSet { [items unknown] } - não é possível visualizar por meio do toString

console.log(weakSet.has(obj1)) // true
console.log(weakSet.has(obj2)) // true
/*
console.log(weakSet.has(obj3)) // ReferenceError: obj3 is not defined
O código acima resulta em erro, pois obj3 não foi definido
*/

/*
const obj3 = "value"

weakSet.add(obj3)

console.log(weakSet.has(obj3)) // TypeError: Invalid value used in weak set
O código acima resulta em erro, pois obj3 não é um objeto
*/

console.log(weakSet.delete(obj1)) // true

console.log(weakSet.has(obj1)) // false

/*
O WeakSet serve para criar coleções de elementos únicos, sem a necessidade de manter referências fortes, o que pode ser útil em casos onde a referência é temporária, como em caches, por exemplo. É uma estrutura de dados pouco utilizada, mas pode ser útil em casos específicos, onde é necessário manter referências fracas para objetos, evitando vazamentos de memória (memory leak), porque podemos adicionar um volume grande de objetos ao WeakSet e, quando não precisarmos mais deles, o garbage collector pode remover os objetos da memória, pois o WeakSet não mantém referências fortes.
*/

const circles = new WeakSet()

function Circle(radius) {
  circles.add(this)
  this.radius = radius
}
Circle.prototype.calculateArea = function() {
  if (!circles.has(this)) throw "Invalid object"
  return Math.PI * Math.pow(this.radius, 2)
}

const circle1 = new Circle(10) // objeto criado externamente

console.log(circle1) // Circle { radius: 10 }

console.log(circle1.calculateArea()) // 314.1592653589793

const circle2 = {
  radius: 5
} // objeto criado manualmente

console.log(circle1.calculateArea.call(circle2)) // if (!circles.has(this)) throw "Invalid object"