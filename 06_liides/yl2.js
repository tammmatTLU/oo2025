var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    CharCounter.prototype.getCharCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        //Starting value for the sum is 0. Without giving the sum an initial value, it would be undefined.
        this.array = [];
    }
    //protected sum: number = 0;
    //protected count: number = 0;
    CountingAdder.prototype.add = function (nr) {
        this.array.push(nr);
        //this.sum+=nr;
        //this.count++;
    };
    CountingAdder.prototype.getSum = function () {
        var sum = 0;
        for (var i = 0; i < this.array.length; i++) {
            sum += this.array[i];
        }
        return sum;
        //return this.sum;
    };
    CountingAdder.prototype.getAvg = function () {
        if (this.array.length == 0) {
            return 0;
        }
        else {
            return this.getSum() / this.array.length;
        }
    };
    return CountingAdder;
}());
var adder1 = new CountingAdder();
var counter1 = new CharCounter(adder1);
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
