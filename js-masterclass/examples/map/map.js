/*
Um map é um objeto que armazena um conjunto de chaves e valores que podem ser de qualquer tipo de dado.

size: Retorna o número de elementos no map.
set: Adiciona um par de chave e valor no map.
forEach: Itere sobre os elementos do map.
has: Verifica se uma chave existe no map e retorna true.
get: Retorna o valor associado a uma chave.
delete: Remove um par de chave e valor do map.
clear: Remove todos os elementos do map.
*/

/*
const timeUnits = new Map();

console.log(timeUnits) // Map(0) {}
*/

const timeUnits = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);

console.log(timeUnits) // Map(3) { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
console.log(Array.from(timeUnits)) // [ [ 'second', 1 ], [ 'minute', 60 ], [ 'hour', 3600 ] ]

// size: Retorna o número de elementos no map.

console.log(timeUnits.size) // 3

// set: Adiciona um par de chave e valor no map.

const timeUnitsSet = new Map();

timeUnitsSet.set("second", 1);
timeUnitsSet.set("minute", 60);
timeUnitsSet.set("hour", 3600);

console.log(timeUnitsSet) // Map(3) { 'second' => 1, 'minute' => 60, 'hour' => 3600 }

// forEach: Itere sobre os elementos do map. Retornando o valor primeiro e depois a chave.


timeUnitsSet.forEach(function (value, key) {
    console.log(key, value);
    /*
      second 1
      minute 60
      hour 3600
    */
})

// has: Verifica se uma chave existe no map e retorna true.

console.log(timeUnitsSet.has("second")) // true
console.log(timeUnitsSet.has("day")) // false

// get: Retorna o valor associado a uma chave.

console.log(timeUnitsSet.get("second")) // 1
console.log(timeUnitsSet.get("minute")) // 60
console.log(timeUnitsSet.get("hour")) // 3600
console.log(timeUnitsSet.get("day")) // undefined

// delete: Remove um par de chave e valor do map.

console.log(timeUnitsSet.size) // 3

timeUnitsSet.delete("second");

console.log(timeUnitsSet.delete("second")) // true
console.log(timeUnitsSet.delete("hour")) // false

console.log(timeUnitsSet) // Map(2) { 'minute' => 60, 'hour' => 3600 }

console.log(timeUnitsSet.size) // 2

// clear: Remove todos os elementos do map.

const timeUnitsClear = new Map();

timeUnitsClear.set("second", 1);
timeUnitsClear.set("minute", 60);
timeUnitsClear.set("hour", 3600);

console.log(timeUnitsClear) // Map(3) { 'second' => 1, 'minute' => 60, 'hour' => 3600 }
console.log(timeUnitsClear.size) // 3

timeUnitsClear.clear();

console.log(timeUnitsClear) // Map(0) {}

/*
A diferença entre um map e um objeto é que um map permite que as chaves sejam de qualquer tipo de dado, enquanto um objeto só permite que as chaves sejam strings ou símbolos.

Além disso, um map mantém a ordem de inserção dos elementos, enquanto um objeto não garante a ordem dos elementos.
*/

const obj = {}

obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String";

console.log(obj[10]) // String
console.log(obj["10"]) // String
console.log(obj[true]) // String
console.log(obj["true"]) // String

// As chaves são convertidas para strings. 

console.log(obj) // { '10': 'String', 'true': 'String' }

const map = new Map();

map.set(10, "Number");
map.set("10", "String");
map.set(true, "Boolean");
map.set("true", "String");

console.log(map.get(10)) // Number
console.log(map.get("10")) // String
console.log(map.get(true)) // Boolean
console.log(map.get("true")) // String

console.log(map) // Map(4) { 10 => 'Number', '10' => 'String', true => 'Boolean', 'true' => 'String' }

const object = {}
// As propriedades toString e valueOf são herdadas do protótipo do objeto.

console.log("toString" in object) // true
console.log("valueOf" in object) // true

const object2 = Object.create(null);
// O objeto não herda as propriedades toString e valueOf, pois o protótipo é null.

console.log("toString" in object2) // false
console.log("valueOf" in object2) // false

const mapa = new Map();

console.log((mapa.get("toString"))) // undefined
console.log((mapa.get("valueOf"))) // undefined