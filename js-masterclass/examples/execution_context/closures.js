/*
Na linguagem JavaScript, tpda função permite a utilização de variáveis qie não foram declaradas e nem passadas por parâmetro.
Essas variáveis são conhecidas como variáveis livres ou free variables.
*/

const v1 = 10

function fn1() {
  console.log(v1) // 10
}
fn1()

function fn2() {
  function fn3() {
    console.log(v1) // 10
  }
  fn3()
}
fn2()

/*
O problema é que como as funções são de primeira classe, dependendo da situação, poderia existir uma ambiguidade e isso foi resolvido com o conceito de closure.

Funções de primeira classe são aquelas que podem ser atribuídas a uma variável, passadas por um parâmetro ou retornadas de outras funções.
*/

function fun1() {
  const a1 = 10 // declarando aqui também retorna 10
  return function () {
    // const a1 = 10; // declarando aqui retorna 10
    console.log(a1) //10
  }
}

const fun2 = fun1()
const a1 = 100 // essa ambiguidade é resolvido pela Closure, porque a variável a1 da linha 28 foi declarada primeiro, então é seu valor que vale.
fun2()

/*
Resumindo, Closure é uma função com um scope chain estático, que é definida no momento em que a função é criada, por isso, todas as funções na linguagem JavaScript são Closures.
*/

const b1 = 10

function aula1() {
  console.log(b1) // 10 porque ao criar essa função aula1, b1 = 10
}
aula1()

function aula2(aula1) {
  const b1 = 100
  fn1()
}
aula2(aula1) // passa a função aula1 (linha 45) como parâmetro

/*
Apesar de estático, o scope chain faz referência para objetos que estão na memória e podem ser compartilhados por mais de uma função.
*/

function fabrica() {
  let d = 10
  return {
    m1() {
      console.log(++d) // 11
    },
    m2() {
      console.log(--d) // 10
    },
  }
}
const obj = fabrica()
obj.m1() // 11
obj.m2() // 10

const objeto = {}
for (var i = 0; i < 3; i++) {
  //var usado propositalmente
  objeto[i] = function () {
    console.log(i) // 0 1 2
  }
}
console.log(objeto)
// {'0': [Function (anonymous)],'1': [Function (anonymous)],'2': [Function (anonymous)]}
objeto[0]() // 3
objeto[1]() // 3
objeto[2]() // 3
// Retorna 3 porque é compartilhado, i++ ficou igual a 3 e então o laço acabou e permaneceu o valor i = 3.

// Primeira forma para resolver a questão acima, é criado um escopo externo a mais para cada função criada.

const objeto1 = {}
for (var i = 0; i < 3; i++) {
  objeto1[i] = (function (j) {
    return function () {
      console.log(j)
    }
  })(i)
}

objeto1[0]() // 0
objeto1[1]() // 1
objeto1[2]() // 2

// Segunda forma para resolver

const objeto2 = {}
for (var i = 0; i < 3; i++) {
  objeto2[i] = (function () {
    {
      console.log(this.j)
    }
  }).bind({j: i});
}

objeto2[0]() // 0
objeto2[1]() // 1
objeto2[2]() // 2
