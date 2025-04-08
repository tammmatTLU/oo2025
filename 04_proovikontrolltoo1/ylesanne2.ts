/*
Libisev keskmine

* Koosta funktsioon kolme arvu aritmeetilise keskmise leidmiseks. Katseta.

* Koosta funktsioon massiivi libiseva keskmise leidmiseks. Väljundiks on massiiv, mis on sisendist kahe elemendi võrra lühem ning mille iga elemendi väärtuseks on sisendmassiivi vastava elemendi ning selle järgmise ja ülejärgmise elemendi keskmine.

* Koosta klass, mille eksemplarile saab vastava käsuga lisada arve. Teise käsuga saab küsida nende arvude libiseva keskmise massiivi vastavalt eelmise punkti juhendile. Koosta kood nõnda, et uue arvu lisamisel eksemplarile tehtaks uusi arvutusi võimalikult vähe (st. ei arvutataks kogu tulemust massiivi algusest uuesti)
*/

function arithmeticAvg(a: number, b:number, c:number): number{
    let avg: number = Math.floor((a + b + c)/3*100)/100; 
    return avg;
}
//Esimese kontroll
//console.log(arithmeticAvg(29, 26, 45));

function arrayAvg(array: number[]):number[]{
    let newArray: number[] = [];
    for(let i=0;i<array.length-2;i++){
        newArray.push(Math.floor((array[i]+array[i+1]+array[i+2])/3*100)/100);
    }
    return newArray
}
//Teise kontroll
//console.log(arrayAvg([101, 2, 3, 4, 5, 6, 7]));

class numberArray{
    avgArray: number[] = [];
    origArray: number[];
    constructor(startingArray: number[]){
        this.origArray = startingArray;
        this.avgArray = [];
        for(let i=0;i<this.origArray.length-2;i++){
            this.avgArray.push(Math.floor((this.origArray[i]+this.origArray[i+1]+this.origArray[i+2])/3*100)/100);
        }
    }

    addNumber(number: number){
        this.avgArray.push(Math.floor((this.origArray[this.origArray.length-1] + this.origArray[this.origArray.length-2] + number)/3*100)/100);
        this.origArray.push(number);
    }
    showAvg():number[]{
        return this.avgArray;
    }
}

let katse = new numberArray([1,2,3,4,5]);
console.log(katse.showAvg());
katse.addNumber(6);
console.log(katse.showAvg());
katse.addNumber(7);
console.log(katse.showAvg());
