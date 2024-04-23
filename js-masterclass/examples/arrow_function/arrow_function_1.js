/*
As arrow functions têm uma abordagem mais simples e direta para escrever uma função e podem melhorar a legibilidade do código em diversas situações
*/

// Regras da Arrow Function

// 1. Se a função tiver apenas um parâmetro, os parênteses podem ser omitidos

const sum = (number) => number + number
console.log(sum(2)) // 4

// 2. Se a função não tiver parâmetros, os parênteses devem ser incluídos

const sayHello = () => console.log('hello world')
sayHello() // hello world

// 3. Se a função tiver mais de um parâmetro, os parênteses devem ser incluídos

const sum2 = (number1, number2) => number1 + number2
console.log(sum2(2, 3)) // 5

// 4. Se a função tiver mais de uma expressão, as chaves devem ser incluídas e o valor de retorno deve ser especificado

const sum3 = (number1, number2) => {
  const result = number1 + number2
  return result
}
console.log(sum3(2, 3)) // 5

// 5. Se a função tiver apenas uma expressão, as chaves podem ser omitidas e o valor de retorno é implícito

const sum4 = (number1, number2) => number1 + number2
console.log(sum4(2, 3)) // 5

// 6. Se a função tiver mais de uma expressão e o valor de retorno for implícito, as chaves devem ser incluídas

const sum5 = (number1, number2) => {
  const result = number1 + number2
  return result
}
console.log(sum5(2, 3)) // 5

// 7. Se a função tiver apenas um parâmetro e o valor de retorno for implícito, os parênteses e as chaves devem ser omitidos

const double = (number) => number * 2
console.log(double(2)) // 4

const fullName = (firstName, lastName) => firstName + ' ' + lastName
console.log(fullName('John', 'Doe')) // John Doe

const sayHello2 = () => console.log('hello world')
sayHello2() // hello world

/* As Arrow Function não possuem as suas próprias variáveis this e arguments, portanto não se usa em métodos.
A arrow function não tem o this, ela aponta para o escopo global ou para nulo se estiver em um contexto.
*/

const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: () => {
    return this.firstName + ' ' + this.lastName
  },
}

console.log(person) // { firstName: 'John', lastName: 'Doe', fullName: [Function: fullName] }
console.log(person.fullName()) // John Doe

console.log(person1) // { firstName: 'John', lastName: 'Doe', fullName: [Function: fullName] }
console.log(person1.fullName()) // undefined undefined

const sumArgs = function () {
  let total = 0
  for (let argument in arguments) {
    total += arguments[argument]
  }
  return total
}

console.log(sumArgs(1, 2, 3, 4, 5)) // 15

/*
const sumArgs1 = () => {
  let total = 0;
  for (let argument in arguments) {
    total += arguments[argument];
  }
  return total;
};

console.log(sumArgs1(1, 2, 3, 4, 5)); // Retorna erro
*/

// As Arrow Function não podem ser usadas como construtoras

const Person = function (firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
};
const john = new Person('John', 'Doe');

console.log(john); // { firstName: 'John', lastName: 'Doe' }

/*
const Person2 = (firstName, lastName) => ({firstName, lastName});
const john2 = new Person2('John', 'Doe')

console.log(john2) // TypeError: Person2 is not a constructor

const Person1 = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};
const john1 = new Person1('John', 'Doe');

console.log(john1) // TypeError: Person1 is not a constructor

const Person = (firstName, lastName) => {
  this.firstName = firstName;
  this.lastName = lastName;
};
const john = new Person('John', 'Doe');

console.log(john); // TypeError: Person is not a constructor
*/

// Retornando objetos com Arrow Functions

const createPerson = function(name, city, year) {
  return {
      name,
      city,
      year
  };
};
const personCreated = createPerson("Alan Kay", "Springfield", 1940);

console.log(personCreated); // { name: 'Alan Kay', city: 'Springfield', year: 1940 }

const createPerson2 = (name, city, year) => {name, city, year};
const personCreated2 = createPerson2("Alan Kay", "Springfield", 1940);

console.log(personCreated2); // undefined

const createPerson3 = (name, city, year) => ({name, city, year});
const personCreated3 = createPerson3("Alan Kay", "Springfield", 1940);

console.log(personCreated3); // { name: 'Alan Kay', city: 'Springfield', year: 1940 }