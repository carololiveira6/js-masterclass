/*
Existe uma variável implícita chamada de THIS, que faz referência para o objeto responsável pela sua invocação.
*/

const rectangle = {
  x: 10,
  y: 2,
  // calculateArea: function() {
  //   return this.x * this.y;
  // }
  calculateArea() {
    return this.x * this.y
  },
}

console.log(rectangle.calculateArea())
// 20

const calculateArea = function() {
  return this.x * this.x
}
const square = {
  x: 10,
  calculateArea
};

console.log(square.calculateArea());
// 100