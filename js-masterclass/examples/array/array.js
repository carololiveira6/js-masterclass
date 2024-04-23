/*
Um Array é apenas um objeto que oferece operações para acessar e manipular suas propriedades.

O Array também é um objeto. A diferença é que o Array é um objeto que tem um protótipo com operações úteis para manipulação de elementos.
*/

const languages = []

console.log(languages)
console.log(typeof languages)
console.log(languages instanceof Array)

const languages2 = ['Python', 'C', 'JavaScript', 'Java']

console.log(languages2)
console.log(typeof languages2)
console.log(languages2 instanceof Array)

// Função Construtora

const languages3 = new Array('Python', 'C', 'JavaScript', 'Java') // const languages3 = new Array();

console.log(languages3)
console.log(typeof languages3)
console.log(languages3 instanceof Array)

/*
É possível inicializar passando apenas um Number para a função construtora
*/

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]

const numbers2 = new Array(10);
console.log(numbers2); // [ <10 empty items> ] Array com 10 posições vazias

/*
A propriedade length indica a quantidade de elementos que existem dentro do Array
*/

const languages4 = [];
languages4[0] = 'Python';
languages4[1] = 'C';
languages4[2] = 'JavaScript';

console.log(languages4);
console.log(languages4.length);

/*
Os elementos vazios dentro do Array não são considerados no length
*/

const languages5 = [];
languages5[0] = 'Python';
languages5[1] = 'C';
languages5[2] = 'JavaScript';

console.log(languages5); // [ 'Python', 'C', 'JavaScript' ]
console.log(languages5.length); // 3

delete languages5[1];
console.log(languages5); // [ 'Python', <1 empty item>, 'JavaScript' ]
console.log(languages5.length); // 3

const languages6 = [];
languages6[0] = 'Python';
languages6[10] = 'C';
languages6[20] = 'JavaScript';

console.log(languages6); // [ 'Python', <9 empty items>, 'C', <9 empty items>, 'JavaScript' ]
console.log(languages6.length); // 21