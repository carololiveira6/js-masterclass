/*
Os accessor methods, quando invocados, retornam informações específicas sobre o array

- indexOf: Retorna a posição do primeiro elemento encontrado
- lastIndexOf: Retorna a posição do último elemento encontrado
- includes: Retorna true se o elemento existir
- concat: Retorna um novo array resultante da concatenação de um ou mais arrays
- slice: Retorna parte de um determinado array de acordo com a posição inicial e final
- join: Converte o array para uma String, juntando os elementos com base em um separador
*/

// - indexOf: Retorna a posição do primeiro elemento encontrado

const frameworksIndexOf = ['Angular.js', 'React.js', 'Vue.js', 'Vue.js']

console.log(frameworksIndexOf.indexOf('React.js')) // 1
console.log(frameworksIndexOf.indexOf('Ember.js')) // -1 porque não existe no array
console.log(frameworksIndexOf.indexOf('Vue.js')) // 2 porque é a primeira ocorrência
console.log(frameworksIndexOf.indexOf('Angular.js')) // 0

// - lastIndexOf: Retorna a posição do último elemento encontrado

const frameworksLastIndexOf = ['Angular.js', 'React.js', 'Vue.js', 'React.js']

console.log(frameworksLastIndexOf.lastIndexOf('React.js')) // 3 porque é a última ocorrência
console.log(frameworksLastIndexOf.lastIndexOf('Ember.js')) // -1 porque não existe no array
console.log(frameworksLastIndexOf.lastIndexOf('Vue.js')) // 2
console.log(frameworksLastIndexOf.lastIndexOf('Angular.js')) // 0

// - includes: Retorna true se o elemento existir

const frameworksIncludes = ['Angular.js', 'React.js', 'Vue.js']

console.log(frameworksIncludes.includes('React.js')) // true
console.log(frameworksIncludes.includes('Ember.js')) // false
console.log(frameworksIncludes.includes('Vue.js')) // true
console.log(frameworksIncludes.includes('Angular.js')) // true

// - concat: Retorna um novo array resultante da concatenação de um ou mais arrays, sem alterar os arrays originais

const frameworksFirst = ['Angular.js', 'React.js', 'Vue.js']
const frameworksSecond = ['Ember.js', 'Backbone.js', 'Meteor.js']

const frameworksConcatFirst = frameworksFirst.concat(frameworksSecond)
const frameworksConcatSecond = frameworksSecond.concat(frameworksFirst)

console.log(frameworksConcatFirst) // [ 'Angular.js', 'React.js', 'Vue.js', 'Ember.js', 'Backbone.js', 'Meteor.js' ]

console.log(frameworksConcatSecond) // [ 'Ember.js', 'Backbone.js', 'Meteor.js', 'Angular.js', 'React.js', 'Vue.js' ]

const frameworksConcat = [].concat(frameworksFirst, frameworksSecond)

console.log(frameworksConcat) // [ 'Angular.js', 'React.js', 'Vue.js', 'Ember.js', 'Backbone.js', 'Meteor.js' ]

// - slice: Retorna parte de um determinado array de acordo com a posição inicial e final, sem alterar o array original e sem incluir o último elemento (é n - 1)

const frameworksSlice = [
  'Angular.js',
  'React.js',
  'Vue.js',
  'Ember.js',
  'Backbone.js',
]

console.log(frameworksSlice.slice(1, 3)) // [ 'React.js', 'Vue.js' ]
console.log(frameworksSlice.slice(2, 4)) // [ 'Vue.js', 'Ember.js' ]
console.log(frameworksSlice.slice(0, 2)) // [ 'Angular.js', 'React.js' ]
console.log(frameworksSlice.slice(3)) // [ 'Ember.js', 'Backbone.js' ]
console.log(frameworksSlice.slice(1)) // [ 'React.js', 'Vue.js', 'Ember.js', 'Backbone.js' ]

// - join: Converte o array para uma String, juntando os elementos com base em um separador entre eles, como se fosse um toString()

const frameworksJoin = ['Angular.js', 'React.js', 'Vue.js']

console.log(frameworksJoin.join()) // Angular.js,React.js,Vue.js
console.log(frameworksJoin.join(' - ')) // Angular.js - React.js - Vue.js
console.log(frameworksJoin.join(' | ')) // Angular.js | React.js | Vue.js
console.log(frameworksJoin.join('')) // Angular.jsReact.jsVue.js
console.log(frameworksJoin.join(' ')) // Angular.js React.js Vue.js
console.log(frameworksJoin.join(', ')) // Angular.js, React.js, Vue.js
console.log(frameworksJoin.join(',')) // Angular.js,React.js,Vue.js
console.log(frameworksJoin.join(';')) // Angular.js;React.js;Vue.js
