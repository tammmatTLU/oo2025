abstract class AbstractResistor{
    abstract getResistance(): number;
    getCurrent(u: number):number{
        return u/this.getResistance();
    }
}

class Resistor extends AbstractResistor{
    r:number = 0;
    constructor(r:number){
        super();
        this.r=r;
    }

    getResistance():number{
        return this.r;
    }
}

class Switch extends AbstractResistor{
    protected on: boolean = false;
    toggleState(state:boolean):void{
        this.on = state ? true : false;
    }
    getResistance(): number{
        return this.on ? 0 : 440;
    }
    getCurrent(u:number):number{
        if(u>0 && this.on){
            throw new Error("Short Circuit!");
        } else{
            return super.getCurrent(u);
        }
    }
}

abstract class MultipleConnection extends AbstractResistor{
    resistors: AbstractResistor[] = [];

    addResistor(r:AbstractResistor):void{
        this.resistors.push(r);
    }
    addSwitch(s:Switch):void{
        this.resistors.push(s);
    }
}

class ParallelConnection extends MultipleConnection{
    getResistance():number {
        let inverseSum:number = 0;
        for(let element of this.resistors){
            inverseSum+=1/element.getResistance();
        }
        return 1/inverseSum;
    }
    getCurrent(u:number):number{
        return u/this.getResistance();
    }
}

class SeriesConnection extends MultipleConnection{
    getResistance():number{
        let totalResistance:number = 0;
        for(let element of this.resistors){
            totalResistance+=element.getResistance();
        }
        return totalResistance;
    }

    getCurrent(u:number):number{
        return u/this.getResistance();
    }
}

let sc1:SeriesConnection= new SeriesConnection();
sc1.addResistor(new Resistor(110));
sc1.addResistor(new Resistor(220));
let p1:ParallelConnection = new ParallelConnection();
p1.addResistor(new Resistor(330));
p1.addResistor(sc1);
console.log(p1.getResistance());

/*
let p:ParallelConnection = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(340));
p.addResistor(new Resistor(440));
p.addSwitch(new Switch());
//console.log(p.getResistance());
//console.log(p.getCurrent(5));

let p2:ParallelConnection = new ParallelConnection();
p2.addResistor(new Resistor(110));
p2.addResistor(new Resistor(110));
//console.log(p2.getResistance());
//console.log(p2.getCurrent(5));

let sc1:SeriesConnection= new SeriesConnection();
sc1.addResistor(new Resistor(110));
sc1.addResistor(new Resistor(220));
//console.log("Kogutakistus: " + sc1.getResistance());
let sc2:SeriesConnection= new SeriesConnection();
sc2.addResistor(new Resistor(440));
sc2.addResistor(new Resistor(220));

let sc3:SeriesConnection = new SeriesConnection();
sc3.addResistor(sc1);
sc3.addResistor(sc2);
console.log(sc3);
console.log(sc3.getResistance());
*/
//console.log("Kogutakistus: " + sc2.getResistance());
//console.log("Voolutugevus: " + sc1.getCurrent(5));
//let Circuit: AbstractResistor[] = [new Resistor(100), new Switch(), new Resistor(200), new Switch()];

/*for(let element of Circuit){
    console.log(element.getResistance());
}

function sumResistances(array: AbstractResistor[]):number{
    let resistanceSum:number = 0;
    for(let element of array){
        resistanceSum += element.getResistance();
    }
    return resistanceSum;
}
console.log(sumResistances(Circuit));
*/
/*
let r1:AbstractResistor = new Resistor(220);
console.log(r1.getResistance());
let s1 = new Switch();
console.log(s1.getResistance())
console.log(s1.getCurrent(5))
s1.toggleState(true);
console.log(s1.getResistance())
console.log(s1.getCurrent(5))
*/