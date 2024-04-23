/*
São convenções implementadas por Arrays, Maps, Sets e Strings, que os tornam iteráveis por meio de um protocolo de iteração.
*/

const languages = ['Fortran', 'Lisp', 'COBOL']

for (let i = 0; i < languages.length; i++) {
  console.log(languages[i])
}
/*
Fortran
Lisp
COBOL
*/

console.log('###############################')

for (let i in languages) {
  console.log(languages)
  /*
    [ 'Fortran', 'Lisp', 'COBOL' ]
    [ 'Fortran', 'Lisp', 'COBOL' ]
    [ 'Fortran', 'Lisp', 'COBOL' ]
  */
  console.log(languages[i])
  /*
    Fortran
    Lisp
    COBOL
  */
  console.log(i)
  /*
    0
    1
    2
  */
}

console.log('###############################')

languages.forEach(function (language) {
  console.log(language)
  /*
    Fortran
    Lisp
    COBOL
  */
})

console.log('###############################')

// Iterando com for...of - Primeiro uso dos Iterables

for (let language of languages) {
  console.log(language)
  /*
    Fortran
    Lisp
    COBOL
  */
}

console.log('###############################')

// Spread Operator - Também se baseia em objetos do tipo Iterable

const classicLanguages = ['Fortran', 'Lisp', 'COBOL']
const modernLanguages = ['Python', 'Ruby', 'JavaScript']

const languagesConcat = classicLanguages.concat(modernLanguages)
const languagesSpread = [...classicLanguages, ...modernLanguages]

console.log(languagesConcat)
// [ 'Fortran', 'Lisp', 'COBOL', 'Python', 'Ruby', 'JavaScript' ]
console.log(languagesSpread)
// [ 'Fortran', 'Lisp', 'COBOL', 'Python', 'Ruby', 'JavaScript' ]

console.log('###############################')

/*
Além do Array, é possível utilizar o protocolo de iteração dos objetos Map, Set e String
*/

const languagesArray = [
  ['Fortran', '1957'],
  ['Lisp', '1958'],
  ['COBOL', '1959'],
]
console.log(languagesArray)
// [ [ 'Fortran', '1957' ], [ 'Lisp', '1958' ], [ 'COBOL', '1959' ] ]

console.log('###############################')

const languagesMap = new Map([
  ['Fortran', '1957'],
  ['Lisp', '1958'],
  ['COBOL', '1959'],
])
console.log(languagesMap)
// Map(3) { 'Fortran' => '1957', 'Lisp' => '1958', 'COBOL' => '1959' }

console.log('###############################')

for (let language of languagesMap) {
  console.log(language)
  /*
    [ 'Fortran', '1957' ]
    [ 'Lisp', '1958' ]
    [ 'COBOL', '1959' ]
  */
}

console.log('###############################')

for (let [language, year] of languagesMap) {
  console.log(language, year)
  /*
    Fortran 1957
    Lisp 1958
    COBOL 1959
  */
}

console.log('###############################')

console.log([...languagesMap]) // spread operator
// [ [ 'Fortran', '1957' ], [ 'Lisp', '1958' ], [ 'COBOL', '1959' ] ]

console.log('###############################')

const languagesSet = new Set(['Fortran', 'Lisp', 'COBOL'])

for (let language of languagesSet) {
  console.log(language)
  /*
    Fortran
    Lisp
    COBOL
  */
}

console.log('###############################')

console.log([...languagesSet]) // spread operator
// [ 'Fortran', 'Lisp', 'COBOL' ]

console.log('###############################')

const languageString = 'JavaScript'

for (let char of languageString) {
  console.log(char)
  /*
    J
    a
    v
    a
    S
    c
    r
    i
    p
    t
  */
}

console.log('###############################')

console.log([...languageString]) // spread operator
// ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

console.log('###############################')

/*
O Iterable tem uma propriedade de chave Symbol.iterator, que define o protocolo de iteração para o objeto. 
*/

const languagesIterable = ['Fortran', 'Lisp', 'COBOL']

const iterator = languagesIterable[Symbol.iterator]()

console.log(iterator.next()) // { value: 'Fortran', done: false }

console.log(iterator.next()) // { value: 'Lisp', done: false }

console.log(iterator.next()) // { value: 'COBOL', done: false }

console.log(iterator.next()) // { value: undefined, done: true }

console.log('###############################')

const languagesIterableMap = new Map([
  ['Fortran', '1957'],
  ['Lisp', '1958'],
  ['COBOL', '1959'],
])

const iteratorMap = languagesIterableMap[Symbol.iterator]()

console.log(iteratorMap.next()) // { value: [ 'Fortran', '1957' ], done: false }

console.log(iteratorMap.next()) // { value: [ 'Lisp', '1958' ], done: false }

console.log(iteratorMap.next()) // { value: [ 'COBOL', '1959' ], done: false }

console.log(iteratorMap.next()) // { value: undefined, done: true }

console.log('###############################')

const iteratorEntries = languagesIterableMap.entries()

console.log(iteratorEntries.next()) // { value: [ 'Fortran', '1957' ], done: false }

console.log(iteratorEntries.next()) // { value: [ 'Lisp', '1958' ], done: false }

console.log(iteratorEntries.next()) // { value: [ 'COBOL', '1959' ], done: false }

console.log(iteratorEntries.next()) // { value: undefined, done: true }

console.log('###############################')

const iteratorKeys = languagesIterableMap.keys()

console.log(iteratorKeys.next()) // { value: 'Fortran', done: false }

console.log(iteratorKeys.next()) // { value: 'Lisp', done: false }

console.log(iteratorKeys.next()) // { value: 'COBOL', done: false }

console.log(iteratorKeys.next()) // { value: undefined, done: true }

console.log('###############################')

const iteratorValues = languagesIterableMap.values()

console.log(iteratorValues.next()) // { value: '1957', done: false }

console.log(iteratorValues.next()) // { value: '1958', done: false }

console.log(iteratorValues.next()) // { value: '1959', done: false }

console.log(iteratorValues.next()) // { value: undefined, done: true }

console.log('###############################')

const languagesIterableSet = new Set(['Fortran', 'Lisp', 'COBOL'])
// Set é como se fosse o Map onde a chave é igual ao valor

const iteratorSet = languagesIterableSet[Symbol.iterator]()

console.log(iteratorSet.next()) // { value: 'Fortran', done: false }

console.log(iteratorSet.next()) // { value: 'Lisp', done: false }

console.log(iteratorSet.next()) // { value: 'COBOL', done: false }

console.log(iteratorSet.next()) // { value: undefined, done: true }

console.log('###############################')

const iteratoSetEntries = languagesIterableMap.entries()

console.log(iteratoSetEntries.next()) // { value: [ 'Fortran', '1957' ], done: false }

console.log(iteratoSetEntries.next()) // { value: [ 'Lisp', '1958' ], done: false }

console.log(iteratoSetEntries.next()) // { value: [ 'COBOL', '1959' ], done: false }

console.log(iteratoSetEntries.next()) // { value: undefined, done: true }

console.log('###############################')

const iteratorSetKeys = languagesIterableSet.keys()

console.log(iteratorSetKeys.next()) // { value: 'Fortran', done: false }

console.log(iteratorSetKeys.next()) // { value: 'Lisp', done: false }

console.log(iteratorSetKeys.next()) // { value: 'COBOL', done: false }

console.log(iteratorSetKeys.next()) // { value: undefined, done: true }

console.log('###############################')

const iteratorSetValues = languagesIterableSet.values()

console.log(iteratorSetValues.next()) // { value: 'Fortran', done: false }

console.log(iteratorSetValues.next()) // { value: 'Lisp', done: false }

console.log(iteratorSetValues.next()) // { value: 'COBOL', done: false }

console.log(iteratorSetValues.next()) // { value: undefined, done: true }

console.log('###############################')

const languageStringIterable = 'COBOL'

const iteratorString = languageStringIterable[Symbol.iterator]()

console.log(iteratorString.next()) // { value: 'C', done: false }

console.log(iteratorString.next()) // { value: 'O', done: false }

console.log(iteratorString.next()) // { value: 'B', done: false }

console.log(iteratorString.next()) // { value: 'O', done: false }

console.log(iteratorString.next()) // { value: 'L', done: false }

console.log(iteratorString.next()) // { value: undefined, done: true }

console.log('###############################')

// Criar um Iterable

function createIterator(...array) {
  let i = 0
  return {
    next() {
      if (i < array.length) {
        return {
          value: array[i++],
          done: false,
        }
      } else {
        return {
          value: undefined,
          done: true,
        }
      }
    },
  }
}

const iteratorCreate = createIterator('Fortran', 'Lisp', 'COBOL')
console.log(iteratorCreate.next()) // { value: 'Fortran', done: false }
console.log(iteratorCreate.next()) // { value: 'Lisp', done: false }
console.log(iteratorCreate.next()) // { value: 'COBOL', done: false }
console.log(iteratorCreate.next()) // { value: undefined, done: true }

// for...of e spread operator não funcionam nesse caso, porque não é um objeto Iterable, ou seja, não tem a propriedade Symbol.iterator

console.log('###############################')

function createIterable(...array) {
  return {
    [Symbol.iterator]() {
      let i = 0
      return {
        next() {
          if (i < array.length) {
            return {
              value: array[i++],
              done: false,
            }
          } else {
            return {
              value: undefined,
              done: true,
            }
          }
        },
      }
    },
  }
}

const iterableCreate = createIterable('Fortran', 'Lisp', 'COBOL')
for (let language of iterableCreate) {
  console.log(language)
  /*
    Fortran
    Lisp
    COBOL
  */
}

console.log([...iterableCreate]) // [ 'Fortran', 'Lisp', 'COBOL' ]
