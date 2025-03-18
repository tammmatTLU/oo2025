interface Adder{
    add(nr: number): void; //Method for adding a number
    getSum(): number; //Method for getting the sum
    getAvg(): number;
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

class CountingAdder implements Adder{
     //Starting value for the sum is 0. Without giving the sum an initial value, it would be undefined.
    protected array: number[] = [];
    //protected sum: number = 0;
    //protected count: number = 0;
    add(nr: number){
        this.array.push(nr);
        //this.sum+=nr;
        //this.count++;
    }
    getSum(): number{
        let sum: number = 0;
        for(let i=0;i<this.array.length;i++){
            sum+=this.array[i];
        }
        return sum;
        //return this.sum;
    }
    getAvg(): number{
        if(this.array.length == 0){
            console.log("No numbers to work with.");
            return 0;
        } else{
            return this.getSum()/this.array.length;
        }
    }

    getRange():number{
        let range: number = 0;
        if(this.array.length == 0){
            console.log("No numbers to work with.");
            return range;
        } else {
            let minimum: number = this.array[0];
            let maximum: number = minimum;
            for(let i=0; i<this.array.length; i++){
                if(this.array[i]<minimum){
                    minimum = this.array[i];
                } else if(this.array[i]>maximum){
                    maximum = this.array[i];
                }
            }
            range = maximum - minimum;
            return range;
        }
    }
}


let adder1: Adder = new CountingAdder();
let counter1: CharCounter = new CharCounter(adder1);
counter1.addWordCharacters("Fish");
console.log(counter1.getCharCount());
counter1.addWordCharacters("Balls");
console.log(counter1.getCharCount());
counter1.addWordCharacters("Victory Royale!");
console.log(counter1.getCharCount());
console.log(adder1.getAvg());

/*adder1.add(3);
adder1.add(5);
console.log(adder1.getSum());
*/