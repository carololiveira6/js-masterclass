/*
Para extrair os valores de um objeto, é necessário referenciar a chave de cada uma das propriedades.
*/

const language = {
  name: 'JavaScript',
  founded: 1995,
  founder: 'Brendan Eich',
};

//Sem destructuring
const name0 = language.name;
const founded0 = language.founded;
const founder0 = language.founder;
console.log(name0, founded0, founder0);

// Com destructuring

const { name, founded, founder } = language;
console.log(name, founded, founder);

/*
É possível definir nomes diferentes para as variáveis em relação as chaves das propriedades do objeto.
*/

const { name: n, founded: year, founder: author } = language;
console.log(n, year, author);

/*
Também podemos referenciar as propriedades de objetos que estão dentro de outros objetos.
*/

const languageC = {
  name: 'C',
  author: "Dennis Ritchie",
  year: '1972',
  company: {
    nameCompany: 'Bell Labs',
    location: 'USA',
  },
};

const { name: nome, author: autor, year: ano, company: { nameCompany: companhia } } = languageC;

console.log(nome, autor, ano, companhia);