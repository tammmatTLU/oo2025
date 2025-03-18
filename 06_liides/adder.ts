interface Adder{
    add(nr: number): void; //Method for adding a number
    getSum(): number; //Method for getting the sum
    reset(): void;
}

class CharCounter{
    constructor(protected adder: Adder){
        
    }
    addWordCharacters(word: string): void{
        this.adder.add(word.length);
    }
    getCharCount(): number{
        return this.adder.getSum();
    }
}

class SimpleAdder implements Adder{
    protected sum: number = 0; //Starting value for the sum is 0. Without giving the sum an initial value, it would be undefined.

    add(nr: number){
        this.sum+=nr;
    }
    getSum(): number{
        return this.sum;       
    }
    reset():void{
        this.sum = 0;
    }
}


let adder1: Adder = new SimpleAdder();
let counter1: CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Clumsy");
console.log(counter1.getCharCount());
counter1.addWordCharacters("Slow");
console.log(counter1.getCharCount());
counter1.addWordCharacters("Beginner");
console.log(counter1.getCharCount());
/*adder1.add(3);
adder1.add(5);
console.log(adder1.getSum());
*/