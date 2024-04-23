/*
As Classes são um tipo especial de função, que atuam como um template para a criação de objetos. São similares as funções construtoras.
*/

class Circle {}

console.log(Circle) // [class Circle]
console.log(typeof Circle) // function

console.log(
  '----------------------------------------------------------------------------------------'
)

const Rectangle = class {}

console.log(Rectangle) // [class Rectangle]
console.log(typeof Rectangle) // function

console.log(
  '----------------------------------------------------------------------------------------'
)

class Triangle {}
const triangle = new Triangle()
console.log(triangle) // Triangle {}

console.log(
  '----------------------------------------------------------------------------------------'
)

/*
As Classes não sofrem hoisting, ou seja, não podem ser chamadas antes de serem declaradas, não importando a forma como foram declaradas.

Hoisting é o comportamento padrão do JavaScript de mover declarações para o topo do escopo atual (para o topo do script ou da função).

const square = new Square()

const Square = class {}

console.log(square) // ReferenceError: Cannot access 'Square' before initialization

O código acima resulta em um erro, pois a variável Square não foi inicializada antes de ser chamada.

Da mesma forma que acontece com o código abaixo:

const square = new Square()

class Square {}

console.log(square) // ReferenceError: Cannot access 'Square' before initialization
*/

// As Classes são formadas por 3 tipos de membros: constructor, prototype, methods e static methods.

// O constructor é invocado no momento da instanciação de uma Classe e serve para inicializar um determinado objeto.

class Square {
  constructor(side) {
    this.side = side
  }
}

const square = new Square(4)
console.log(square) // Square { side: 4 }

console.log(
  '----------------------------------------------------------------------------------------'
)

// Os prototype methods dependem de uma instância para serem invocados. Eles são adicionados ao prototype da Classe.

class Quadradinho {
  constructor(lado) {
    this.lado = lado
  }

  calcularArea() {
    return Math.pow(this.lado, 2)
  }

  toString() {
    return `side: ${this.lado} and area: ${this.calcularArea()}`
  }
}

const quadradinho = new Quadradinho(4)
console.log(quadradinho) // Quadradinho { lado: 4 }
console.log(quadradinho.toString()) // side: 4 and area: 16
console.log(quadradinho.calcularArea()) // 16

console.log(
  '----------------------------------------------------------------------------------------'
)

/*
Os static methods são métodos que pertencem a Classe e não a instância. Eles são invocados diretamente na Classe e não dependem de uma instância para serem invocados.
A palavra chave static é utilizada para indicar que o método pertence a Classe e não a instância.
*/

class Cuadrado {
  constructor(lado) {
    this.lado = lado
  }

  calcularArea() {
    return Math.pow(this.lado, 2)
  }

  toString() {
    return `side: ${this.lado} and area: ${this.calcularArea()}`
  }

  static fromArea(area) {
    return new Cuadrado(Math.sqrt(area))
  }
}

const cuadrado = Cuadrado.fromArea(16)
console.log(cuadrado) // Cuadrado { lado: 4 }
console.log(cuadrado.toString()) // side: 4 and area: 16
console.log(cuadrado.calcularArea()) // 16

console.log(
  '----------------------------------------------------------------------------------------'
)

// Array.from é um exemplo de método estático. Pertence a função construtora Array e não a instância.

// As Classes funcionam de forma similar as funções construtoras, porém são mais simples e intuitivas.

function SquareConstructorFunction(side) {
  this.side = side
}

SquareConstructorFunction.prototype.calculateArea = function () {
  return Math.pow(this.side, 2)
}

SquareConstructorFunction.prototype.toString = function () {
  return `side: ${this.side} and area: ${this.calculateArea()}`
}

SquareConstructorFunction.fromArea = function (area) {
  return new SquareConstructorFunction(Math.sqrt(area))
}

const squareConstructorFunction = SquareConstructorFunction.fromArea(16)
console.log(squareConstructorFunction.toString()) // side: 4 and area: 16
console.log(squareConstructorFunction.calculateArea()) // 16

console.log(
  '----------------------------------------------------------------------------------------'
)

/* É possível criar uma hierarquia de classes por meio da palavra-chave extends. A Classe filha herda os métodos e propriedades da Classe pai.
Ao declarar um construtor na subclass, é necessário invocar o construtor da superclass por meio do super(), antes de utilizar a referência this.
*/

class Shape {
  toString() {
    return `area: ${this.calcularArea()}`
  }
}

class Quadrado extends Shape {
  constructor(lado) {
    super()
    this.lado = lado
  }

  calcularArea() {
    return Math.pow(this.lado, 2)
  }

  toString() {
    return `side: ${this.lado} ${super.toString()}`
  }

  static fromArea(area) {
    return new Quadrado(Math.sqrt(area))
  }
}

const quadrado = Quadrado.fromArea(16)
console.log(quadrado) // Quadrado { lado: 4 }
console.log(quadrado.toString()) // side: 4 and area: 16
console.log(quadrado.calcularArea()) // 16

class Circulo extends Shape {
  constructor(raio) {
    super()
    this.raio = raio
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2)
  }

  toString() {
    return `raio: ${this.raio} ${super.toString()}`
  }

  static fromArea(area) {
    return new Circulo(Math.sqrt(area / Math.PI))
  }
}

// const circulo = new Circulo(10)

const circulo = Circulo.fromArea(314.1592653589793)
console.log(circulo) // Circulo { raio: 10 }
console.log(circulo.toString()) // raio: 10 and area: 314.1592653589793
console.log(circulo.calcularArea()) // 314.1592653589793
