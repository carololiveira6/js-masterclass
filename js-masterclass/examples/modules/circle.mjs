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

/*
É possível declarar uma classe anônima e exportá-la como padrão, sem a necessidade de nomeá-la.
Nesse caso, ficaria export class { ... }'
*/

/*
Se exportássemos o pow como default, deveríamos declarar a importação como:
import pow, { PI as pi } from './math.mjs'
*/

export default class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get area() {
    // return PI * pow(this.radius, 2)
    return pi * pow(this.radius, 2)
    // return math.PI * math.pow(this.radius, 2)
  }
}