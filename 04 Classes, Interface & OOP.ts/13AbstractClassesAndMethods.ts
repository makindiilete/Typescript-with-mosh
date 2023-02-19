/*
An Abstract class is a class that is not fully ready, its an uncooked meal... Another class will have to extends it and
finish the cooking in dt created class... So this abstract class should not instantiated because it may contains some methods
that does not make sense getting called...
e.g. Our shape class should be an abstract class because we do not want to call its 'render()' bcos we cannot render a shape
but we can render a circle created from a shape
*/
abstract class Shape {
  // we want to gv all our shapes a common property of 'color'
  constructor(public color: string) {}

  // And a method dt will define how the shape will be rendered..
  // We cannot define d logic here bcos each shape object sud define how they want to be rendered..
  // rendering a circle will b different from a triangle
  abstract render(): void; // an abstract method
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("Rendering a circle");
  }
}

let shape = new Shape("red"); // ds wont work bcos d class is an abstract class and we cannot create an object from it
shape.render();

// NOTE : - An abstract method can only live inside an abstract class
