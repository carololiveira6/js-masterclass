/*
Os módulos são importantes para que possamos decompor o código em partes menores e mais fáceis de gerenciar, permitindo o reuso de código e a organização de funcionalidades.

Foram incorporados na linguagem JavaScript a partir do ECMAScript 2015 (ES6), especificado na própria linguagem, baseado no conceito de importação e exportação.

Para exportar um módulo, utilizamos a palavra-chave export, seguida do nome da função, variável ou classe que desejamos exportar. É possível exportar qualquer tipo de dado existente dentro de um módulo.

Para importar um módulo, utilizamos a palavra-chave import, seguida do nome da função, variável ou classe que desejamos importar, entre chaves, e o caminho do arquivo que contém o módulo. É possível importar qualquer tipo de dado existente dentro de um módulo.
*/

/*
Para importar somente o que deseja de um arquivo que contém várias exportações utilizando import...from, ou seja, utilizar modules no Node.js, é necessário ter a extensão .mjs, além de executar com a flag --experimental-modules.

import { PI, pow } from './math.mjs'
*/

/*
É possível utilizar um alias na importação, renomeando o que estiver sendo importado, utilizando a palavra-chave as.
*/

import { PI as pi, pow } from './math.mjs'

/*
Por meio do *, é possível importar todas as exportações de um arquivo em um único objeto, utilizando a palavra-chave as para renomear o que está sendo importado.

import * as math from './math.mjs'
*/

/*
Também podemos importar e exportar de forma padrão, utilizando a palavra-chave default. A exportação padrão é utilizada quando queremos exportar apenas um valor por módulo.
*/

// import { Circle } from './circle.mjs'

/*
Como utilizamos default na exportação, não é necessário utilizar as chaves para importar a classe Circle.
*/

import Circle from './circle.mjs'

/*
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get area() {
    // return PI * pow(this.radius, 2)
    return pi * pow(this.radius, 2)
    // return math.PI * math.pow(this.radius, 2)
  }
}
*/

const circle = new Circle(10)
console.log(circle) // Circle { radius: 10 }
console.log(circle.area) // 314.1592653589793

/*
A ordem da importação dos módulos não é importante, porque é pré inicializado, sofrendo o processo de hoisting.
*/

/*
Não é permitido realizar a importação e exportação dentro de blocos condicionais, como if, else, for, while, entre outros. É necessário que esteja no escopo global (top level). Elas precisam ser executadas em tempo de compilação (parse), não em tempo de execução (runtime).
*/