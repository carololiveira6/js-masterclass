const book = {
  title: 'Clean Code',
  author: 'Robert C. Martin',
  pages: 464,
  language: 'English',
  available: true,
  'string-na-chave': 'Se declara dessa forma',
  10: 'Também podemos usar número na chave',
  0xff: 'E declará-los em hexadecimal, por exemplo, ou outro jeito',
}

/* Outra maneira */

const title = 'Clean Code'
const author = 'Robert C. Martin'
const pages = 464
const language = 'English'
const available = true
/*
 Como as chaves e os valores são iguais, não precisamos repetir.
 Exemplo:
 title: title reduz para title
 */
const livro = {
  title,
  author,
  pages,
  language,
  available,
}

/* Também temos a forma chave computada, onde podemos passar chaves em forma de variáveis */

const key1 = 'mesa'
const key2 = 'cadeira'
const key3 = 'sofá'
const key4 = 'rack'

const moveis = {
  [key1]: 'Mogno',
  [key2]: 'Azul',
  [key3]: 'Preto',
  [key4]: 'Madeira',
}

/* É possível atribuir propriedades aos objetos por meio da sua referência */

const pessoa1 = {}
const pessoa2 = new Object()
const pessoa3 = Object.create(null)

pessoa1.idade = 32
pessoa1.nome = 'Carolina'
pessoa1.nacionalidade = 'Brasileira'

pessoa2.idade = 58
pessoa2.nome = 'Ana Cristina'
pessoa2.nacionalidade = 'Brasileira'

pessoa3.idade = 65
pessoa3.nome = 'Aldir'
pessoa3.nacionalidade = 'Brasileira'

/* É possível computar as chaves de um objeto em tempo de execução por meio da sua referência */

const idade = 'idade'
const nome = 'nome'
const nacionalidade = 'nacionalidade'

const pessoa4 = {}

pessoa4[idade] = 32
pessoa4[nome] = 'Carolina'
pessoa4[nacionalidade] = 'Brasileira'

// Consoles
console.log(book)
console.log(livro)
console.log(moveis)
console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa4.idade)

// Retorna as chaves do objeto
for (let key in book) {
  console.log(key)
}

// Retorna os valores das chaves do objeto
for (let key in moveis) {
  console.log(moveis[key])
}

// Copia as chaves e os valores para outro objeto
const livroCopia = {}
for (let chave in livro) {
  livroCopia[chave] = livro[chave]
}
console.log(livroCopia)


// undefined e null

const esportes = {
  agua: 'Natação',
  grama: 'Futebol',
  quadra: 'Basquete',
  luta: 'Judô'
};

console.log(esportes.terra);
/* Usar o in para pesquisar se a chave está dentro do objeto */
console.log("agua" in esportes); // true
console.log("grama" in esportes); // true
console.log("asfalto" in esportes); // false

/* Não utilizar undefined ou null para apagar uma prrpriedade dentro de um objeto. Utilizar o operador delete */
delete esportes.luta; // ou delete esportes["luta"]
console.log(esportes);
console.log("luta" in esportes);
