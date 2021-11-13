// 1) создать интерфейс на основе user и протипизировать функции:
interface IUser {
    name: string;
    age: number;
    gender: string;
}

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

function foobar(a: IUser): object {
    return a;
}

let user2 = {
    name: 'Denys',
    age: 32,
    gender: 'male'
};

const user = {
        name:"Max",
        age: 18,
        gender:'male'
    };

foobar(user2);
foobar(user)

function sum(a: number,b: number): number {
    return a + b;
}
function showSum(a: number,b: number): void {
    console.log(a + b);
}

function incAge(someUser: any, inc: number): number {
    someUser.age += inc;
    return someUser;
}

console.log(sum(1, 2));
showSum(2,3);
incAge(user, 2);


// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface IAnimal {
    move: string,
    say: string,
    info(move: string, say: string)
}

class Cat implements IAnimal {
    move: string;
    say: string;

    constructor(move: string, say: string) {
        this.move = move;
        this.say = say;
    }
    info(move: string, say: string) : string {
           return `Cat move: ${this.move} and say: ${this.say}`;
    }
}

class Bird implements IAnimal {
    move: string;
    say: string;

    constructor(move: string, say: string) {
        this.move = move;
        this.say = say;
    }

    info(move: string, say: string): string {
           return `Bird move: ${this.move} and say: ${this.say}`;
    }
}

class Fish implements IAnimal{
    move: string;
    say: string;
    constructor(move: string, say: string) {
        this.move = move;
        this.say = say;
    }

    info(move: string, say: string): string {
            return `Fish move: ${this.move} and say: ${this.say}`;
    }
}

let cat = new Cat('walk', 'myau');
let bird = new Bird('jump','sing');
let fish = new Fish('pull', 'm-m-m');

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

abstract class Shape {
    abstract perimeter(): number;
    abstract area(): number;
}

class Triangle extends Shape {
    constructor(private sideA: number, private sideB: number, private sideC: number) {
        super();
    }
    perimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }
    area(): number {
        return (( this.sideA + this.sideB + this.sideC) / 2 ) * 0.5;
    }
}

class Rectangle extends Shape{
    constructor(private sideA: number, private sideB: number) {
        super();
    }
    perimeter(): number {
        return (this.sideA + this.sideB) * 2;
    }
    area(): number {
        return this.sideA * this.sideB;
    }
}


// First method //
// let triangle1 = new Triangle(10, 15, 18);
// let rectangle1 = new Rectangle(10, 20);
//
// let triangle2 = new Triangle(3, 4, 5);
// let rectangle2 = new Rectangle(8, 10);
//
// let arrFigures: Array<number> = [triangle1.area(), rectangle1.area(), triangle2.area(), rectangle2.area()];
//
// for (let i = 0; i < arrFigures.length; i++) {
//     console.log(arrFigures[i]);
// }

// Second method //
const shapes: Shape[] = [new Triangle(10, 15, 18), new Rectangle(8, 10)]

for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}
