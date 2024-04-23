/*
O Execution Context é o ambiente onde o código é executado, sendo composto pelo variable object, scope chain e this.

variable object: contém as variáveis, as declarações de funções, os argumentos, tudo o que as funções utilizam diretamente.

scope chain: cadeia de escopos
*/
/*
Dentro de uma função, é possível acessar variáveis existentes fora dela, por meio do scope chain.
*/

const v1 = 10;
const fn1 = function() {
  console.log(v1); // 10
};
fn1();

const v2 = 5;
const fn2 = function() {
  const fn3 = function() {
    console.log(v2); // 5
  };
  fn3();
}
fn2();

const v3 = 15;
const fn4 =  function() {
  const v3 = 100;
  const fn5 = function() {
    console.log(v3); // 100
  };
  fn5();
}
fn4();

const v4 = 15;
const fn6 =  function() {
  const v4 = 100;
  const fn7 = function() {
    const v4 = 1000;
    console.log(v4); // 1000
  };
  fn7();
}
fn6();

/*
Não é possível acessar de fora uma variável que foi declarada dentro de uma função.
As funções em JS são isoladas.
*/

const a1 = 15;
const fun1 =  function() {
  const a1 = 100;
  const fun2 = function() {
    const a1 = 1000;
    console.log(a1); // 1000
    const a2 = 20;
    console.log(a2); // 20
  };
  fun2();
}
fun1();
// console.log(a2); // Erro: a2 is not defined

/*
Toda função tem uma variável this que contém a referência para o objeto responsável pela sua invocação.
This contém uma referência para o objeto que foi responsável por sua invocação.
*/

const obj1 = {
  p1: 10,
  getP1: function() {
    return this.p1;
  }
};
console.log(obj1.getP1()); // 10

const obj2 = {
  p1: 10,
  getP1: function() {
    const fn = function() {
      return this.p1;
    }
    return fn();
  }
};
console.log(obj2.getP1()); // undefined

const obj3 = {
  p1: 10,
  getP1: function() {
    const that = this;
    const fn = function() {
      return that.p1;
    }
    return fn();
  }
};
console.log(obj3.getP1()); // 10

const obj4 = {
  p1: 10,
  getP1: function() {
    const fn = () => {
      return this.p1;
    }
    return fn();
  }
};
console.log(obj4.getP1()); // 10