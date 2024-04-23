/*
Os mutator methods, quando invocados, modificam o array

- push: Adiciona um elemento no final
- pop: Remove um elemento do final
- unshift: Adiciona um elemento no início
- shift: Remove um elemento do início
- splice: Remove, substitui ou adiciona um ou mais elementos em uma determinada posição
- sort: Ordena os elementos de acordo com a função de ordenação
- reverse: Inverte a ordem dos elementos
- fill: Preenche os elementos de acordo com a posição inicial e final
*/

const languages = ['Python', 'C', 'JavaScript']
console.log(languages)

// - push: Adiciona um elemento no final

console.log(languages.push('Java'))
console.log(languages.push('Go'))
console.log(languages)

// - pop: Remove um elemento do final

console.log(languages.pop())
console.log(languages)

console.log(languages.pop())
console.log(languages)

// - unshift: Adiciona um elemento no início

console.log(languages.unshift('C++'))
console.log(languages)

console.log(languages.unshift('Go'))
console.log(languages)

// - shift: Remove um elemento do início

console.log(languages.shift())
console.log(languages)

// - splice: Remove, substitui ou adiciona um ou mais elementos em uma determinada posição (usamos no lugar de delete para remover elemento no array)

const languages2 = ['Python', 'C', 'JavaScript']
console.log(languages2) //  ['Python', 'C', 'JavaScript'];
console.log(languages2.splice(1, 2)) // 1 = posição do elemento a ser removido, 2 = quantidade de elementos a serem removidos - Retorna: [ 'C', 'JavaScript' ]
console.log(languages2) // ['Python']

const languages3 = ['Python', 'C', 'JavaScript']
console.log(languages3.splice(1, 1)) // [ 'C' ]
console.log(languages3.splice(1, 0, 'C++', 'C#'))
console.log(languages3) // [ 'Python', 'C++', 'C#', 'JavaScript' ]
console.log(languages3.splice(1, 2, 'C')) // [ 'C++', 'C#' ]
console.log(languages3) // [ 'Python', 'C', 'JavaScript' ]

// - sort: Ordena os elementos de acordo com a função de ordenação

const languages4 = [
  { name: 'Python', year: 1991 },
  { name: 'C', year: 1972 },
  { name: 'Java', year: 1995 },
]

languages4.sort(function (a, b) {
  return -1
}) // se essa função retornar 1 ou 0, os elementos ficam na mesma posição.

console.log(languages4) // Não ordena

console.log(languages4.sort((a, b) => a.year - b.year)) // Ordena por ano - crescente
console.log(languages4.sort((a, b) => b.year - a.year)) // Ordena por ano - decrescente

console.log(languages4.sort((a, b) => (a.name <= b.name ? -1 : 1))) // Ordena por ordem alfabética
console.log(languages4.sort((a, b) => (a.name > b.name ? -1 : 1))) // Ordena por ordem alfabética

console.log(languages4.sort((a, b) => a.name.localeCompare(b.name)))
console.log(languages4.sort((a, b) => a.name.localeCompare(b.name) * -1))

// - reverse: Inverte a ordem dos elementos

const languages5 = ['Python', 'C', 'JavaScript']

console.log(languages5)
console.log(languages5.reverse())
console.log(languages5.reverse())

// - fill: Preenche os elementos de acordo com a posição inicial e final

const languages6 = ['Go', 'Ruby', 'PHP']
console.log(languages6) // [ 'Go', 'Ruby', 'PHP' ]
languages6.fill('JavaScript')
console.log(languages6) // [ 'JavaScript', 'JavaScript', 'JavaScript' ]

const languages7 = ['Go', 'Ruby', 'PHP']
console.log(languages7) // [ 'Go', 'Ruby', 'PHP' ]
languages7.fill('JavaScript', 1)
console.log(languages7) // [ 'Go', 'JavaScript', 'JavaScript' ]

const languages8 = ['Go', 'Ruby', 'PHP']
console.log(languages8) // [ 'Go', 'Ruby', 'PHP' ]
languages8.fill('JavaScript', 0, 2)
console.log(languages8) // [ 'JavaScript', 'JavaScript', 'PHP' ]
