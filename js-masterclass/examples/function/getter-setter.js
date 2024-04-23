/*
As funções do tipo getter e setter servem para interceptar o acesso as propriedades de determinado objeto.
*/

/*
const rectangle = {
  x: 10,
  y:2,
  calculateArea() {
    return this.x * this.y;
  },
};
*/

/*
Usando o GET passa a agir como propriedade, e não como método, e assim passa a invocar a função associada
Utilize chaves diferentes para a função setter e a propriedade do objeto
*/

const rectangle = {
  set x(x) {
    if (x > 0) {
      this._x = x;
    } else {
      console.log('Invalid value for x');
    }
  },
  set y(y) {
    if (y > 0) {
      this._y = y;
    } else {
      console.log('Invalid value for y');
    }
  },
  get area() {
    return this._x * this._y;
  },
};

rectangle.x = 10;
rectangle.y = 2
console.log(rectangle.area);

/*
Por meio da operação defineProperty da Object API, também é possível definir funções do tipo getter e setter
*/

const rectangle2 = {};
Object.defineProperty(rectangle2, 'x', {
  set(x) {
    if (x > 0) {
      this._x = x;
    } else {
      console.log('Invalid value for x');
    }
  }
});
Object.defineProperty(rectangle2, 'y', {
  set(y) {
    if (y > 0) {
      this._y = y;
    } else {
      console.log('Invalid value for y');
    }
  }
});
Object.defineProperty(rectangle2, 'area', {
  get() {
    return this._x * this._y;
  }
});

rectangle2.x = 10;
rectangle2.y = 2
console.log(rectangle2.area);