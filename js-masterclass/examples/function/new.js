// Criando objeto com método que calcula a idade

const person1 = {
  name: "Linus Torvalds",
  city: "Helsinki",
  year: 1969,
  getAge() {
    return (new Date()).getFullYear() - this.year;
  }
};

const person2 = {
  name: "Bill Gates",
  city: "Seattle",
  year: 1955,
  getAge() {
    return (new Date()).getFullYear() - this.year;
  }
};

console.log(person1);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());


// Criando objeto a partir da mesma estrutura

/*
A função fábrica (Factory Function), que é um tipo de padrão, retorna um novo objeto após ser invocada diretamente.
*/

const createPerson = function(name, city, year) {
  return {
      name,
      city,
      year,
      getAge() {
        return (new Date()).getFullYear() - this.year;
      }
  };
};

const person3 = createPerson("Linus Torvalds", "Helsinki", 1969);
const person4 = createPerson("Bill Gates", "Seattle", 1955);

console.log(person3);
console.log(person3.getAge());
console.log(person4);
console.log(person4.getAge());

// Eliminando a duplicação e reusando propriedades entre objetos.

const personPrototype = {
  getAge() {
    return (new Date()).getFullYear() - this.year;
  }
};

const createPersonAgain = function(name, city, year) {
  const person = {
      name,
      city,
      year
  };

  Object.setPrototypeOf(person, personPrototype);

  return person;
};

const person5 = createPersonAgain("Linus Torvalds", "Helsinki", 1969);
const person6 = createPersonAgain("Bill Gates", "Seattle", 1955);

console.log(person5);
console.log(person5.__proto__);
console.log(person5.getAge());
console.log(person6);
console.log(person6.__proto__);
console.log(person6.getAge());
console.log(person5.__proto__ === person6.__proto__); // true

/*
A função construtora (Construction Function) retorna um novo objeto ao ser invocada por meio do operador new.
Por convenção, essas funções iniciam com letra maiúscula para que lembrem de invocá-la sempre com new.
O new cria um novo objeto e associa as propriedades a this.
Sempre iremos associar as propriedades que forem públicas, ou seja, as que vão integrar o objeto retornado, ao this.
*/

const Person = function(name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
  this.getAge = function() {
    return (new Date()).getFullYear() - this.year;
  };
};

const person7 = new Person("Linus Torvalds", "Helsinki", 1969);
const person8 = new Person("Bill Gates", "Seattle", 1955);

console.log(person7);
console.log(person7.__proto__);
console.log(person7.getAge());
console.log(person8);
console.log(person8.__proto__);
console.log(person8.getAge());
console.log(person7.__proto__ === person8.__proto__); // true

/*
Toda função tem uma propriedade chamada prototype, que é vinculada ao __proto__ do objeto criado pelo operador new.
O prototype é um objeto que contém as propriedades que serão herdadas pelos objetos criados por meio do operador new.
Os prototypes são como filhos dos constructors, eles herdam todos os métodos e atributos deles.
Eles permitem que o JavaScript crie novos objetos sem precisar copiar todo o código da função constructor.
*/

const PersonAgain = function(name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
};

PersonAgain.prototype.getAge = function() {
  return (new Date()).getFullYear() - this.year; 
};

const person9 = new PersonAgain("Linus Torvalds", "Helsinki", 1969);
const person0 = new PersonAgain("Bill Gates", "Seattle", 1955);

console.log(person9);
console.log(person9.__proto__);
console.log(person9.getAge());
console.log(person0);
console.log(person0.__proto__);
console.log(person0.getAge());
console.log(person9.__proto__ === person0.__proto__); // true

// Recriando o algoritmo do new

const _new = function(fn, ...params) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  fn.apply(obj, params);
  return obj;
};

const NewPerson = function(name, city, year) {
  this.name = name;
  this.city = city;
  this.year = year;
};

NewPerson.prototype.getAge = function() {
  return (new Date()).getFullYear() - this.year; 
};

const newperson1 = _new(Person, "Linus Torvalds", "Helsinki", 1969);
const newperson2 = _new(Person, "Bill Gates", "Seattle", 1955);

console.log("#####################################")
console.log(newperson1);
console.log(newperson1.__proto__);
console.log(newperson1.getAge());
console.log(newperson2);
console.log(newperson2.__proto__);
console.log(newperson2.getAge());
console.log(newperson1.__proto__ === newperson2.__proto__); // true