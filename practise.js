var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class User {
//     name: string;
//     age: number;
//     gender: string;
//
//     constructor(name: string, age: number, gender: string) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }
function foobar(a) {
    return a;
}
var user2 = {
    name: 'Denys',
    age: 32,
    gender: 'male'
};
var user = {
    name: "Max",
    age: 18,
    gender: 'male'
};
foobar(user2);
foobar(user);
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
var Cat = /** @class */ (function () {
    function Cat(move, say) {
        this.move = move;
        this.say = say;
    }
    Cat.prototype.info = function (move, say) {
        return "Cat move: " + move + " and say: " + say;
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(move, say) {
        this.move = move;
        this.say = say;
    }
    Bird.prototype.info = function (move, say) {
        return "Bird move: " + move + " and say: " + say;
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(move, say) {
        this.move = move;
        this.say = say;
    }
    Fish.prototype.info = function (move, say) {
        return "Fish move: " + move + " and say: " + say;
    };
    return Fish;
}());
var cat = new Cat('walk', 'myau');
var bird = new Bird('jump', 'sing');
var fish = new Fish('pull', 'm-m-m');
cat.info('run', 'may');
bird.info('fly', 'kra');
fish.info('jump', 'bul-bul');
//*** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин
// 2) проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.perimeter = function (a) {
        return a;
    };
    Shape.prototype.area = function (b) {
        return b;
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(sideA, sideB, sideC) {
        var _this = _super.call(this) || this;
        _this.sideA = sideA;
        _this.sideB = sideB;
        _this.sideC = sideC;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    Triangle.prototype.area = function () {
        return (this.sideA * this.sideB) / 2;
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(sideA, sideB) {
        var _this = _super.call(this) || this;
        _this.sideA = sideA;
        _this.sideB = sideB;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.sideA + this.sideB) * 2;
    };
    Rectangle.prototype.area = function () {
        return this.sideA * this.sideB;
    };
    return Rectangle;
}(Shape));
// First method //
var triangle1 = new Triangle(10, 15, 18);
var rectangle1 = new Rectangle(10, 20);
var triangle2 = new Triangle(3, 4, 5);
var rectangle2 = new Rectangle(8, 10);
var arrFigures = [triangle1.area(), rectangle1.area(), triangle2.area(), rectangle2.area()];
for (var i = 0; i < arrFigures.length; i++) {
    console.log(arrFigures[i]);
}
// Second method //
var Figures = /** @class */ (function () {
    function Figures() {
        this.figures = [];
    }
    Figures.prototype.newTriangle = function () {
        var tri = new Triangle(10, 12, 16);
        this.figures.push(tri);
        return tri;
    };
    Figures.prototype.newRectangle = function () {
        var rect = new Rectangle();
        this.figures.push(rect);
        return rect;
    };
    Figures.prototype.getSquareOfFigures = function () {
        for (var i = 0; i < this.figures.length; i++) {
            console.log(this.figures[i]);
        }
    };
    return Figures;
}());
var figures1 = new Figures();
figures1.newTriangle();
figures1.newRectangle();
figures1.getSquareOfFigures();
