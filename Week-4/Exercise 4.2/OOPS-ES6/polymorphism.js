class Shape {
    calculateArea() {}
}

class Rectangle extends Shape {
    calculateArea(width, height) {
        if (width > 0 && height > 0)
            return width * height;
        else
            return "Negetive values not allowed"
    }
}

class Triangle extends Shape {
    calculateArea(base, height) {
        if (base > 0 && height > 0)
            return (base * height) / 2;
        else
            return "Negetive values not allowed"
    }
}

class Circle extends Shape {
    calculateArea(radius) {
        if (radius > 0)
            return Math.PI * radius * radius;
        else
            return "Negetive values not allowed"
    }
}

const rectangle = new Rectangle();
const trianlge = new Triangle();
const circle = new Circle();

const areaOfRectangle = rectangle.calculateArea(4, 5);
const areaOfTriangle = trianlge.calculateArea(5, 8);
const areaOfCircle = circle.calculateArea(5);
const negAreaOfTriangle = trianlge.calculateArea(-5, 8);

console.log("Area of Rectangle = ", areaOfRectangle);
console.log("Area of Trianlge = ", areaOfTriangle);
console.log("Area of Circle = ", areaOfCircle);
console.log("Area of Triangle when neg values are given = ", negAreaOfTriangle);