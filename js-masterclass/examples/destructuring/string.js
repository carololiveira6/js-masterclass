/*
Por meio do destructuring, podemos extrair valores de arrays e objetos de uma forma mais simples e direta.
*/

const language = "C;Dennis Ritchie;1972";

// Sem destructuring
const languageArray = language.split(";");
const nameLanguage = languageArray[0];
const authorLanguage = languageArray[1];
const yearLanguage = languageArray[2];

console.log(nameLanguage, authorLanguage, yearLanguage);

/*
É possível extrair valores de um array criando variáveis em ordem, de acordo com a posição de cada elemento.
Podemos ignorar um elemento do array, deixando de estabelecer um nome para a variável.
*/

// Com destructuring
const [name0, author, year] = language.split(";");
const [, author1, year1] = language.split(";");
const [name1, , year2] = language.split(";");
const [name2, author2] = language.split(";");

console.log(name0, author, year);
console.log(author1, year1);
console.log(name1, year2);
console.log(name2, author2);

/*
Assim como nas funções, é possível definir valores padrões para cada uma das variáveis.
*/

const language2 = "C;Dennis Ritchie".split(";");
const [name3 = "-", author3 = "-", year3 = "-"] = language2;
console.log(name3, author3, year3);