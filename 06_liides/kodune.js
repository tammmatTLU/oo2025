var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.perimeter = function () {
        var perim = Math.floor(Math.PI * this.radius * 2 * 100) / 100;
        return perim;
    };
    Circle.prototype.area = function () {
        var area = Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
        return area;
    };
    Circle.prototype.type = function () {
        return "Circle";
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.perimeter = function () {
        var perim = Math.floor(2 * (this.width + this.height) * 100) / 100;
        return perim;
    };
    Rectangle.prototype.area = function () {
        var area = Math.floor(this.width * this.height * 100) / 100;
        return area;
    };
    Rectangle.prototype.type = function () {
        return "Rectangle";
    };
    return Rectangle;
}());
/*
let test1 = new Circle(5);
console.log(test1.perimiter());
console.log(test1.area());
let test1 = new Rectangle(10, 10);


let tests: Shape[] = [new Circle(5), new Rectangle(8, 10), new Circle(10), new Circle(11), new Rectangle(2, 3)];

for(let i=0;i<tests.length;i++){
    console.log(tests[i].type());
    console.log(tests[i].perimiter());
    console.log(tests[i].area());
}
*/ 
