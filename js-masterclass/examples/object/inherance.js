/*
O principal objetivo da herança é permitir o reuso do código por meio do compartilhamento de propriedades entre objetos, evitando a duplicação.
A herança é realizada entre objetos e não classes. Herança baseada em protótipos.
*/

// Criando dois objetos que compartilham uma mesma propriedade
/*
const scheme = {
  name: "Scheme",
  year: 1975,
  paradigm: "Functional"
};

const javascript = {
  name: "JavaScript",
  year: 1995,
  paradigm: "Functional"
};
*/

/*
A propriedade __proto__ é uma referência para o protótipo do objeto.

Então dois objetos que compartilham uma mesma propriedade pode herdar de um outro objeto.

Nesse caso, trocamos a propriedade < paradigm: "Functional" > e vamos utilizar __proto__ no lugar.

Porém, quando utilizamos o console.log, o interpretador só exibe as informações que estão no próprio objeto, até para evitar exagero de informações no log.

Se utilizar console.log(scheme.paradigm) e console.log(javascript.paradigm), a informação será exibida.

Por padrão, todos os objetos em JavaScript já são criados com o protótipo Object.

Quando procuramos uma propriedade e ela não é encontrada, retorna undefined.
*/
/*
const functionalLanguage = {
  paradigm: "Functional"
};

const scheme = {
  name: "Scheme",
  year: 1975,
  __proto__: functionalLanguage
};

const javascript = {
  name: "JavaScript",
  year: 1995,
  __proto__: functionalLanguage
};
*/

/*
O método hasOnwProperty pode ser utilizado para determinar se uma propriedade pertence ao objeto.

< for in > percorre as chaves no próprio objeto e também nos protótipos.
*/

const functionalLanguage = {
  paradigm: "Functional"
};

const scheme = {
  name: "Scheme",
  year: 1975,
  __proto__: functionalLanguage
};

const javascript = {
  name: "JavaScript",
  year: 1995,
  __proto__: functionalLanguage
};

for (let key in scheme) {
  console.log(key, scheme.hasOwnProperty(key));
};

/*
Outras formas de definir os protótipos de um objeto.
Os métodos Object.setPrototypeOf e Object.getPrototypeOf, ambos da Object API, permitem a interação com o protótipo do objeto.

É preferível utilizar Object.setPrototypeOf ao invés de __proto__.
*/

const functionalLanguage2 = {
  paradigm: "Functional"
};

const scheme2 = {
  name: "Scheme",
  year: 1975,
};
Object.setPrototypeOf(scheme, functionalLanguage2);

const javascript2 = {
  name: "JavaScript",
  year: 1995,
};
Object.setPrototypeOf(javascript, functionalLanguage2);

for (let key in scheme) {
  console.log(key, scheme.hasOwnProperty(key));
};

/*
Com o método Object.create é possível criar um objeto passando o seu protótipo por parâmetro
*/

const functionalLanguage3 = {
  paradigm: "Functional"
};

const scheme3 = Object.create(functionalLanguage3);
scheme3.name = "Scheme";
scheme3.year = 1975;

const javascript3 = Object.create(functionalLanguage3);
javascript3.name = "JavaScript";
javascript3.year = 1995;

for (let key in scheme) {
  console.log(key, scheme.hasOwnProperty(key));
};

/*
Sem o seu protótipo, o objeto perde algumas operações importantes.

Caso a mesma propriedade exista no objeto e no seu protótipo, a propriedade do próprio objeto é retornada, fazendo sombra à propriedade do protótipo.
*/

const functionalLanguage4 = Object.create({});
functionalLanguage4.paradigm = "Functional";
const scheme4 = Object.create(functionalLanguage4);
scheme4.name = "Scheme";
scheme4.year = 1975;
const javascript4 = Object.create(functionalLanguage4);
javascript4.name = "JavaScript";
javascript4.year = 1995;
javascript4.paradigm = "OO";

// Consoles

console.log(functionalLanguage);
console.log(scheme);
console.log(scheme.paradigm);
console.log(javascript);
console.log(javascript.paradigm);

console.log(scheme2);
console.log(javascript2);

console.log(scheme3);
console.log(javascript3);

console.log(javascript4);
console.log(javascript4.paradigm);
console.log(javascript4.__proto__.paradigm);
console.log(javascript4.getPrototypeOf(javascript4).paradigm);

