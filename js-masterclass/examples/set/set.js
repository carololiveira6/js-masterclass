/*
Um Set é um objeto que armazena elementos únicos, que podem ser de qualquer tipo de dado.

size: Retorna a quantidade de elementos do Set.
add: Adiciona um novo elemento ao Set.
forEach: Itera sobre os elementos do Set.
has: Verifica true se um elemento existe no Set.
delete: Remove um elemento do Set.
clear: Remove todos os elementos do Set.
*/

const charsetsInitialization = new Set()

console.log(charsetsInitialization) // Set(0) {}

const charsets = new Set(['ASCII', 'ISO-8859-1', 'UTF-8'])

console.log(charsets) // Set(3) { 'ASCII', 'ISO-8859-1', 'UTF-8' }
console.log(Array.from(charsets)) // [ 'ASCII', 'ISO-8859-1', 'UTF-8' ]

// size: Retorna a quantidade de elementos do Set.

console.log(charsets.size) // 3

// add: Adiciona um novo elemento ao Set.

const charsetsAdd = new Set()

charsetsAdd.add('ASCII')
charsetsAdd.add('ISO-8859-1')
charsetsAdd.add('UTF-8')

console.log(charsetsAdd) // Set(3) { 'ASCII', 'ISO-8859-1', 'UTF-8' }

// forEach: Itera sobre os elementos do Set.

charsets.forEach(function (charset) {
  console.log(charset)
  /*
    ASCII
    ISO-8859-1
    UTF-8
  */
})

// has: Verifica true se um elemento existe no Set.

console.log(charsets.has('ASCII')) // true
console.log(charsets.has('UTF-16')) // false

// delete: Remove um elemento do Set.

console.log(charsets.delete('ASCII')) // true

console.log(charsets) // Set(2) { 'ISO-8859-1', 'UTF-8' }
console.log(charsets.has('ASCII')) // false

// clear: Remove todos os elementos do Set.

console.log(charsets) // Set(2) { 'ISO-8859-1', 'UTF-8' }
console.log(charsets.size) // 2

charsets.clear()

console.log(charsets) // Set(0) {}
console.log(charsets.size) // 0

/*
A diferença entre um Set e um Array é que o Set não permite elementos duplicados, enquanto o Array permite. 
*/

const numbers = []

numbers.push(5)
numbers.push(5)
numbers.push(5)

console.log(numbers) // [ 5, 5, 5 ]
console.log(numbers.length) // 3

const numbersSet = new Set()

numbersSet.add(5)
numbersSet.add(5)
numbersSet.add(5)

console.log(numbersSet) // Set(1) { 5 }
console.log(numbersSet.size) // 1

let array = [10, 10, 10]

console.log(array) // [ 10, 10, 10 ]
console.log(array.length) // 3

const set = new Set(array)

console.log(set) // Set(1) { 10 }
console.log(set.size) // 1

array = Array.from(set)

console.log(array) // [ 10 ]
console.log(array.length) // 1

/*
Exemplos de como remover a duplicidade de elementos de um Array sem a necessidade de um Set.
*/

let array1 = [10, 10, 10]

const obj = {}

array1.forEach(function (element) {
  obj[element] = undefined
})
array1 = Object.keys(obj)
console.log(array1) // retorna [ '10' ] - string

let array2 = [10, 10, 10]
let set2 = []

array2.forEach(function (element) {
  if (!set2.includes(element)) {
    set2.push(element)
  }
})
console.log(set2) // retorna [ 10 ] - number
