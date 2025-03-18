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
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; //Starting value for the sum is 0. Without giving the sum an initial value, it would be undefined.
    }
    SimpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    SimpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
var counter1 = new CharCounter(adder1);
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
