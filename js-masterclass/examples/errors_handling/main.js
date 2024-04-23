/*
Na linguagem JavaScript, qualquer tipo de dado pode ser lançado como um erro, interrompendo o fluxo de execução.
*/
const Rectangle = function(x, y) {
  this.x = x;
  this.y = y;
  this.calculateArea = function() {
    if (this.x < 0 || this.y < 0) {
      throw "Invalid value for x or y";
    };
    return this.x * this.y;
  };
};

try {
  const rectangle1 = new Rectangle(10, 2);
  const rectangle2 = new Rectangle(-10, 2);
  
  console.log(rectangle1.calculateArea()); // 20
  console.log(rectangle2.calculateArea()); // Invalid value for x or y
} catch (error) {
  console.log(error);
};