/* Para comparar dois objetos, podemos utilizar o laço for e percorrer o primeiro objeto comparando-o com o segundo e, depois, percorrer o segundo objeto comparando-o com o primeiro. */

const firstBook = {
  name: "O Auto da Compadecida",
  author: "Ariano Suassuna"
};

const secondBook = {
  name: "O Auto da Compadecida",
  author: "Ariano Suassuna"
};

let equal = true;

for (let key in firstBook) {
  if (firstBook[key] !== secondBook[key]) {
    equal = false
  };
};

for (let key in secondBook) {
  if (firstBook[key] !== secondBook[key]) {
    equal = false
  };
};

console.log(equal);