const command = 'create table author (id number, name string, age number, city string, state string, country string)'

/*
Extraia o nome da tabela e armazene em uma variável chamada "tableName".
Extraia as colunas da tabela e armazene em uma variável chamada "columns".
Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.
*/

const word = command.split(' ');
const tableName = word[2];

const regex =  /create table ([A-z]+) \((.+)\)/;
const phrase = command.match(regex)
const words = phrase[2].split(', ');
const columns = words

console.log(tableName);
console.log(columns);