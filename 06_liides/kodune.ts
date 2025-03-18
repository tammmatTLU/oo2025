interface Shape{
    perimeter(): number;
    area(): number;
    type(): string;
}

class Circle implements Shape{
    constructor(protected radius: number){}
    
    perimeter(): number{
        let perim: number = Math.floor(Math.PI * this.radius * 2 * 100) / 100;
        return perim;
    }

    area(): number{
        let area: number = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
        return area;
    }

    type(): string{
        return "Circle";
    }
}

class Rectangle implements Shape{
    constructor(protected width: number, protected height: number){}

    perimeter(): number{
        let perim: number = Math.floor(2 * (this.width + this.height) * 100) / 100;
        return perim;
    }

    area(): number{
        let area: number = Math.floor(this.width * this.height * 100) / 100;
        return area;
    }

    type(): string{
        return "Rectangle";
    }
}

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