/*
JSON, ou JavaScript Object Notation, é um formato de intercâmbio de dados, derivado da linguagem JavaScript que foi descoberto por Douglas Crockford e padronizado pela ECMA-404.
Serve para troca de dados entre sistemas.

Aceita os tipos de dados:
  Number
  String
  Boolean
  Object
  Array
  null

O método JSON.stringify converte um determinado tipo de dado para JSON:
*/

JSON.stringify(10);
// '10'
JSON.stringify("JavaScript");
// '"JavaScript"'
JSON.stringify(true);
// 'true'
JSON.stringify(false);
// 'false'
JSON.stringify({name: "Self", paradigm: "OO"});
// '{"name":"Self","paradigm":"OO"}'
JSON.stringify([1,2,3,4,5,6,7,8,9]);
// '[1,2,3,4,5,6,7,8,9]'
JSON.stringify(null);
// 'null'

/*
O método JSON.parse converte um JSON para um determinado tipo de dado:
*/

JSON.parse('10');
// 10
//JSON.parse("JavaScript");
// SyntaxError
JSON.parse('"JavaScript"');
// "JavaScript"
JSON.parse('true');
// true
JSON.parse('false');
// false
JSON.parse('{"name":"Self","paradigm":"OO"}');
// Object {name: "Self", paradigm: "OO"}
JSON.parse('[1,2,3,4,5,6,7,8,9]');
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
JSON.parse('null');
// null

const book1 = {
  name: "Refactoring",
  author: "Martin Fowler",
};

const book2 = {
  name: "Refactoring",
  author: "Martin Fowler",
};

// Comparação

console.log(book1 === book2); // false
console.log(JSON.stringify(book1) === JSON.stringify(book2)); // true

// Clonar objeto

const book3 = book2;

console.log(book3 === book2); // true

const book4 = JSON.parse(JSON.stringify(book2));

console.log(book3 === book2); // false porque cria outro objeto

/* JSON e Object são dois conceitos completamente diferentes */