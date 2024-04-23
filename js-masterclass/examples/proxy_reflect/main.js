/*
Um proxy é capaz de interceptar diversos tipos de operações em um objeto alvo.

O objeto alvo é aquele que foi passado para o Proxy como primeiro argumento.

O objeto handler é um objeto que contém métodos que são chamados quando ocorre uma operação no objeto alvo.
*/

function createArray() {
  return {}
}

const languages = createArray()
console.log(languages) // {}

languages[0] = 'Python'
languages[1] = 'Ruby'
languages[2] = 'JavaScript'
console.log(languages) // { '0': 'Python', '1': 'Ruby', '2': 'JavaScript' }

console.log(languages.length) // undefined

console.log('------------------------------------------------------------')

function createArrayProxy() {
  return new Proxy({}, {})
}

const languagesProxy = createArrayProxy()
console.log(languagesProxy) // {}

languagesProxy[0] = 'Python'
languagesProxy[1] = 'Ruby'
languagesProxy[2] = 'JavaScript'
console.log(languagesProxy) // { '0': 'Python', '1': 'Ruby', '2': 'JavaScript' }

console.log(languagesProxy.length) // undefined

console.log('------------------------------------------------------------')

/*
Existem métodos, chamados de trap, para diversos tipos de eventos relacionados a um objeto.
Os traps são métodos que são chamados quando ocorre uma operação no objeto alvo.
Os traps são definidos no objeto handler.

- apply
- constructor
- defineProperty
- deleteProperty
- get
- getOwnPropertyDescriptor
- getPrototypeOf
- has
- isExtensible
- ownKeys
- preventExtensions
- set
- setPrototypeOf
*/

// O método set é invocado quando uma propriedade é definida no objeto alvo.

function createArraySet1() {
  return new Proxy(
    {},
    {
      set() {},
    }
  )
}
const languagesSet1 = createArraySet1()
console.log(languagesSet1) // {}

languagesSet1[0] = 'Python'
languagesSet1[1] = 'Ruby'
languagesSet1[2] = 'JavaScript'
console.log(languagesSet1) // {}
console.log(languagesSet1.length) // undefined

console.log('------------------------------------------------------------')

function createArraySet2() {
  return new Proxy(
    {},
    {
      set(target) {
        console.log(target) // {}
      },
    }
  )
}
const languagesSet2 = createArraySet2()
console.log(languagesSet2) // {}

languagesSet2[0] = 'Python'
languagesSet2[1] = 'Ruby'
languagesSet2[2] = 'JavaScript'
console.log(languagesSet2)
// {}
// {}
// {}
console.log(languagesSet2.length) // undefined

console.log('------------------------------------------------------------')

function createArraySet3() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        console.log(target, key, value)
      },
    }
  )
}

const languagesSet3 = createArraySet3()
console.log(languagesSet3) // {}

languagesSet3[0] = 'Python'
languagesSet3[1] = 'Ruby'
languagesSet3[2] = 'JavaScript'
console.log(languagesSet3)
// {} 0 Python
// {} 1 Ruby
// {} 2 JavaScript
console.log(languagesSet3.length) // undefined

console.log('------------------------------------------------------------')

function createArraySet4() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target[key] = value
      },
    }
  )
}

const languagesSet4 = createArraySet4()
console.log(languagesSet4) // {}

languagesSet4[0] = 'Python'
languagesSet4[1] = 'Ruby'
languagesSet4[2] = 'JavaScript'
console.log(languagesSet4) // { '0': 'Python', '1': 'Ruby', '2': 'JavaScript' }
console.log(languagesSet4.length) // undefined

console.log('------------------------------------------------------------')

function createArraySet() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0
        target.length++
        target[key] = value
      },
    }
  )
}

const languagesSet = createArraySet()
console.log(languagesSet) // {}

languagesSet[0] = 'Python'
languagesSet[1] = 'Ruby'
languagesSet[2] = 'JavaScript'
console.log(languagesSet) // { '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }
console.log(languagesSet.length) // 3

// O método deleteProperty é invocado quando uma propriedade é deletada do objeto alvo.

console.log('------------------------------------------------------------')

function createArrayDeleteProperty1() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0
        target.length++
        target[key] = value
      },
    }
  )
}

const languagesDeleteProperty1 = createArrayDeleteProperty1()
console.log(languagesDeleteProperty1) // {}

languagesDeleteProperty1[0] = 'Python'
languagesDeleteProperty1[1] = 'Ruby'
languagesDeleteProperty1[2] = 'JavaScript'
console.log(languagesDeleteProperty1)
//{ '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }

console.log(languagesDeleteProperty1.length) // 3

delete languagesDeleteProperty1[1]
delete languagesDeleteProperty1[2]
delete languagesDeleteProperty1[3]
console.log(languagesDeleteProperty1) // { '0': 'Python', length: 3 }
console.log(languagesDeleteProperty1.length) // 3

console.log('------------------------------------------------------------')

function createArrayDeleteProperty2() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0
        target.length++
        target[key] = value
      },

      deleteProperty(target, key) {},
    }
  )
}

const languagesDeleteProperty2 = createArrayDeleteProperty2()
console.log(languagesDeleteProperty2) // {}

languagesDeleteProperty2[0] = 'Python'
languagesDeleteProperty2[1] = 'Ruby'
languagesDeleteProperty2[2] = 'JavaScript'
console.log(languagesDeleteProperty2)
//{ '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }

console.log(languagesDeleteProperty2.length) // 3

delete languagesDeleteProperty2[1]
delete languagesDeleteProperty2[2]
delete languagesDeleteProperty2[3]
console.log(languagesDeleteProperty2)
//{ '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }

console.log(languagesDeleteProperty2.length) // 3

console.log('------------------------------------------------------------')

function createArrayDeleteProperty() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0
        target.length++
        target[key] = value
      },

      deleteProperty(target, key) {
        if (key in target) {
          target.length--
          delete target[key]
        }
      },
    }
  )
}

const languagesDeleteProperty = createArrayDeleteProperty()
console.log(languagesDeleteProperty) // {}

languagesDeleteProperty[0] = 'Python'
languagesDeleteProperty[1] = 'Ruby'
languagesDeleteProperty[2] = 'JavaScript'
console.log(languagesDeleteProperty)
//{ '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }

console.log(languagesDeleteProperty.length) // 3

delete languagesDeleteProperty[1]
delete languagesDeleteProperty[2]
delete languagesDeleteProperty[3]
console.log(languagesDeleteProperty) // { '0': 'Python', length: 1 }
console.log(languagesDeleteProperty.length) // 1

// O método get é invocado quando uma propriedade é acessada no objeto alvo.

console.log('------------------------------------------------------------')

function createArrayGet1() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0
        target.length++
        target[key] = value
      },

      get(target, key) {},

      deleteProperty(target, key) {
        if (key in target) {
          target.length--
          delete target[key]
        }
      },
    }
  )
}

const languagesGet1 = createArrayGet1()
console.log(languagesGet1) // {}

languagesGet1[0] = 'Python'
languagesGet1[1] = 'Ruby'
languagesGet1[2] = 'JavaScript'
console.log(languagesGet1)
//{ '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }

console.log(languagesGet1.length) // undefined

delete languagesGet1[1]
delete languagesGet1[2]
delete languagesGet1[3]
console.log(languagesGet1) // { '0': 'Python', length: 1 }
console.log(languagesGet1.length) // undefined

console.log('------------------------------------------------------------')

function createArrayGet2() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0
        target.length++
        target[key] = value
      },

      get(target, key) {
        return target[key]
      },

      deleteProperty(target, key) {
        if (key in target) {
          target.length--
          delete target[key]
        }
      },
    }
  )
}

const languagesGet2 = createArrayGet2()
console.log(languagesGet2) // {}

languagesGet2[0] = 'Python'
languagesGet2[1] = 'Ruby'
languagesGet2[2] = 'JavaScript'
console.log(languagesGet2)
//{ '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }

console.log(languagesGet2.length) // 3

delete languagesGet2[1]
delete languagesGet2[2]
delete languagesGet2[3]
console.log(languagesGet2) // { '0': 'Python', length: 1 }
console.log(languagesGet2.length) // 1
console.log(languagesGet2[0]) // Python
console.log(languagesGet2[3]) // undefined

console.log('------------------------------------------------------------')

function createArrayGet() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0
        target.length++
        target[key] = value
      },

      get(target, key) {
        if (typeof key === 'string' && key.match(/\d+/)) {
          if (!(key in target)) {
            throw `Property ${key} not found`
          }
        }
        return target[key]
      },

      deleteProperty(target, key) {
        if (key in target) {
          target.length--
          delete target[key]
        }
      },
    }
  )
}

const languagesGet = createArrayGet()
console.log(languagesGet) // {}

languagesGet[0] = 'Python'
languagesGet[1] = 'Ruby'
languagesGet[2] = 'JavaScript'
console.log(languagesGet)
//{ '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }

console.log(languagesGet.length) // 3

delete languagesGet[1]
delete languagesGet[2]
delete languagesGet[3]
console.log(languagesGet) // { '0': 'Python', length: 1 }
console.log(languagesGet.length) // 1
console.log(languagesGet[0]) // Python
console.log(languagesGet['JavaScript']) // undefined
// console.log(languagesGet[2]) // Property 2 not found
// console.log(languagesGet[3]) // Property 3 not found

/*
A Reflect API tem os mesmos métodos que existem no Proxy, permitindo a execução de diversos tipos de operações em um objeto alvo, para que não tenhamos que interagir diretamento com o objeto utilizando a sintaxe de colchetes.

A diferença é que a Reflect API é uma API estática, enquanto o Proxy é um objeto.

Interagimos com a Reflect API da mesma maneira que interagimos com a Math API, por exemplo.
*/

console.log('------------------------------------------------------------')

function createArrayReflectAPI() {
  return new Proxy(
    {},
    {
      set(target, key, value) {
        target.length = target.length || 0
        target.length++
        //target[key] = value
        Reflect.set(target, key, value)
      },

      get(target, key) {
        if (typeof key === 'string' && key.match(/\d+/)) {
          // if(!(key in target)) {
          //   throw `Property ${key} not found`
          // }
          if (!Reflect.has(target, key)) {
            throw `Property ${key} not found`
          }
        }
        // return target[key]
        return Reflect.get(target, key)
      },

      deleteProperty(target, key) {
        // if (key in target) {
        //   target.length--
        //   delete target[key]
        // }
        if (Reflect.has(target, key)) {
          target.length--
          Reflect.deleteProperty(target, key)
        }
      },
    }
  )
}

const languagesReflect = createArrayReflectAPI()
console.log(languagesReflect) // {}

languagesReflect[0] = 'Python'
languagesReflect[1] = 'Ruby'
languagesReflect[2] = 'JavaScript'
console.log(languagesReflect)
//{ '0': 'Python', '1': 'Ruby', '2': 'JavaScript', length: 3 }

console.log(languagesReflect.length) // 3

delete languagesReflect[1]
delete languagesReflect[2]
delete languagesReflect[3]
console.log(languagesReflect) // { '0': 'Python', length: 1 }
console.log(languagesReflect.length) // 1
console.log(languagesReflect[0]) // Python
console.log(languagesReflect['JavaScript']) // undefined
// console.log(languagesReflect[2]) // Property 2 not found
// console.log(languagesReflect[3]) // Property 3 not found
