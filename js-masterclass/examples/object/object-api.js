/*
O método Object.assign faz a cópia das propriedades dos objetos passados por parâmetro para o objeto alvo, que é retornado.
*/

const javascript = Object.create({})

Object.assign(
  javascript,
  {
    name: 'JavaScript',
    year: 1995,
    paradigm: 'OO and Functional',
  },
  {
    author: 'Brendan Eich',
    influencedBy: 'Java, Scheme and Self',
  }
)

console.log(javascript)

/* 
O método Object.keys retorna as chaves das propriedades do objeto.
O método Object.values retorna os valores das propriedades do objeto.
O método Object.entries retorna as propriedades do objeto em pares de chave e valor.
*/

const java = {
  name: 'Java',
  year: 1991,
  paradigm: 'OO',
}

console.log(Object.keys(java))
console.log(Object.values(java))
console.log(Object.entries(java))

/* O método Object.is compara dois objetos, considerando os tipos de dados, de forma similar ao operador ===

NaN === Nan -> false
console.log(Object.is(NaN, NaN)) -> true
*/

const python = {
  name: 'Python',
  year: 1991,
  paradigm: 'OO and Functional',
}

const javascript2 = Object.create({})

Object.assign(javascript2, {
  name: 'JavaScript',
  year: 1995,
  paradigm: 'OO and Functional',
})

console.log(javascript)
console.log(Object.is(python, javascript))
console.log(Object.is(javascript, javascript2))

/*
-> defineProperty <-

configurable -> Permite que uma determinada propriedade seja apagada

enumerable -> Permite que uma determinada propriedade seja enumerada

value -> Define o valor de uma determinada propriedade

writable -> Permite que uma determinada propriedade tenha seu valor modificado
*/

const javascript3 = {}
Object.defineProperty(javascript3, 'name', {
  value: 'JavaScript',
})

console.log(javascript3)
// retorna {}
console.log(javascript3.name)
// retorna JavaScript
console.log(Object.keys(javascript3))
// retorna []
console.log(Object.values(javascript3))
// retorna []
console.log(Object.entries(javascript3))
// retorna []

// Usando enumerable para retornar os valores

const javascript4 = {}
Object.defineProperty(javascript4, 'name', {
  enumerable: true,
  value: 'JavaScript',
})

console.log(javascript4)
// retorna { name: 'JavaScript' }
console.log(javascript4.name)
// retorna JavaScript
console.log(Object.keys(javascript4))
// retorna [ 'name' ]
console.log(Object.values(javascript4))
// retorna [ 'JavaScript' ]
console.log(Object.entries(javascript4))
// retorna [ ['name', 'JavaScript' ] ]

// Usando writable para alterar o valor da propriedade

const javascript5 = {}
Object.defineProperty(javascript5, 'name', {
  enumerable: true,
  value: 'JavaScript',
  writable: true,
})

javascript5.name = 'ECMAScript'

console.log(javascript5)
// retorna { name: 'ECMAScript' }
console.log(javascript5.name)
// retorna ECMAScript
console.log(Object.keys(javascript5))
// retorna [ 'name' ]
console.log(Object.values(javascript5))
// retorna [ 'ECMAScript' ]
console.log(Object.entries(javascript5))
// retorna [ ['name', 'ECMAScript' ] ]

// Usando configurable para apagar a propriedade

const javascript6 = {}
Object.defineProperty(javascript6, 'name', {
  configurable: true,
  enumerable: true,
  value: 'JavaScript',
  writable: true,
})

javascript6.name = 'ECMAScript'
delete javascript6.name

console.log(javascript6)
// retorna {}
console.log(Object.keys(javascript6))
// retorna []
console.log(Object.values(javascript6))
// retorna []
console.log(Object.entries(javascript6))
// retorna []

/*
preventExtensions, seal e freeze

preventExtensions -> Impede que o objeto tenha novas propriedades, mas permite modificar ou remover as propriedades existentes

seal -> Impede que o objeto tenha novas propriedades ou apague propriedades existentes, mas permite modificar propriedades existentes

freeze -> Impede que o objeto tenha novas propriedades, apague ou modifique propriedades existentes
*/

const pascal = {
  name: 'Pascal',
  year: 1971,
  paradigm: 'OO',
}

console.log(Object.isExtensible(pascal))
// retorna true porque ainda não passou a função

Object.preventExtensions(pascal)

console.log(Object.isExtensible(pascal))
// retorna false porque passamos a função acima

pascal.name = 'Pascalzim'

console.log(pascal)
// retorna { name: 'Pascalzim', year: 1971, paradigm: 'OO' }

pascal.author = 'Niklaus Wirth'

console.log(pascal)
// retorna { name: 'Pascalzim', year: 1971, paradigm: 'OO' }, a nova propriedade não é criada

delete pascal.year

console.log(pascal)
// retorna { name: 'Pascalzim', paradigm: 'OO' }

const pascal1 = {
  name: 'Pascal',
  year: 1971,
  paradigm: 'OO',
}

console.log(Object.isExtensible(pascal1))
// retorna false

Object.seal(pascal1)

console.log(Object.isSealed(pascal1))
// retorna true porque passamos a função acima

pascal1.name = 'Pascalzim'

console.log(pascal1)
// retorna { name: 'Pascalzim', year: 1971, paradigm: 'OO' }

pascal1.author = 'Niklaus Wirth'

console.log(pascal1)
// retorna { name: 'Pascalzim', year: 1971, paradigm: 'OO' }, a nova propriedade não é criada

delete pascal1.year

console.log(pascal1)
// retorna { name: 'Pascalzim', year: 1971, paradigm: 'OO' }, a propriedade não é deletada

const pascal2 = {
  name: 'Pascal',
  year: 1971,
  paradigm: 'OO',
}

Object.freeze(pascal2)

console.log(Object.isExtensible(pascal2))
// retorna false

console.log(Object.isSealed(pascal2))
// retorna true

console.log(Object.isFrozen(pascal2))
// retorna true

pascal2.name = 'Pascalzim'

console.log(pascal2)
// retorna { name: 'Pascal', year: 1971, paradigm: 'OO' }

pascal2.author = 'Niklaus Wirth'

console.log(pascal2)
// retorna { name: 'Pascal', year: 1971, paradigm: 'OO' }, a nova propriedade não é criada

delete pascal2.year

console.log(pascal2)
// retorna { name: 'Pascal', year: 1971, paradigm: 'OO' }, a propriedade não é deletada

/*
Não é possível alterar o protótipo do objeto, que se torna imutável
*/

// Object.setPrototypeOf(pascal, {}); -> retorna o erro #<Object> is not extensible
