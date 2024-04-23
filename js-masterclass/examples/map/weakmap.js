/*
WeakMap é um objeto, similar ao Map, que permite apenas chaves do tipo Object e mantém as referências de forma fraca, sendo volátil e não iterável.

A principal diferença entre WeakMap e Map é que o WeakMap não é enumerável, ou seja, não é possível iterar sobre ele.

set: Adiciona um par de chave e valor ao WeakMap.
has: Verifica se uma chave existe no WeakMap e retorna true.
get: Retorna o valor associado a uma chave
delete: Remove um par de chave e valor do WeakMap.
*/

const weakMap = new WeakMap()

console.log(weakMap) // WeakMap { <items unknown> } - Objeto vazio

// set: Adiciona um par de chave e valor ao WeakMap.

const weakMapSet = new WeakMap()

const obj1 = {}
const obj2 = {}

weakMapSet.set(obj1, "obj1")
weakMapSet.set(obj2, "obj2")

console.log(weakMapSet) // WeakMap { <items unknown> }

// has: Verifica se uma chave existe no WeakMap e retorna true.

console.log(weakMapSet.has(obj1)) // true
console.log(weakMapSet.has(obj2)) // true
console.log(weakMapSet.has({})) // false

// get: Retorna o valor associado a uma chave

console.log(weakMapSet.get(obj1)) // obj1
console.log(weakMapSet.get(obj2)) // obj2

// delete: Remove um par de chave e valor do WeakMap.

console.log("delete")

const weakMapDelete = new WeakMap()

const objDel1 = {}
const objDel2 = {}

weakMapDelete.set(objDel1, "obj1")
weakMapDelete.set(objDel2, "obj2")

console.log(weakMapDelete.delete(objDel1)) // true
console.log(weakMapDelete.delete(objDel2)) // true

console.log(weakMapDelete) // WeakMap { <items unknown> }

console.log(weakMapDelete.has(objDel1)) // false
console.log(weakMapDelete.has(objDel2)) // false

console.log(weakMapDelete.get(objDel1)) // undefined
console.log(weakMapDelete.get(objDel2)) // undefined

/*
Se for passado outro tipo de valor no WeakMap, é lançado um TypeError

const weakMapSet = new WeakMap()

const obj1 = "key1"
const obj2 = "key2"

weakMapSet.set(obj1, "obj1")
weakMapSet.set(obj2, "obj2")

console.log(weakMapSet.get(obj1)) // TypeError: Invalid value used as weak map key
console.log(weakMapSet.get(obj2))

console.log(weakMapSet) // WeakMap { <items unknown> }
*/

// Sem a referência para a chave, não é possível acessar o valor

// Discussão com Brendan Eich sobre WeakMap: https://gist.github.com/rwaldron/963596

// Utilizando WeakMap para cache

const areas = new WeakMap()

const rectangle1 = {
    x: 10,
    y: 2
}

const rectangle2 = {
    x: 5,
    y: 3
}

function calculateArea(rectangle) {
  if (areas.has(rectangle)){
    console.log("Using cache...")
    return areas.get(rectangle)
  }
  const area = rectangle.x * rectangle.y
  areas.set(rectangle, area) // Salva o valor da área na cache
  return area
}

console.log(calculateArea(rectangle1)) // 20
console.log(calculateArea(rectangle1)) // 20
console.log(calculateArea(rectangle2)) // 15
console.log(calculateArea(rectangle2)) // 15