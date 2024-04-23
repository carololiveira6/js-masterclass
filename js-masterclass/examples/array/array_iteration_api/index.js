/*
Os iteration methods, quando invocados, iteram sobre os elementos do array.

- forEach: Executa a função passada por parâmetro para cada elemento do array
- filter: Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmetro
- find: Retorna o primeiro elemento que retornou true na função passada por parâmetro
- some: Retorna true se pelo menos um elemento retornou true na função passada por parâmetro
- every: Retorna true se todos os elementos retornaram true na função passada por parâmetro
- map: Retorna um novo array contendo o retorno da função passada por parâmetro para cada elemento do array
- reduce: Retorna um valor que é acumulado a cada iteração, de acordo com a função passada por parâmetro
*/

// - forEach: Executa a função passada por parâmetro para cada elemento do array

const frameworks = ['Angular.js', 'React.js', 'Vue.js']

frameworks.forEach((framework) => console.log(framework))

// - filter: Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmetro

const frameworksJS = [
  { name: 'Angular.js', contributors: 1548 },
  { name: 'React.js', contributors: 746 },
  { name: 'Vue.js', contributors: 240 },
]

const allFrameworks = frameworksJS.filter(function (framework) {
  return true
})
console.log(allFrameworks)

const popularFrameworks = frameworksJS.filter(
  (framework) => framework.contributors > 500
)
console.log(popularFrameworks)

const fewFrameworks = frameworksJS.filter(
  (framework) => framework.contributors < 500
)
console.log(fewFrameworks)

const findFramework = frameworksJS.filter(
  (framework) => framework.name === 'Vue.js'
)
console.log(findFramework[0]) // { name: 'Vue.js', contributors: 240 }
console.log(findFramework) // [ { name: 'Vue.js', contributors: 240 } ]

// - find: Retorna o primeiro elemento que retornou true na função passada por parâmetro

const react = frameworksJS.find((framework) => framework.name === 'React.js')
console.log(react)

// - some: Retorna true se pelo menos um elemento retornou true na função passada por parâmetro

const hasPopularFrameworks = frameworksJS.some(
  (framework) => framework.contributors > 500
)
console.log(hasPopularFrameworks) // true

const nameHasJS = frameworksJS.some((framework) =>
  framework.name.includes('.js')
)
console.log(nameHasJS) // true

const hasNoContributors = frameworksJS.some(
  (framework) => framework.contributors < 0
)
console.log(hasNoContributors) // false

// - every: Retorna true se todos os elementos retornaram true na função passada por parâmetro

const allFrameworksHasJS = frameworksJS.every((framework) =>
  framework.name.includes('.js')
)
console.log(allFrameworksHasJS) // true

const allFrameworksHasContributors = frameworksJS.every(
  (framework) => framework.contributors > 0
)
console.log(allFrameworksHasContributors) // true

const allFrameworksHasMoreThan500Contributors = frameworksJS.every(
  (framework) => framework.contributors > 500
)
console.log(allFrameworksHasMoreThan500Contributors) // false

// - map: Retorna um novo array contendo o retorno da função passada por parâmetro para cada elemento do array

const frameworksNames = frameworksJS.map((framework) => framework.name)
console.log(frameworksNames) // [ 'Angular.js', 'React.js', 'Vue.js' ]

const frameworksContributors = frameworksJS.map(
  (framework) => framework.contributors
)
console.log(frameworksContributors) // [ 1548, 746, 240 ]

// - reduce: Retorna um valor que é acumulado a cada iteração, de acordo com a função passada por parâmetro

const totalContributors = frameworksJS.reduce((total, framework) => {
  return total + framework.contributors
}, 0) // O segundo parâmetro (0) é o valor inicial do acumulador (total), total = 0

console.log(totalContributors) // 2534
