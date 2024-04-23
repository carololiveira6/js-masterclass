/* 
Por meio das operações call e apply é possível invocar uma função passando o this por parâmetro.
*/

/*
const circle = {
  radius: 10,
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(circle.calculateArea());
*/

const calculateArea = function() {
  return Math.PI * Math.pow(this.radius, 2);
}

const circle = {
  radius: 10,
  calculateArea
};

console.log(calculateArea.call(circle));
console.log(calculateArea.apply(circle));

/*
A diferença entre call e apply é basicamente como a forma dos parâmetros é passada.
*/

const calculateArea2 = function(fn) {
  return fn(Math.PI * Math.pow(this.radius, 2));
}

const circle2 = {
  radius: 10,
  calculateArea
};

console.log(calculateArea2.call(circle2, Math.round));
console.log(calculateArea2.apply(circle2, [Math.ceil]));

/*
A operação bind permite encapsular o this dentro da função, retornando-a.
*/

const calculateArea3 = function(fn) {
  return fn(Math.PI * Math.pow(this.radius, 2));
}

const circle3 = {
  radius: 10,
  calculateArea3
};

const calculateAreaForCircle = calculateArea3.bind(circle3);

console.log(calculateAreaForCircle(Math.round));
console.log(calculateAreaForCircle(Math.ceil));